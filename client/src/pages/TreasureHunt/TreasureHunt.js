import React, { useEffect, useState, useContext } from "react";

export default function TreasureHunt() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const style = {
        treasureHuntLogo: {
            background: 'url("https://previews.123rf.com/images/stevanovicigor/stevanovicigor1508/stevanovicigor150800150/43924569-tv-damage-bad-sync-tv-channel-rgb-lcd-television-screen-with-static-noise-from-poor-broadcast-signal.jpg")',
            backgroundPositionX: mousePosition.x,
            backgroundPositionY: mousePosition.y,
            fontFamily: "'Sonsie One', cursive",
            position: "absolute",
            bottom: 30,
            left: 30,
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text"
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
            <h1 className="treasureHuntLogo" style={style.treasureHuntLogo}>MYMO</h1>
        </div>
    )
}   
