import React, { useEffect, useState } from "react";
import "./TreasureHuntStyle.css";

export default function TreasureHunt() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const textbg = "https://ak.picdn.net/shutterstock/videos/1026842039/thumb/9.jpg";

    const style = {
        background: {
            width: "100vw",
            height: "100vh",
            background: `white`,
        },
        treasureHuntLogo: {
            background: `url(${textbg})`,
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
            margin: 0,
        }
    }

    useEffect(() => {
        window.addEventListener("touchmove", touchMove);
        // return () => window.removeEventListener("touchmove", touchMove);
        window.addEventListener("mousemove", mouseMove);
        // return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    function touchMove(e) {
        // console.log("x = " + e.clientX + " y = " + e.clientY);
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        if (e.touches[0].clientX > 390 && e.touches[0].clientX <= 400) {
            if (e.touches[0].clientY > 40 && e.touches[0].clientY <= 50) {
                window.alert("You found 12 eth!");
            }
        }
    }

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
            <div className="treasureHuntBackground" ></div>
            <h1 className="treasureHuntLogo" style={style.treasureHuntLogo}>weij.io</h1>
        </div>
    );
}   
