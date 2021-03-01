import React, { useEffect } from "react";
import MediaPanel2 from "../../components/mediaPanel2"
import Header from "../../components/components3/Header";
import history from "../../history";
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
                 document.getElementById("body").className = card.getAttribute("color");
                vid.play();
            } else {
                vid.pause();
                vid.currentTime = 0;
            }
        }
    }

    return (
        <div>
            <Header page="home" />
            <div id="body" className="default">
                <MediaPanel2 />
                <div id="realCat">
                    <div id="catBox" onClick={() => history.push("/profile")}>
                        <img src="https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4" id="catPhoto"></img>
                        Jawm42
                        <div className="label">
                            account
                        </div>
                    </div>
                    <div id="catBox" onClick={() => history.push("/wallet")}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/eth%20(1).png?alt=media&token=8675ca36-6b00-44e2-b609-245a7fe89998" id="catPhoto"></img>
                        1.03044 ETH
                        <div className="label">
                            wallet
                        </div>
                    </div>
                    <div id="suggestions">
                        Suggestions for you
                        <div className="suggest">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRstf5ncFDVYX3duv7BF_-AwpNnqQb3pYSQ&usqp=CAU" className="suggestPhoto"></img>
                            joesl90
                        </div>
                        <div className="suggest">
                            <img src="https://www.usmagazine.com/wp-content/uploads/2020/09/Katy-Perry-Says-Motherhood-Is-A-Full-Time-Job-After-Welcoming-Daughter-Daisy-Promo.jpg?w=700&quality=86&strip=all" className="suggestPhoto"></img>
                        katyPerry
                        </div>
                        <div className="suggest">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRstf5ncFDVYX3duv7BF_-AwpNnqQb3pYSQ&usqp=CAU" className="suggestPhoto"></img>
                            ChampagnePapi  
                        </div>
                    </div>
                    <div id="links">
                        <div className="link">
                            terms
                        </div>
                        <div className="link">
                            copyright
                        </div>
                        <div className="link">
                            about
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}