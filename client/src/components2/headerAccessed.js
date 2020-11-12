import React, { useState, useEffect } from "react";
import "./headerAccessedStyle.css";

export default function HeaderAccessed() {

    // ----------------------------------------------

        // LOGGED IN LOGGED IN LOGGED IN LOGGED IN

    // ----------------------------------------------


    function selectSection(selection) {
        if(selection === "music") {
            document.getElementById("mediaLogo").style.color = "gray";
            document.getElementById("gamesLogo").style.color = "gray";
            document.getElementById("musicLogo").style.color = "#01CBFF";
        } 
        else if (selection === "games"){
            document.getElementById("mediaLogo").style.color = "gray";
            document.getElementById("musicLogo").style.color = "gray";
            document.getElementById("gamesLogo").style.color = "#5DE900";
        } 
        else if (selection === "media") {
            document.getElementById("gamesLogo").style.color = "gray";
            document.getElementById("musicLogo").style.color = "gray";
            document.getElementById("mediaLogo").style.color = "#8A62E2";
        }

    }


    return (
        <div>
            <div id="header">
                    <div className="logoTextBlock">
                        <div className="mainLogoA selectable" onClick={() => window.location.href = "/landing"}>
                            ethereal
                        </div>
                        <div id="mediaLogo" className="selectable" onClick={() => selectSection("media")}>
                            media
                        </div>
                        <div id="musicLogo" className="selectable" onClick={() => selectSection("music")}>
                            music
                        </div>
                        <div id="gamesLogo" className="selectable" onClick={() => selectSection("games")}>
                            games
                        </div>
                    </div>
                <div className="buttonGroup">
                    <div id="walletA" className="fixedButtonsA" onClick={() => window.location.href = "/wallet"}>
                        {/* <img id="ethIcon" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkhipus.io%2Fimages%2Fether-iso.png&f=1&nofb=1"></img>
                        2.01 */}
                        Wallet
                    </div>
                    <div id="profileA" onClick={() => window.location.href = "/profile"}>
                        <img src='https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4' id="profileIcon"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}