import React, { useEffect, useState } from 'react';
import history from '../history';
import Media from "./media";
import "./mediaPreviewStyle.css";

export default function MediaPreview(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(props.imgUrl)
    }, []);

    function openMedia(e) {
        setOpen(true);
        history.push("/p/" + props.id);
    }

    return (
        <div className="inlineBlock">
            <div className="item" id={props.id} onClick={(e) => openMedia(e)}>
            <img id="image" src={props.imgUrl}></img>
            </div>
            {/* {open ? <Media id={props.id}></Media> : null} */}
        </div>
    );
}