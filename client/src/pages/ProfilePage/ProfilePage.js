import React, { useEffect, useState, useContext } from "react";
import UserService from '../../services/UserService';
import "./ProfilePageStyle.css";
import Background from "../../components/Background";
import Background2 from "../../components/Background2";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

export default function ProfilePage(props) {
    const [username, setUsername] = useState("");
    const [profileImg, setProfileImg] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");
    const [bio, setBio] = useState("");
    const [posts, setPosts] = useState([]);
    const [numFollowing, setNumFollowing] = useState();
    const [numFollowers, setNumFollowers] = useState();
    const [following, setFollowing] = useState(false);

    useEffect(() => {
        // setUser(props.match.params.user);
        getUserInfo(props.match.params.user);
    }, [following]);

    function getUserInfo(username) {
        UserService.getOtherUserInfo(username).then(data => {
            setUsername(data.username);
            setProfileImg(data.profileImg);
            setPosts(data.posts);
            setBio(data.bio);
            setNumFollowers(data.followers.length);
            setNumFollowing(data.following.length);
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
        <div>
            <Header color={"purple"}/>
            <Nav color={"purple"} page={"search"}/>
            <Background color={"purple"} />
            <div className="profilePageContainer">
                <div className="profilePage">
                    <div className="userDiv">
                        <img className="profileImg" src={profileImg} alt="Profile Pic" />
                        <div className="userInfo">
                            <h3 className="username">{username}</h3>
                            <div className="bottomInfo">
                                <h3 className="numPosts">{posts.length} posts</h3>
                                <h3 className="numFollowers">{numFollowers} Followers</h3>
                                {bio ? <p className="bio">{bio}</p> : null}
                                {following ? <button className="followToggle" onClick={() => unFollowUser()}>Unfollow</button> : <button className="followToggle" onClick={() => followUser()}>Follow</button>}
                                <button className="followToggle">^</button>
                            </div>

                        </div>
                    </div>
                    <div className="breakHorizontal"></div>

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