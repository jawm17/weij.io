import React, { useEffect, useState, useContext } from "react";
import UserService from '../../services/UserService';
import "./ProfilePageStyle.css";

export default function ProfilePage(props) {
    const [username, setUsername] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [bio, setBio] = useState("");
    const [posts, setPosts] = useState([]);
    const [following, setFollowing] = useState(false);

    function checkUser(name) {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                if (data.username === name) {
                    window.location.href = ('/profile');
                }
            }
        });
    }

    useEffect(() => {
        // setUser(props.match.params.user);
        getUserInfo(props.match.params.user);
        checkUser(props.match.params.user);
    }, []);

    function getUserInfo(username) {
        UserService.getOtherUserInfo(username).then(data => {
            setUsername(data.username);
            setProfileImg(data.profileImg);
            setPosts(data.posts);
            setBio(data.bio);
            document.body.className=(data.color);
        });
        UserService.getUserInfo().then(data2 => {
            data2.following.map(user => {
                if (user === username) {
                    setFollowing(true);
                }
            })

        });
    }

    function followUser() {
        if (!following) {
            UserService.followUser(username).then(data => {
                setFollowing(true);
            });
        }
    }

    function unFollowUser() {
        if (following) {
            UserService.unfollowUser(username).then(data => {
                setFollowing(false);
            });
        }
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
                    <div className="card2">
                        <div className="container2">
                            {posts.length} posts
                        </div>
                    </div>
                </div>
                <div className="verticalLine infoBlock2 infoBlock">
                    <div className="card2">
                        <div className="container2">
                            200 subscribers
                        </div>
                    </div>
                </div>
                <div className="verticalLine infoBlock3 infoBlock">
                    <div className="card2">
                        <div className="container2">
                            $400 monthly subscription
                        </div>
                    </div>
                </div>
                <div className="bioSection">
                    {bio ? <p className="bio">{bio}</p> : null}
                    {following ? <button onClick={() => unFollowUser()}>Unfollow</button> : <button onClick={() => followUser()}>Follow</button>}
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