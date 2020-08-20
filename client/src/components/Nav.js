import React, { useEffect, useState } from 'react';
import history from '../history';
import "./NavStyle.css";

export default function Navbar(props) {
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
                setWalletImg("https://mymo-secure-content.s3.us-east-2.amazonaws.com/ICON2.png");
                break;
            case "search":
                setSearchImg("https://mymo-secure-content.s3.us-east-2.amazonaws.com/ICON4.png");
                break;
            case "home":
                setHomeImg("https://mymo-secure-content.s3.us-east-2.amazonaws.com/ICON3.png");
                break;
        }
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

    return (
        <div className="navBar" style={style.nav}>
            <div className="navArea">
                <img className="homeIcon navButton" src={homeImg} alt="home icon" onClick={() => history.push('/home')}></img>
                <img className="searchIcon navButton" src={searchImg} alt="search icon" onClick={() => history.push('/search')}></img>
                {/* <img className="plusIcon navButton" src="https://cdn.onlinewebfonts.com/svg/img_47850.png" alt="new creation" onClick={() => (console.log("fuck a nigger"))}></img> */}
                <img className="walletIcon navButton" src={walletImg} alt="wallet icon" onClick={() => history.push('/wallet')}></img>
                <img className="profilePicNav navButton" src="https://cdn.dribbble.com/users/612987/screenshots/5002917/shark.jpg" alt="profile avatar" onClick={() => history.push('/profile')}></img>
            </div>
        </div>
    )
}