import React, { useEffect, useState } from 'react';
import history from '../history';
import "./NavStyle.css";

export default function Navbar(props) {
    const [className, setClassName] = useState("navBar");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [walletImg, setWalletImg] = useState("https://image.flaticon.com/icons/svg/846/846204.svg");
    const [searchImg, setSearchImg] = useState("https://image.flaticon.com/icons/svg/2948/2948094.svg ");
    const [homeImg, setHomeImg] = useState("https://image.flaticon.com/icons/svg/860/860807.svg");
    const [startColor, setStartColor] = useState("rgba(22,73,222,1)");
    const [endColor, setEndColor] = useState("rgba(0,212,255,1)");

    const style = {
        nav: {
            background: `linear-gradient(90deg, ${startColor} -600px, ${endColor} 100%)`,
        }
    }

    useEffect(() => {
        switch (props.page) {
            case "wallet":
                setWalletImg("https://image.flaticon.com/icons/svg/843/843823.svg");
                break;
            case "search":
                setSearchImg("https://image.flaticon.com/icons/svg/2948/2948244.svg");
                break;
            case "home":
                setHomeImg("https://image.flaticon.com/icons/svg/860/860756.svg");
                break;
        }
        switch (props.color) {
            case "purple":
                setStartColor("rgba(156,26,190,1)");
                setEndColor("rgba(49,187,242,1)");
                break;
            case "search":
                setStartColor();
                setEndColor();
                break;
        }
        document.addEventListener("scroll", () => {
            const name = window.scrollY < 7 ? "navBar" : "shadowedNavBar";
            setClassName(name);
        });
    }, []);

    return (
        <div className={className} style={style.nav}>
            <div className="navArea">

                <div className="mainNavRight">
                    <img className="homeIcon" src={homeImg} alt="home icon" onClick={() => history.push('/home')}></img>
                    <img className="searchIcon" src={searchImg} alt="search icon" onClick={() => history.push('/search')}></img>
                    <img className="walletIcon" src={walletImg} alt="wallet icon" onClick={() => history.push('/wallet')}></img>
                    <img className="profilePicNav" src="https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" alt="profile avatar" onClick={() => history.push('/profile')}></img>
                </div>
            </div>
        </div>
    )
}