import React, { useEffect, useState, useContext} from "react";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import HeaderAccessed from '../../components2/headerAccessed';
import PostModal from '../../components2/postModal';
import media from "../../videos.json";
import MediaPreview from "../../components2/mediaPreview";
import "./profileStyle.css";

export default function Profile() {

    const authContext = useContext(AuthContext);
    const [profileImg, setProfileImg] = useState("https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4");
    const [creatingPost, setCreatingPost] = useState(false);
    const [username, setUsername] = useState("");
    // const [top, setTop] = useState(90);
    // const [profilePicTop, setProfilePicTop] = useState(60);
    // const [picWidth, setPicWidth] = useState(120);
    // const [nameTop, setNameTop] = useState(195);
    // const [picLeft, setPicLeft] = useState(80);
    // const [fixedTop, setFixedTop] = useState(300);
    // const [bgTop, setBgTop] = useState(0);
    let scrollArea;

    // const style = {
    //     infoArea: {
    //         top: top,
    //         backgroundPositionY: bgTop
    //     },
    //     profilePic: {
    //         marginTop: profilePicTop,
    //         marginLeft: picLeft,
    //         width: picWidth
    //     },
    //     username: {
    //         top: nameTop,
    //         left: 240
    //     },
    //     fixedView: {
    //         marginTop: fixedTop
    //     },
    //     infoFlex: {
    //         top: nameTop - 10
    //     }
    // }

    // useEffect(() => {
    //     scrollArea = document.getElementById("profileBg");
    //     scrollArea.addEventListener("scroll", () => {
    //         checkScroll();
    //     });

    // });

    // function checkScroll() {
    //     if (scrollArea.scrollTop < 10) {
    //         // initial
    //         setTop(90);
    //         setProfilePicTop(60);
    //         setPicWidth(120);
    //         setNameTop(195);
    //         setPicLeft(80);
    //         setFixedTop(300);
    //         setBgTop(0);
    //     } else {
    //         setTop(12);
    //         setProfilePicTop(110);
    //         setPicWidth(90);
    //         setNameTop(156);
    //         setFixedTop(220);
    //         setPicLeft(100);
    //         setBgTop(-180);
    //     }
    // }

    // function getInfo() {
    //     UserService.getUserInfo().then(data => {
    //         if (!data.message) {
    //             setUsername(data.username);
    //             setProfileImg(data.profileImgSrc);
    //             setNumFollowers(data.followers.length);
    //             setNumFollowing(data.following.length);
    //             console.log(data);
    //         }
    //         else if (data.message.msgBody === "Unauthorized") {
    //             authContext.setUser({ username: "" });
    //             authContext.setIsAuthenticated(false);
    //             window.alert("not logged in");
    //         }
    //     });
    // }

    function requestUserData() {
        UserService.getUserInfo().then(data => {
            if (!data.message) {
                setUsername(data.username);
                setProfileImg(data.profileImgSrc);
            }
            else if (data.message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
                window.alert("not logged in");
            }
        });
    }


    function createAPost() {
        setCreatingPost(true);
    }

    function doneCreating() {
        setCreatingPost(false);
    }


    return (
        <div>
            <HeaderAccessed secured="t" />
            {creatingPost ?  <PostModal username={username} profileSrc={profileImg} done={() => doneCreating()}/> : null}
            <div id="profileBg">
                <div id="infoArea">
                    <div id="infoAreaFlex">
                        <div id="infoAreaContainer">
                            <img id="profilePicture" src={profileImg} alt="profile avatar"></img>
                            <div id="usernameDisplay">
                                Jawm42
                            </div>

                            <div id="infoFlex">
                                <div className="num">
                                    350
                                <div className='label'>
                                        videos
                                </div>
                                </div>
                                <div className="num">
                                    2,000,012
                                <div className='label'>
                                        subscribers
                                </div>
                                </div>
                                <div className="num">
                                    4,023
                                <div className='label'>
                                        Eth Earned
                                </div>
                                </div>
                            </div>
                            <div id="postButton" onClick={() => createAPost()}>
                                +
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fixedView">
                    <div id="flexContainer">

                        {media.map(video => {
                            if (!video.deleted) {
                                return <MediaPreview
                                    key={video.thumb}
                                    id={video.thumb}
                                    imgUrl={video.sources}
                                    price={video.price}
                                    privileged={video.privileged}
                                    username={video.user}
                                />
                            }
                        })}

                    </div>
                </div>
            </div>

        </div>
    );
}