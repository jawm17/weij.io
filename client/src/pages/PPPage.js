import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import PostModal from '../components/PostModal';
import SettingsModal from "../components/SettingsModal";
import './PPPageStyle.css'

function PPPage() {
    // Setting our component's initial state
    const [userObject, setUserObject] = useState({ username: "", profileImg: "https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" });
    const [posts, setPosts] = useState([]);
    const [numPosts, setNumPosts] = useState(0);
    const [save, setSave] = useState(false);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const authContext = useContext(AuthContext);

    // Load all books and store them with setBooks
    useEffect(() => {
        getUserInfo();
        getUserPosts();
    }, [save]);

    const getUserInfo = () => {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                // Set userObject's values
                setUserObject({
                    ...userObject,
                    profileImg: data.profileImgSrc,
                    username: data.username,
                    bio: data.bio,
                    color: data.color,
                    numFollowers: data.followers.length,
                    numFollowing: data.following.length,
                });
                document.body.className = (data.color);
            }
            else if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    const getUserPosts = () => {
        UserService.getUserPosts().then(data => {
            console.log(data.posts);
            const { message } = data;
            if (!message) {
                setPosts(data.posts)
                setNumPosts(data.posts.length);
            }
            else if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    return (
        <div className="profilePage">
            <div className="infoSection">
                <a className="arrowATag" href="/home"><img className="backArrow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Feather-arrows-arrow-left.svg/768px-Feather-arrows-arrow-left.svg.png" alt="back arrow button"></img></a>
                <div className="profileUsernamePhoto">
                    <img className="profileImg" src={userObject.profileImg} alt="Profile Pic" />
                    <h3 className="username">{userObject.username}</h3>
                </div>
                <div className="verticalLine infoBlock1 infoBlock">
                    {numPosts} posts
                </div>
                <div className="verticalLine infoBlock2 infoBlock">
                    {userObject.numFollowers} followers
                </div>
                <div className="verticalLine infoBlock3 infoBlock">
                    following {userObject.numFollowing}
                </div>
                <div className="bioSection">
                    <p className="bio">{userObject.bio}</p>
                    <button onClick={onClickLogoutHandler}>Logout</button>
                    <SettingsModal
                        userImg={userObject.profileImg}
                        username={userObject.username}
                        refresh={() => (setSave(!save))} />
                    <PostModal
                        userImg={userObject.profileImg}
                        username={userObject.username}
                        refresh={() => (setSave(!save))}
                        color={userObject.color} />
                </div>
            </div>


            <div className="outerPostSection">
                <div className="postSection">
                    {posts.map(post => (
                        <img className="post"
                            key={post._id}
                            src={post.imgSrc}
                            alt={"user post"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


export default PPPage;
