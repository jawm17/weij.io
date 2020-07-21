import React, { useEffect, useState, useContext } from "react";

export default function TreasureHunt() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const style = {
        background: {
            width: "100vw",
            height: "100vh",
            background: `linear-gradient(90deg, rgba(22,73,222,1) -600px, rgba(0,212,255,1) 100%)`,
        },
        treasureHuntLogo: {
            background: 'url("https://previews.123rf.com/images/stevanovicigor/stevanovicigor1508/stevanovicigor150800150/43924569-tv-damage-bad-sync-tv-channel-rgb-lcd-television-screen-with-static-noise-from-poor-broadcast-signal.jpg")',
            backgroundColor: "gray",
            backgroundPositionX: mousePosition.x,
            backgroundPositionY: mousePosition.y,
            fontFamily: 'Fredoka One, cursive',
            position: "absolute",
            fontSize: 80,
            bottom: 35,
            left: 60,
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            margin: 0
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    function mouseMove(e) {
        // console.log("x = " + e.clientX + " y = " + e.clientY);
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (e.clientX > 390 && e.clientX <= 400) {
            if (e.clientY > 40 && e.clientY <= 50) {
                window.alert("You found 12 eth!");
            }
        }
    }

    return (
        <div>
            <div className="treasureHuntBackground" style={style.background}></div>
            <h1 className="treasureHuntLogo" style={style.treasureHuntLogo}>WEIJ.io</h1>
        </div>
    )
}   
