import React, { useEffect, useState } from 'react';
import history from '../history';
import "./HeaderStyle.css";

export default function Header(props) {
    const [className, setClassName] = useState("header");
    const [startColor, setStartColor] = useState("rgba(22,73,222,1)");
    const [endColor, setEndColor] = useState("rgba(0,212,255,1)");
    const [sendPage, setSendPage] = useState("https://mymo-secure-content.s3.us-east-2.amazonaws.com/send.png");

    const logoImages = ["https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/abstract-rainbow-background-similar-to-stained-glass-elena-sysoeva.jpg", "https://i.pinimg.com/originals/7f/37/64/7f3764f10458b32028a577e113c21651.jpg", "https://www.muralswallpaper.com/app/uploads/pink-bright-gradient-wallpaper-mural-Plain-820x532.jpg", "https://www.xmple.com/wallpaper/yellow-pink-gradient-linear-1920x1080-c2-ff69b4-ffff00-a-120-f-14.svg"]

    const style = {
        nav: {
            background: `linear-gradient(90deg, ${startColor} -600px, ${endColor} 100%)`,
        },
        logo: {
            color: "white"
        }
    }

    useEffect(() => {
        console.log(props);
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
        if (props.page === "home") {
            setSendPage("https://image.flaticon.com/icons/svg/2983/2983788.svg");
            document.getElementById("mediaPanel").addEventListener("scroll", (e) => {
                const name = e.target.scrollTop < 7 ? "header" : "header shadowed";
                setClassName(name);
            });
        } else if (props.page === "send") {
            setClassName("header shadowed");
            setTimeout(() => {
                setClassName("header");
                setSendPage("https://mymo-secure-content.s3.us-east-2.amazonaws.com/send.png")
            }, 250)
        } else {
            setSendPage("https://image.flaticon.com/icons/svg/2983/2983788.svg");
            document.addEventListener("scroll", () => {
                const name = window.scrollY < 7 ? "header" : "header shadowed";
                setClassName(name);
            });
        }
    }, []);

    function changePage(page) {
        if(page==="send") {
            if(props.page === "send") {
                if (!localStorage.getItem('prevPage')) {
                    localStorage.setItem('prevPage', "/home");
                }
                props.leavePage();
                setClassName("header shadowed");
                setTimeout(() => {
                    history.push(localStorage.getItem('prevPage'));
                }, 400)
            } else {
                history.push('/send');
            }
        }
    }

    return (
        <div className={className} style={style.nav}>
            <div className="headerArea">
                <img className="menuIcon button" src="https://image.flaticon.com/icons/svg/847/847454.svg" alt="Menu icon"></img>
                <h3 className="logo" style={style.logo}>weij</h3>
                <img className="sendIcon button" src={sendPage} alt="Send icon" onClick={() => changePage("send")}></img>
            </div>
        </div>
    )
}