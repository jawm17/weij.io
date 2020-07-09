import React, { useEffect, useState, useContext } from "react";
import "./TreasureHunt.css";

export default function TreasureHunt() {

const style = {
    treasureHuntLogo : {
        background: 'url("https://thumbs.dreamstime.com/b/tv-static-4941028.jpg")',
        backgroundPositionX: 80,
        fontFamily: "'Sonsie One', cursive",
        position: "absolute",
        bottom: 30,
        left: 30,
        "-webkit-text-fill-color": "transparent",
        "-webkit-background-clip": "text"
    }
    
}

    return (
        <div>
            <div className="white">
                <h2 className="treasureHuntLogo" style={style.treasureHuntLogo}>MYMO</h2>
            </div>
        </div>
    )
}   
