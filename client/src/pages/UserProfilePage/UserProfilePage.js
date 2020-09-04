import React, { useEffect, useState, useContext } from "react";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import "../ProfilePage/ProfilePageStyle.css";
import Background from "../../components/Background";
import PostModal from '../../components/PostModal';
import SettingsModal from "../../components/SettingsModal";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

export default function UserProfilePage(props) {
    const [username, setUsername] = useState("");
    const [profileImg, setProfileImg] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");
    const [bio, setBio] = useState("");
    const [posts, setPosts] = useState([]);
    const [save, setSave] = useState(false);
    const [numFollowing, setNumFollowing] = useState();
    const [color, setColor] = useState("purple");
    const [numFollowers, setNumFollowers] = useState();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        // setUser(props.match.params.user);
        localStorage.setItem('prevPage', `/profile`);
        getUserInfo(props.match.params.user);
        getUserPosts();
    }, [save]);

    const getUserInfo = () => {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                setUsername(data.username);
                setProfileImg(data.profileImgSrc);
                setBio(data.bio);
                setNumFollowers(data.followers.length);
                setNumFollowing(data.following.length);
                setColor(data.color);
                console.log(data);
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
                setPosts(data.posts.reverse())
            }
            else if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    return (
        <div>
            <Header color={color} page={"userProfile"} />
            <Nav color={color} page={"userProfile"} />
            <Background color={color} />
            <div className="profilePageContainer">
                <div className="profilePage">
                    <div className="userDiv">
                        <img className="profileImg" src={profileImg} alt="Profile Pic" />
                        <div className="userInfo">
                            <h3 className="username">{username}</h3>
                            <div className="bottomInfo">
                                <h3 className="numPosts">{posts.length} posts</h3>
                                <h3 className="numFollowers">{numFollowers} Followers</h3>
                                <h3 className="numFollowers">Following {numFollowing}</h3>
                                {bio ? <p className="bio">{bio}</p> : null}
                                <SettingsModal
                                    userImg={profileImg}
                                    username={username}
                                    refresh={() => (setSave(!save))} />
                                <PostModal
                                    userImg={profileImg}
                                    username={username}
                                    refresh={() => (setSave(!save))}
                                    color={color} />
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

// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from '../../context/AuthContext';
// import AuthService from '../../services/AuthService';
// import UserService from '../../services/UserService';
// import PostModal from '../../components/PostModal';
// import SettingsModal from "../../components/SettingsModal";
// import './UserProfilePageStyle.css'

// export default function UserProfilePage() {
//     // Setting our component's initial state
//     const [userObject, setUserObject] = useState({ username: "", profileImg: "https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" });
//     const [posts, setPosts] = useState([]);
//     const [numPosts, setNumPosts] = useState(0);
//     const [save, setSave] = useState(false);
//     const { setIsAuthenticated, setUser } = useContext(AuthContext);
//     const authContext = useContext(AuthContext);

//     // Load all books and store them with setBooks
//     useEffect(() => {
//         getUserInfo();
//         getUserPosts();
//     }, [save]);

//     const getUserInfo = () => {
//         UserService.getUserInfo().then(data => {
//             const { message } = data;
//             if (!message) {
//                 // Set userObject's values
//                 setUserObject({
//                     ...userObject,
//                     profileImg: data.profileImgSrc,
//                     username: data.username,
//                     bio: data.bio,
//                     color: data.color,
//                     numFollowers: data.followers.length,
//                     numFollowing: data.following.length,
//                 });
//             }
//             else if (message.msgBody === "Unauthorized") {
//                 authContext.setUser({ username: "" });
//                 authContext.setIsAuthenticated(false);
//             }
//         });
//     }

//     const getUserPosts = () => {
//         UserService.getUserPosts().then(data => {
//             console.log(data.posts);
//             const { message } = data;
//             if (!message) {
//                 setPosts(data.posts)
//                 setNumPosts(data.posts.length);
//             }
//             else if (message.msgBody === "Unauthorized") {
//                 authContext.setUser({ username: "" });
//                 authContext.setIsAuthenticated(false);
//             }
//         });
//     }

//     const onClickLogoutHandler = () => {
//         AuthService.logout().then(data => {
//             if (data.success) {
//                 setUser(data.user);
//                 setIsAuthenticated(false);
//             }
//         });
//     }

//     return (
//         <div className="profilePage">
//             <div className="infoSection">
//                 <a className="arrowATag" href="/home"><img className="backArrow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Feather-arrows-arrow-left.svg/768px-Feather-arrows-arrow-left.svg.png" alt="back arrow button"></img></a>
//                 <div className="profileUsernamePhoto">
//                     <img className="profileImg" src={userObject.profileImg} alt="Profile Pic" />
//                     <h3 className="username">{userObject.username}</h3>
//                 </div>
//                 <div className="verticalLine infoBlock1 infoBlock">
//                     {numPosts} posts
//                 </div>
//                 <div className="verticalLine infoBlock2 infoBlock">
//                     {userObject.numFollowers} followers
//                 </div>
//                 <div className="verticalLine infoBlock3 infoBlock">
//                     following {userObject.numFollowing}
//                 </div>
//                 <div className="bioSection">
//                     <p className="bio">{userObject.bio}</p>
//                     <button onClick={onClickLogoutHandler}>Logout</button>
//                     <SettingsModal
//                         userImg={userObject.profileImg}
//                         username={userObject.username}
//                         refresh={() => (setSave(!save))} />
//                     <PostModal
//                         userImg={userObject.profileImg}
//                         username={userObject.username}
//                         refresh={() => (setSave(!save))}
//                         color={userObject.color} />
//                 </div>
//             </div>


//             <div className="outerPostSection">
//                 <div className="postSection">
//                     {posts.map(post => (
//                         <img className="post"
//                             key={post._id}
//                             src={post.imgSrc}
//                             alt={"user post"}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
