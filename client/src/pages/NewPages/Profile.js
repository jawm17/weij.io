import React, { useEffect, useState } from "react";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import HeaderAccessed from '../../components2/headerAccessed';
import PostModal from '../../components2/postModal';
import "./profileStyle.css";

export default function Profile() {

    const [profileImg, setProfileImg] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");
    const [top, setTop] = useState(90);
    const [profilePicTop, setProfilePicTop] = useState(145);
    const [picWidth, setPicWidth] = useState(120);
    const [nameTop, setNameTop] = useState(195);
    const [nameLeft, setNameLeft] = useState(240);
    let scrollArea;

    const style = {
        infoArea: {
            top: top,
        },
        profilePic: {
            top: profilePicTop,
            width: picWidth
        },
        username: {
            top: nameTop,
            left: nameLeft
        },
    }

    useEffect(() => {
        scrollArea = document.getElementById("profileBg");
        scrollArea.addEventListener("scroll", () => {
            checkScroll();
        });
    });

    function checkScroll() {
        if (scrollArea.scrollTop < 30) {
            setTop(90);
            setProfilePicTop(145);
            setPicWidth(120);
            setNameTop(195);
            setNameLeft(240);
        } else {
            setTop(12);
            setProfilePicTop(125);
            setPicWidth(90);
            setNameTop(156);
            setNameLeft(200);
        }
    }

    return (
        <div>
            <HeaderAccessed secured="t" />
            <div id="profileBg">
                <div id="infoArea" className="smoothTop" style={style.infoArea}>
                    <img id="profilePicture" className="smoothAll" src={profileImg} style={style.profilePic} alt="profile picture"></img>
                    <div id="usernameDisplay" className="smoothAll" style={style.username}>
                        Jawm42
                    </div>
                </div>
                <div id="long">
                </div>
            </div>



        </div>
    );
}