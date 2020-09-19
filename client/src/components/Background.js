import React, { useState, useEffect } from "react";

export default function Background(props) {
    const [startColor, setStartColor] = useState("rgba(22,73,222,1)");
    const [endColor, setEndColor] = useState("rgba(0,212,255,1)");

    useEffect(() => {
        switch (props.color) {
            case "purple":
                setStartColor("rgba(156,26,190,1)");
                setEndColor("rgba(49,187,242,1)");
                break;
            case "orange":
                setStartColor("rgba(234,78,87,1)");
                setEndColor("rgba(252,198,92,1)");
                break;
            case "green":
                setStartColor("rgba(83,213,60,1)");
                setEndColor("rgba(41,195,242,1)");
                break;
        }
    }, []);

    const style = {
        bgStyle: {
            position: "fixed",
            zIndex: -2,
            background: `linear-gradient(90deg, ${startColor} -600px, ${endColor} 100%)`,
            height: "100vh",
            width: "100vw",
            transition: "opacity 1s ease"
        }
    }

    return (
        <div style={style.bgStyle} />
    );
}