import React, { useEffect } from "react";
import MediaPanel2 from "../../components/mediaPanel2"
import Header from "../../components/components3/Header";
import "./styles/bodyStyle.css";

export default function Body(props) {
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
            <Header page="home"/>
            <div id="body" className="default">
                <MediaPanel2 />
                <div id="realCat">
                    <div id="catBox">
                        <img src="https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4" id="catPhoto"></img>
                        Jawm42
                        <div id="signOut">
                            account
                        </div>
                    </div>
                    <div id="catBox">
                        <img src="https://getblockcard.com/wp-content/uploads/2019/08/eth.png" id="catPhoto"></img>
                        1.03044 ETH
                    </div>
                    <div id="suggestions">
                        Suggestions for you
                    </div>
                </div>
            </div>
        </div>
    );

}