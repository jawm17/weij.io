import React, { useState, useEffect } from "react";
import history from "../history.js";
import "./headerAccessedStyle.css";

export default function HeaderMain(props) {

    // ----------------------------------------------

        // LOGGED IN LOGGED IN LOGGED IN LOGGED IN

    // ----------------------------------------------
    useEffect(() => {
        if(props.secured === "t") {
            document.getElementById("secureBtn").style.display = "initial";
            document.getElementById("insecureBtn").style.display = "none";
        } else if (props.secured === "f") {
            document.getElementById("insecureBtn").style.display = "initial";
        }
    });

    function showBalance() {
        document.getElementById("walletText").textContent = "4.23 eth";
    }

    function hideBalance() {
        document.getElementById("walletText").textContent = "Wallet";
    }

    function profileMenu() {
        
    }


    return (
        <div>
            <div id="header">
                    <div className="logoTextBlock">
                        <div className="mainLogoA selectable" onClick={() => history.push("/landing")}>
                            ethereal
                        </div>
                        <div id="mediaLogo" className="selectable" onClick={() => history.push("/landing")}>
                            video
                        </div>
                        <div id="musicLogo" className="selectable" onClick={() => history.push("/music")}>
                            music
                        </div>
                        <div id="gamesLogo" className="selectable" onClick={() => history.push("/games")}>
                            games
                        </div>
                    </div>

                    {/* profile */}
                <div className="buttonGroup" style={{display: "none"}} id="secureBtn">
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
                    <div id="messagesA" className="fixedButtonsA" onClick={() => history.push("/send")}>
                        {/* <img id="ethIcon" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkhipus.io%2Fimages%2Fether-iso.png&f=1&nofb=1"></img>
                        2.01 */}
                        Messages
                        <div className="notif">
                            2
                        </div>
                    </div>
                    <div id="profileA" onClick={() => history.push("/profile")}>
                        <img src='https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4' id="profileIcon"></img>
                    </div>
                </div>


                {/* login and signup buttons */}
                <div className="buttonGroup" style={{display: "none"}} id="insecureBtn">
                    <div id="wallet" className="fixedButtons" onClick={() => window.location.href = "/register"}>
                        Sign Up
                    </div>
                    <div id="profile" className="fixedButtons" onClick={() => window.location.href = "/login"}>
                        <div>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}