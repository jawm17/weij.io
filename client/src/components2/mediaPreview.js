import React, { useEffect, useState } from 'react';
import history from '../history';
import Media from "./media";
import "./mediaPreviewStyle.css";

export default function MediaPreview(props) {
    const [open, setOpen] = useState(false);
    const [thumbnail, setThumbnail] = useState("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fbloody-halloween-theme-crazy-face-picture-id599139428%3Fk%3D6%26m%3D599139428%26s%3D612x612%26w%3D0%26h%3DVQ7gCzve1IIIoGlftVsvEvSkNscDj4pGDGYO1QI4P2M%3D&f=1&nofb=1");
    const [opacity, setOpacity] = useState(100);

    const style = {
        thumbnail: {
                position: "absolute",
                width: 196,
                height: 260,
                objectFit: "cover",
                borderRadius: 12,
                zIndex: 2,
                opacity: opacity
        }
    }
    useEffect(() => {
        let figure = document.getElementById(props.id + "vid");
        if (figure.duration) {
            figure.currentTime = parseInt(figure.duration) / 2;
        } else {
            figure.currentTime = 2;
        }
    }, []);

    function openMedia(e) {
        setOpen(true);
        history.push("/p/" + props.id);
    }

    function startPreview() {
        let exited = false;
        document.getElementById(props.id).addEventListener("mouseleave", () => exited = true);
        let figure = document.getElementById(props.id + "vid");
        figure.style.display = "initial";
        setOpacity(0);
        setTimeout(() => {
            if (!exited) {
                if (figure.duration) {
                    figure.currentTime = parseInt(figure.duration) / 2;
                } else {
                    figure.currentTime = 2;
                }
                figure.play();
            }
        }, 500);
    }

    function endPreview() {
        let figure = document.getElementById(props.id + "vid");
        figure.pause();
        figure.style.display = "none";
        setOpacity(100);
    }

    return (
        <div className="inlineBlock">
            <div className="item" id={props.id} onClick={(e) => openMedia(e)} onMouseEnter={() => startPreview()} onMouseLeave={() => endPreview()}>
                <img src={thumbnail} style={style.thumbnail} alt="video thumbnail" className="thumbnail"></img>
                <video className="sample" id={props.id + "vid"} muted>
                    <source src={props.imgUrl[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <div className="">

                </div>
            </div>
            {/* {open ? <Media id={props.id}></Media> : null} */}

        </div>
    );
}