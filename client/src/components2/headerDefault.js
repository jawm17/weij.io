import React from "react";
import "./headerDefaultStyle.css";

export default function HeaderDefault() {

    // ----------------------------------------------

    // NOT SECURE NOT SECURE NOT SECURE NOT SECURE

    // ----------------------------------------------


    return (
        <div>
            <div id="header">
                <div className="logoTextBlock">
                    <div className="mainLogoA selectable" onClick={() => window.location.href = "/landing"}>
                        ethereal
                        </div>
                    <div id="mediaLogo" className="selectable" onClick={() => window.location.href = "/landing"}>
                        video
                        </div>
                    <div id="musicLogo" className="selectable" onClick={() => window.location.href = "/music"}>
                        music
                        </div>
                    <div id="gamesLogo" className="selectable" onClick={() => window.location.href = "/games"}>
                        games
                        </div>
                </div>
                <div className="buttonGroup">
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