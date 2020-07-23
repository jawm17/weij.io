const express = require('express');
const mediaRouter = express.Router();
const passport = require('passport');
require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Post = require('../models/Post');

const signToken = userID => {
    return JWT.sign({
        iss: "crackPotHippie",
        sub: userID
    }, "crackPotHippie", { expiresIn: "48h" });
}

// get comments
mediaRouter.post('/comments', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    Post.find({ "imgSrc": req.body.photoID }).exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({
                authenticated: true,
                message: "ample forth wayward traveller..."
            });
        }
    });
});

module.exports = mediaRouter;