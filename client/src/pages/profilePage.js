import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import PostModal from '../components/PostModal';
import './profilePageStyle.css'

function Profile() {
    // Setting our component's initial state
    const [posts, setPosts] = useState([]);
    const [numPosts, setNumPosts] = useState(0);
    const [username, setUsername] = useState([]);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const authContext = useContext(AuthContext);

    // Load all books and store them with setBooks
    useEffect(() => {
        getUserName();
        getUserPosts();
    })

    const getUserPosts = () => {
        UserService.getUserPosts().then(data => {
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

    const getUserName = () => {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                setUsername(data.username);
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
                    <img className="profileImg" src="https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" alt="Profile Pic" />
                    <h3 className="username">{username}</h3>
                </div>
                <div className="verticalLine infoBlock1 infoBlock">
                    {numPosts} posts
                </div>
                <div className="verticalLine infoBlock2 infoBlock">
                    200 subscribers
                </div>
                <div className="verticalLine infoBlock3 infoBlock">
                    $5 monthly subscription
                </div>
                <div className="bioSection">
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu convallis dui, et ultricies ex. Pellentesque consequat orci tortor, at sollicitudin eros consequat sed.</p>
                    <button onClick={onClickLogoutHandler}>Logout</button>
                    <button>Settings</button>
                    <PostModal />
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


export default Profile;
