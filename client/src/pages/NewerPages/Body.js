import React, { useEffect } from "react";
import MediaPanel2 from "../../components/mediaPanel2"
import "./styles/bodyStyle.css";

export default function Body() {
    let mediaCards;
    let scroll = window.scrollY + (window.innerHeight / 3);


    useEffect(() => {
        mediaCards = document.getElementsByClassName('media');
        document.getElementById("body").addEventListener("scroll", () => bodyScroll());
    });

    function bodyScroll() {
        for (let i = 0; i < mediaCards.length; i++) {
            let card = mediaCards[i];
            let vid = document.getElementById(card.id + "vid");
            if (card.getBoundingClientRect().top <= scroll && card.getBoundingClientRect().top + card.getBoundingClientRect().height > scroll) {
                //  document.getElementById("body").className = card.getAttribute("color");
                vid.play();
            } else {
                vid.pause();
                vid.currentTime = 0;
            }
        }
    }

    return (
        <div>
            <div id="bodyHeader">
                <div id="headerArea">
                    weij.io
                    <div id="headerRight">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1946/1946436.svg?token=exp=1612144907~hmac=6927e7802ef3d30041b189ff909b6232" className="headerIcon"></img>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1946/1946412.svg?token=exp=1612146254~hmac=178463972dff3002509241df50831dab" className="headerIcon"></img>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/879/879762.svg?token=exp=1612146886~hmac=4e4d42eec2869944ce2f8bc2a12f989d" className="headerIcon"></img>
                    </div>
                </div>
            </div>
            <div id="body" className="default">
                <MediaPanel2 />
                <div id="cat">

                </div>
                <div id="realCat">
                    <div id="catBox">
                        <img src="https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4" id="catPhoto"></img>
                        Jawm42
                    </div>
                    {/* <div>
                        Suggestions for you
                    </div> */}
                </div>
            </div>
        </div>
    );

}