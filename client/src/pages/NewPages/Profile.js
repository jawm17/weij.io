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
    const [picLeft, setPicLeft] = useState(80);
    const [fixedTop, setFixedTop] = useState(360);
    const [bgTop, setBgTop] = useState(0);
    let scrollArea;

    const style = {
        infoArea: {
            top: top,
            backgroundPositionY: bgTop
        },
        profilePic: {
            marginTop: profilePicTop,
            marginLeft: picLeft,
            width: picWidth
        },
        username: {
            top: nameTop,
            left: 240
        },
        fixedView: {
            marginTop: fixedTop
        },
        infoFlex: {
            top: nameTop - 10
        },
    }

    useEffect(() => {
        scrollArea = document.getElementById("profileBg");
        scrollArea.addEventListener("scroll", () => {
            checkScroll();
        });
    });

    function checkScroll() {
        if (scrollArea.scrollTop < 10) {
            // initial
            setTop(90);
            setProfilePicTop(60);
            setPicWidth(120);
            setNameTop(195);
            setPicLeft(80);
            setFixedTop(360);
            setBgTop(0);
        } else {
            setTop(12);
            setProfilePicTop(110);
            setPicWidth(90);
            setNameTop(156);
            setFixedTop(280);
            setPicLeft(100);
            setBgTop(-180);
        }
    }

    return (
        <div>
            <HeaderAccessed secured="t" />
            <div id="profileBg">
                <div id="infoArea" className="smoothAll" style={style.infoArea}>
                    <img id="profilePicture" className="smoothAll" src={profileImg} style={style.profilePic} alt="profile picture"></img>
                    <div id="usernameDisplay" className="smoothAll" style={style.username}>
                        Jawm42
                    </div>
                    <div id="infoFlex" className="smoothAll" style={style.infoFlex}>
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
                </div>
                <div id="fixedView" className="smoothAll" style={style.fixedView}>
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