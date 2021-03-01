import React, { useEffect } from "react";

export default function HeaderBlue() {

    // ----------------------------------------------

    // NOT SECURE NOT SECURE NOT SECURE NOT SECURE

    // ----------------------------------------------

    useEffect(() => {
        document.getElementById("mediaLogo").style.color = "gray";
        document.getElementById("musicLogo").style.color = "#01CBFF";
        document.getElementById("mainLogo").style.color = "#01CBFF";
    });


    return (
        <div>
            <div id="header">
                <div className="logoTextBlock">
                    <div id="mainLogo" className="mainLogoA selectable" onClick={() => window.location.href = "/landing"}>
                        ethereal
                        </div>
                    <div id="mediaLogo" className="selectable" onClick={() =>window.location.href = "/landing"}>
                        video
                        </div>
                    <div id="musicLogo" className="selectable" onClick={() => window.location.href = "/music"}>
                        music
                        </div>
                    <div id="gamesLogo" className="selectable" onClick={() => window.location.href = "/games"}>
                        games
                        </div>
                </div>
            </div>
        </div>
    );
}