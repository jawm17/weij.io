
const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Post = require('../models/Post');
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider);


const signToken = userID => {
    return JWT.sign({
        iss: "crackPotHippie",
        sub: userID
    }, "crackPotHippie", { expiresIn: "2h" });
}

// All routes in this file are prefixed with /user/ --------------------------------------------------------------------

// register new user
userRouter.post('/register', (req, res) => {
    const { username, password } = req.body;
    const message = { msgBody: "Error has occured", msgError: true };

    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({ message });
        if (user)
            res.status(400).json({ message: { msgBody: "Username is already taken", msgError: true } });
        else {
            const account = web3.eth.accounts.create();
            const address = account.address;
            const key = account.privateKey;
            const newUser = new User({ username, password, address, key });
            newUser.save(err => {
                if (err)
                    res.status(500).json({ message });
                else
                    res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
            });
        }
    });
});

// post login credentials
userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username, role } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { username, role } });
    }
});

//logout
userRouter.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "" }, success: true });
});

//gets user info for home page
userRouter.get('/info', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    User.findById({ _id: req.user._id }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ username: document.username, address: document.address, key: document.key, profileImgSrc: document.profileImgSrc, color: document.color, bio: document.bio, followers: document.followers, following: document.following, balance: document.balance, authenticated: true });
        }
    });
});

//gets users containing search query in their username
userRouter.post('/query/users', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    User.find({ "username": { '$regex': req.body.query } }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else if (document) {
            res.status(200).json({ document });
        }
        else {
            res.status(200).json({ error: "no users found" });
        }
    });
});

//create a post
userRouter.post('/post-photo', passport.authenticate('jwt', { session: false }), (req, res) => {
    const post = new Post(req.body);
    const message = { msgBody: "Error has occured", msgError: true };
    post.save(err => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            req.user.posts.push(post);
            req.user.save(err => {
                if (err) {
                    res.status(500).json({ message });
                }
                else {
                    res.status(200).json({ message: { msgBody: "Successfully created photo-post", msgError: false } })
                }
            });
        }
    });
});

//follow user
userRouter.post('/follow', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    User.findOne({ _id: req.user._id, following: req.body.username }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else if (document) {
            res.status(200).json({ message: { msgBody: "already following", msgError: false } })
        }
        else if (!document) {
            User.findOneAndUpdate({ _id: req.user._id }, { $push: { following: req.body.username } }).exec((err, document) => {
                if (err) {
                    res.status(500).json({ message });
                }
                else {
                    User.findOneAndUpdate({ username: req.body.username }, { $push: { followers: req.user.username } }).exec((err, document) => {
                        if (err) {
                            res.status(500).json({ message });
                        }
                        else {
                            res.status(200).json({ message: { msgBody: "Successfully followed user", msgError: false } })
                        }
                    });
                }
            });
        }
    });
});

//unfollow user
userRouter.post('/unfollow', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    User.findOne({ _id: req.user._id, following: req.body.username }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else if (document) {
            User.findOneAndUpdate({ _id: req.user._id }, { $pull: { following: req.body.username } }).exec((err, document) => {
                if (err) {
                    res.status(500).json({ message });
                }
                else {
                    User.findOneAndUpdate({ username: req.body.username }, { $pull: { followers: req.user.username } }).exec((err, document) => {
                        if (err) {
                            res.status(500).json({ message });
                        }
                        else {
                            res.status(200).json({ message: { msgBody: "Successfully unfollowed user", msgError: false } })
                        }
                    });
                }
            });
        }
        else if (!document) {
            res.status(200).json({ message: { msgBody: "not following", msgError: false } });
        }
    });
});


//get all posts form user
userRouter.get('/posts', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    User.findById({ _id: req.user._id }).populate("posts").exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ posts: document.posts, authenticated: true });
        }
    });
});

//gets images for feed
userRouter.get('/feed', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    User.findOne({ _id: req.user._id }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else if (document) {
            document.following.push(document.username);
            Post.find({ "user": { $in: document.following } }).exec((err, document2) => {
                if (err) {
                    res.status(500).json({ message });
                }
                else {
                    res.status(200).json(document2);
                }
            });
        }
    });
});

//check if authenticated
userRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username } });
});

//get user info for user /user
userRouter.get('/:user', (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    User.findOne({ "username": req.params.user }).populate("posts").exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else if (document) {
            res.status(200).json({ profileImg: document.profileImgSrc, username: document.username, posts: document.posts, followers: document.followers, following: document.following, color: document.color, bio: document.bio, profileImgSrc: document.profileImgSrc, address: document.address });
        }
        else {
            res.status(200).json({ error: "no users found" });
        }
    });
});

// update user color
userRouter.post('/update-color', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    const color = req.body.color;
    User.findOneAndUpdate({ _id: req.user._id }, { color: color }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ message: { msgBody: "Successfully updated user color", msgError: false } });
        }
    });
});

// update user bio
userRouter.post('/update-bio', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    const bio = req.body.bio;
    User.findOneAndUpdate({ _id: req.user._id }, { bio: bio }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ message: { msgBody: "Successfully updated user bio", msgError: false } });
        }
    });
});

// update user profileimg
userRouter.post('/update-profileImg', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    const profileImg = req.body.profileImg;
    User.findOneAndUpdate({ _id: req.user._id }, { profileImgSrc: profileImg }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ message: { msgBody: "Successfully updated user image", msgError: false } });
        }
    });
});

// update user balance
userRouter.post('/update-balance', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    const funds = req.body.funds;
    User.findOneAndUpdate({ _id: req.user._id }, { $inc: { balance: funds } }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ message: { msgBody: "Successfully updated balance", msgError: false } });
        }
    });
});

// new tipping transaction
userRouter.post('/tipTx', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    const funds = req.body.funds;
    const to = req.body.to;
    const from = req.body.from;
    const date = req.body.date;
    User.findOneAndUpdate({ _id: req.user._id }, { $inc: { balance: -funds }, $push: { sentTx: { "to": to, "amount": funds, "date": date } } }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            User.findOneAndUpdate({ "username": to }, { $inc: { balance: funds }, $push: { recievedTx: { "from": from, "amount": funds, "date": date } } }).exec((err, document) => {
                if (err) {
                    res.status(500).json({ message });
                }
                else {
                    res.status(200).json({ message: { msgBody: "Successfully tipped ETH", msgError: false } });
                }
            });
            res.status(200).json({ message: { msgBody: "Successfully tipped ETH", msgError: false } });
        }
    });
});

// find username associated with address
userRouter.post('/user-address', (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    User.findOne({ "address": req.body.address }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else if (document) {
            res.status(200).json({ username: document.username });
        }
        else {
            res.status(200).json({ error: "no users found" });
        }
    });
});


module.exports = userRouter;