import React, { useEffect, useState } from 'react';
import history from '../history';
import Media from "./media";
import "./mediaPreviewStyle.css";

export default function MediaPreview(props) {
    const [open, setOpen] = useState(false);
    const [thumbnail, setThumbnail] = useState("https://preview.redd.it/vltxezijqhu31.jpg?width=640&crop=smart&auto=webp&s=4d278a3189fe3598c3315794a27d19a850602b2e");
    const [opacity, setOpacity] = useState(100);
    const [flagPos, setFlagPos] = useState(-50);
    const [flagDisplay, setFlagDisplay] = useState("initial");
    const [infoDisplay, setInfoDisplay] = useState("none");
    const [duration ,setDuration] = useState();

    const style = {
        thumbnail: {
                position: "absolute",
                width: 260,
                height: 196,
                objectFit: "cover",
                borderRadius: 12,
                zIndex: 4,
                opacity: 0
        },
        bottom: {
            position: "absolute",
            width: "100%",
            height: 70,
            bottom: 0,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: infoDisplay
        },
        flagBlock: {
            position: "absolute",
            zIndex: 10,
            backgroundColor: "#e9e9e9",
            width: 260,
            height: 60,
            top: -60,
            left: 0
        },
        flag: {
            display: flagDisplay,
            position: "absolute",
            zIndex: 2,
            width: 20,
            height: 50,
            top: flagPos,
            right: 10,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
            backgroundColor: "#5DE900",
        }
    }

    function openMedia(e) {
        setOpen(true);
        history.push("/p/" + props.id);
    }

    function startPreview() {
        if(duration) {
            let exited = false;
            document.getElementById(props.id).addEventListener("mouseleave", () => exited = true);
            let figure = document.getElementById(props.id + "vid");
            setTimeout(() => {
                if (!exited) {
                    figure.style.display = "initial";
                    figure.play();
                    setTimeout(() => {
                        if (!exited) {
                            setFlagPos(0);
                            setInfoDisplay("initial");
                            setOpacity(0);
                        }
                    }, 150);
                    setTimeout(() => {
                        if (!exited) {
                            figure.currentTime = parseInt(duration / 2);
                        }
                    }, 4400);
                    setTimeout(() => {
                        if (!exited) {
                            figure.currentTime = parseInt(duration / 2);
                        }
                    }, 8400);
                }
            }, 650);
        }
    }

    function endPreview() {
        let figure = document.getElementById(props.id + "vid");
        if(duration) {
            figure.currentTime = parseInt(duration / 2);
        }
        figure.pause();
  
        setOpacity(100);
        setFlagPos(-50);
        setInfoDisplay("none");
    }

    function videoDuration(e) {
        if(!duration) {
            setDuration(parseInt(e.target.duration));
            let figure = document.getElementById(props.id + "vid");
            figure.currentTime = parseInt(e.target.duration / 2);
        }
    }

    return (
        <div className="inlineBlock">
            <div className="item" id={props.id}>
                <div className="flag" style={style.flag}>
                    <img className="dolla" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fus-dollar-xxl.png&f=1&nofb=1" alt="money"></img>
                </div>
                <div style={style.flagBlock}></div>
                <img src={thumbnail} style={style.thumbnail} id={props.id + "thumb"} alt="video thumbnail" className="thumbnail" onClick={(e) => openMedia(e)} onMouseEnter={() => startPreview()} onMouseLeave={() => endPreview()}></img>
                <video className="sample" id={props.id + "vid"} muted onDurationChange={(e) => videoDuration(e)}>
                    <source src={props.imgUrl[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <div style={style.bottom} className="bottomPopUp">
                    <div className="popUpUser">
                        <img className="popUpPic" src="https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4" alt="profile picture"></img>
                       <div className="popUpName">
                       Jawm42
                       </div>
                    </div>
                    <div className="popUpTitle">
                        Where the wild things are
                    </div>
                </div>
            </div>
            {/* {open ? <Media id={props.id}></Media> : null} */}

        </div>
    );
}