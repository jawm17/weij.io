import React, { useEffect, useState, useContext } from "react";
import UserService from '../../services/UserService';
import history from '../../history';
import "./ProfilePageStyle.css";
import Background from "../../components/Background";
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
        if (props.match.params.user) {
            getUserInfo(props.match.params.user);
            localStorage.setItem('prevPage', `/user/${props.match.params.user}`);
        } else {
            history.push("/home");
        }
    }, [following]);

    function getUserInfo(username) {
        UserService.getOtherUserInfo(username).then(data => {
            console.log(data);
            if (!data.error) {
                setUsername(data.username);
                setProfileImg(data.profileImg);
                setPosts(data.posts.reverse());
                setBio(data.bio);
                setNumFollowers(data.followers.length);
                setNumFollowing(data.following.length);
            } else {
                history.push("/home");
            }
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
            <Header color={"purple"} page={"profile"} />
            <Nav color={"purple"} page={"profile"} />
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
                                {following ? <button className="directSend" onClick={() => (history.push(`/send/to/${username}`))}><img className="directSendImage" src="https://image.flaticon.com/icons/svg/2983/2983788.svg"></img></button> : null}
                            </div>

                        </div>
                    </div>
                    <div className="userPosts">
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
        </div>
    );
}