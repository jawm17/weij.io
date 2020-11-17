import React, { useState, useEffect } from "react";
import "./headerBlueStyle.css";

export default function HeaderBlue() {

    // ----------------------------------------------

    // NOT SECURE NOT SECURE NOT SECURE NOT SECURE

    // ----------------------------------------------

    useEffect(() => {
        document.getElementById("mediaLogo").style.color = "gray";
        document.getElementById("musicLogo").style.color = "#01CBFF";
    });

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
                    <div className="mainLogoB selectable" onClick={() => window.location.href = "/landing"}>
                        ethereal
                        </div>
                    <div id="mediaLogo" className="selectable" onClick={() =>window.location.href = "/landing"}>
                        media
                        </div>
                    <div id="musicLogo" className="selectable" onClick={() => window.location.href = "/music"}>
                        music
                        </div>
                    <div id="gamesLogo" className="selectable" onClick={() => selectSection("games")}>
                        games
                        </div>
                </div>
            </div>
        </div>
    );
}