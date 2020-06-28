import React, { useEffect, useState } from 'react';
import history from '../history';
import "./NavStyle.css";

export default function Navbar(props) {
    const [backgroundColor, setBackgroundColor] = useState("lightblue");
    const [walletImg, setWalletImg] = useState("https://image.flaticon.com/icons/svg/846/846204.svg");
    const [searchImg, setSearchImg] = useState("https://image.flaticon.com/icons/svg/2948/2948094.svg ");
    
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
            default:
             console.log()
          }
        // document.addEventListener("scroll", () => {
        //     const backgroundcolor = window.scrollY < 7 ? "" : "lightblue";
        //     setBackgroundColor(backgroundcolor);
        // });
    }, []);

    return (
        <div className="navBar" >
            <div className="navArea">
                <div className="logoNav" onClick={() => history.push('/home')}>
                    MYMO
                </div>
                <div className="mainNavRight">
                    <img className="searchIcon" src={searchImg} alt="search icon"></img>
                    <img className="alertIcon" src="https://image.flaticon.com/icons/svg/3039/3039455.svg" alt="alert icon"></img>
                    <img className="walletIcon" src={walletImg} alt="wallet icon" onClick={() => history.push('/wallet')}></img>
                    <img className="profilePicNav" src="https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" alt="profile avatar"></img>
                </div>
            </div>
        </div>
    )
}