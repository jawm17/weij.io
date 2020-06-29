import React, { useState, useEffect, useRef } from "react";

export default function Background2(props) {
    const [startColor, setStartColor] = useState("rgba(22,73,222,1)");
    const [endColor, setEndColor] = useState("rgba(0,212,255,1)");
    const [opacity, setOpacity] = useState(1);
    let timerID = useRef(null);

    useEffect(() => {
        setOpacity(0);

        switch (props.color) {
            case "red":
                setStartColor("rgba(122,13,13,1)");
                setEndColor("rgba(255,0,56,1)");
                break;
            case "search":
                setStartColor();
                setEndColor();
                break;
        }
    }, []);

    const style = {
        bgStyle: {
            opacity: opacity,
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