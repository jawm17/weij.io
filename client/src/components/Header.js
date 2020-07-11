import React, { useEffect, useState } from 'react';
import history from '../history';
import "./HeaderStyle.css";

export default function Header(props) {
    const [className, setClassName] = useState("header");
    const [startColor, setStartColor] = useState("rgba(22,73,222,1)");
    const [endColor, setEndColor] = useState("rgba(0,212,255,1)");
    const [logoImage, setLogoImage] = useState("https://upload.wikimedia.org/wikipedia/commons/c/c0/White_color_Page.jpg");

    const logoImages = ["https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/abstract-rainbow-background-similar-to-stained-glass-elena-sysoeva.jpg", "https://i.pinimg.com/originals/7f/37/64/7f3764f10458b32028a577e113c21651.jpg", "https://www.muralswallpaper.com/app/uploads/pink-bright-gradient-wallpaper-mural-Plain-820x532.jpg", "https://www.xmple.com/wallpaper/yellow-pink-gradient-linear-1920x1080-c2-ff69b4-ffff00-a-120-f-14.svg"]

    const style = {
        nav: {
            background: `linear-gradient(90deg, ${startColor} -600px, ${endColor} 100%)`,
        },
        logo: {
            backgroundImage: `url(${logoImage})`,
            backgroundSize: "100%",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text"
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
    }, []);

    function changeLogoImage() {
        if(!localStorage.getItem('logoImageNum')) {
            localStorage.setItem('logoImageNum', 0);
        } else {
            localStorage.setItem('logoImageNum', parseInt(localStorage.getItem('logoImageNum')) + 1);
        }
        setLogoImage(logoImages[localStorage.getItem('logoImageNum') % logoImages.length]);
    }

    return (
        <div className={className} style={style.nav}>
            <div className="headerArea">
                <h3 className="logo" style={style.logo} onClick={() => changeLogoImage()}>MYMO</h3>
                {/* <img className="sendIcon" src="https://image.flaticon.com/icons/svg/2983/2983788.svg" alt="Send icon"></img> */}
            </div>
        </div>
    )
}