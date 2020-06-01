import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import PostModal from '../components/PostModal';
import SettingsModal from "../components/SettingsModal";
import './PPPageStyle.css'

function PPPage() {
    // Setting our component's initial state
    const [posts, setPosts] = useState([]);
    const [numPosts, setNumPosts] = useState(0);
    const [profileImg, setProfileImg] = useState("");
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState([]);
    const [color, setColor] = useState(" ");
    const [numFollowers, setNumFollowers] = useState();
    const [numFollowing, setNumFollowing] = useState();
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const authContext = useContext(AuthContext);

    // Load all books and store them with setBooks
    useEffect(() => {
        getUserInfo();
        getUserPosts();
    }, []);

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

    const getUserInfo = () => {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                setUsername(data.username);
                setProfileImg(data.profileImgSrc);
                setBio(data.bio);
                document.body.className=(data.color);
                setColor(data.color);
                setNumFollowers(data.followers.length);
                setNumFollowing(data.following.length);
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
                    <img className="profileImg" src={profileImg} alt="Profile Pic" />
                    <h3 className="username">{username}</h3>
                </div>
                <div className="verticalLine infoBlock1 infoBlock">
                    {numPosts} posts
                </div>
                <div className="verticalLine infoBlock2 infoBlock">
                    {numFollowers} followers
                </div>
                <div className="verticalLine infoBlock3 infoBlock">
                    following {numFollowing} 
                </div>
                <div className="bioSection">
                    {bio ? <p className="bio">{bio}</p> : null}
                    <button onClick={onClickLogoutHandler}>Logout</button>
                    <SettingsModal
                        userImg={profileImg}
                        username={username}
                        refresh={getUserInfo} />
                    <PostModal
                        userImg={profileImg}
                        username={username}
                        refresh={getUserPosts} 
                        color={color}/>
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
