import React, { useEffect, useState } from 'react';
import history from '../history';
import Media from "./media";
import "./mediaPreviewStyle.css";

export default function MediaPreview(props) {
    const [open, setOpen] = useState(false);

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
        setTimeout(() => {
            if(!exited) {
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
    }

    return (
        <div className="inlineBlock">
            <div className="item" id={props.id} onClick={(e) => openMedia(e)} onMouseEnter={() => startPreview()} onMouseLeave={() => endPreview()}>
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