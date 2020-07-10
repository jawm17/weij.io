import React, { useEffect, useState } from 'react';
import history from '../history';
import "./HeaderStyle.css";

export default function Header(props) {
    const [className, setClassName] = useState("header");
    const [startColor, setStartColor] = useState("rgba(22,73,222,1)");
    const [endColor, setEndColor] = useState("rgba(0,212,255,1)");

    const style = {
        nav: {
            background: `linear-gradient(90deg, ${startColor} -600px, ${endColor} 100%)`,
        }
    }

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
        document.addEventListener("scroll", () => {
            const name = window.scrollY < 7 ? "header" : "shadowedHeader";
            setClassName(name);
        });
        return () => document.removeEventListener("scroll", () => {
            const name = window.scrollY < 7 ? "header" : "shadowedHeader";
            setClassName(name);
        });
    }, []);

    return (
        <div className={className} style={style.nav}>
            <div className="headerArea">
                <h3 className="logo">MYMO</h3>
            </div>
        </div>
    )
}