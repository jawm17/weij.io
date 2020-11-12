import React, { useState, useEffect } from "react";
import "./headerDefaultStyle.css";

export default function HeaderDefault() {

    // ----------------------------------------------

    // NOT SECURE NOT SECURE NOT SECURE NOT SECURE

    // ----------------------------------------------

    function selectSection(selection) {
        if (selection === "music") {
            document.getElementById("mediaLogo").style.color = "gray";
            document.getElementById("gamesLogo").style.color = "gray";
            document.getElementById("musicLogo").style.color = "#01CBFF";
        }
        else if (selection === "games") {
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