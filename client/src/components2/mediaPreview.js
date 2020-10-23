import React, { useEffect, useState, useContext } from 'react';
import Media from "./media";

export default function MediaPreview(props) {
    const [open, setOpen] = useState(false);
    // useEffect(() => {
    //     openMedia
    // }, []);


    function openMedia(e) {
        setOpen(true);
    }

    return (
        <div className="inlineBlock">
            <div className="item" id={props.id} onClick={(e) => openMedia(e)}>
            </div>
            {open ? <Media id={props.id}></Media> : null}
        </div>
    );
}