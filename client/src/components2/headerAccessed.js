import React, { useState, useEffect } from "react";
import "./headerAccessedStyle.css";

export default function HeaderAccessed() {

    // ----------------------------------------------

        // LOGGED IN LOGGED IN LOGGED IN LOGGED IN

    // ----------------------------------------------

    function showBalance() {
        document.getElementById("walletText").textContent = "4.23 eth";
    }

    function hideBalance() {
        document.getElementById("walletText").textContent = "Wallet";
    }


    return (
        <div>
            <div id="header">
                    <div className="logoTextBlock">
                        <div className="mainLogoA selectable" onClick={() => window.location.href = "/landing"}>
                            ethereal
                        </div>
                        <div id="mediaLogo" className="selectable" onClick={() => window.location.href = "/landing"}>
                            media
                        </div>
                        <div id="musicLogo" className="selectable" onClick={() => window.location.href = "/music"}>
                            music
                        </div>
                        <div id="gamesLogo" className="selectable" onClick={() => window.location.href = "/games"}>
                            games
                        </div>
                    </div>
                <div className="buttonGroup">
                    <div id="walletA" className="fixedButtonsA" onMouseEnter={() => showBalance()} onMouseLeave={() => hideBalance()} onClick={() => window.location.href = "/wallet"}>
                        {/* <img id="ethIcon" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkhipus.io%2Fimages%2Fether-iso.png&f=1&nofb=1"></img>
                        2.01 */}
                        <div id="walletText">
                        Wallet
                        </div>
                        <div className="notif">
                            19
                        </div>
                    </div>
                    <div id="messagesA" className="fixedButtonsA" onClick={() => window.location.href = "/send"}>
                        {/* <img id="ethIcon" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkhipus.io%2Fimages%2Fether-iso.png&f=1&nofb=1"></img>
                        2.01 */}
                        Messages
                        <div className="notif">
                            2
                        </div>
                    </div>
                    <div id="profileA" onClick={() => window.location.href = "/profile"}>
                        <img src='https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4' id="profileIcon"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}