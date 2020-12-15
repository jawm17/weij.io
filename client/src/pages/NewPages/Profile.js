import React, { useEffect, useState } from "react";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import HeaderAccessed from '../../components2/headerAccessed';
import PostModal from '../../components2/postModal';
import "./profileStyle.css";

export default function Profile() {

    const [top, setTop] = useState(90);
    let scrollArea;

    const style = {
        infoArea: {
            top: top,
        }
    }

    useEffect(() => {
        scrollArea = document.getElementById("profileBg");
        scrollArea.addEventListener("scroll", () => {
            checkScroll();
        });
    });

    function checkScroll() {
        if(scrollArea.scrollTop < 30) {
            setTop(90);
        } else {
            setTop(12);
        }
    }

    return (
        <div>
            <HeaderAccessed secured="t"/>
            <div id="profileBg">
            <div className="smooth" id="infoArea" style={style.infoArea}>
                </div>
                <div id="long">

                </div>
            </div>
            

           
        </div>
    );
}