import React, { useEffect, useState } from "react";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import HeaderAccessed from '../../components2/headerAccessed';
import PostModal from '../../components2/postModal';
import "./profileStyle.css";

export default function Profile() {

    const [profileImg, setProfileImg] = useState("https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4");
    const [top, setTop] = useState(90);
    const [profilePicTop, setProfilePicTop] = useState(60);
    const [picWidth, setPicWidth] = useState(120);
    const [nameTop, setNameTop] = useState(195);
    const [nameLeft, setNameLeft] = useState(240);
    let scrollArea;

    const style = {
        infoArea: {
            top: top,
        },
        profilePic: {
            marginTop: profilePicTop,
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
            setProfilePicTop(60);
            setPicWidth(120);
            setNameTop(195);
            setNameLeft(240);
        } else {
            setTop(12);
            setProfilePicTop(110);
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
                    <div id="">

                    </div>
                </div>
                <div id="fixedVew">
                    <div className="proRowOne" id="One">
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                    </div>
                    <div className="proRowOne">
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                    </div>
                    <div className="proRowOne">
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                    </div>
                    <div className="proRowOne">
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                        <div className="proItem">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}