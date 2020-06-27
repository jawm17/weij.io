import React, { useEffect, useState } from 'react';
import "./NavStyle.css";

export default function Navbar() {
    const [backgroundColor, setBackgroundColor] = useState("red");

    const style = {
        nav: {
            backgroundColor: backgroundColor
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 40 ? "red" : "blue";
            setBackgroundColor( backgroundcolor );
          });
    }, []);

    return (
        <div className="navBar" style={style.nav}>
            <div className="navArea">
                <div className="logoNav">
                    MYMO
            </div>
                <div className="mainNavRight">
                    RIGht
            </div>
            </div>
        </div>
    )
}