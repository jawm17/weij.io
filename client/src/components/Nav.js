import React, { useEffect, useState } from 'react';
import history from '../history';
import "./NavStyle.css";

export default function Navbar(props) {
    const [className, setClassName] = useState("navBar");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [walletImg, setWalletImg] = useState("https://image.flaticon.com/icons/svg/846/846204.svg");
    const [searchImg, setSearchImg] = useState("https://image.flaticon.com/icons/svg/2948/2948094.svg ");
    const [homeImg, setHomeImg] = useState("https://image.flaticon.com/icons/svg/860/860807.svg");
    
    const [selectedItem, setSelectedItem] = useState();

    const style = {
        nav: {
            backgroundColor: backgroundColor
        }
    }


    useEffect(() => {
        switch(props.page) {
            case "wallet":
                setWalletImg("https://image.flaticon.com/icons/svg/843/843823.svg");
              break;
            case "search":
                setSearchImg("https://image.flaticon.com/icons/svg/2948/2948244.svg");
                break;
            default:
                setHomeImg("https://image.flaticon.com/icons/svg/860/860756.svg");
          }
        document.addEventListener("scroll", () => {
            const name = window.scrollY < 7 ? "navBar" : "shadowedNavBar";
            setClassName(name);
        });
    }, []);

    return (
        <div className={className} >
            <div className="navArea">
             
                <div className="mainNavRight">
                    <img className="homeIcon" src={homeImg} alt="home icon" onClick={() => history.push('/home')}></img>
                    <img className="searchIcon" src={searchImg} alt="search icon" onClick={() => history.push('/search')}></img>
                    <img className="walletIcon" src={walletImg} alt="wallet icon" onClick={() => history.push('/wallet')}></img>
                    <img className="profilePicNav" src="https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" alt="profile avatar"></img>
                </div>
            </div>
        </div>
    )
}