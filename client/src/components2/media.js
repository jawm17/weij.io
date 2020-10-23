import React, { useEffect, useState, useContext } from 'react';

export default function Media(props) {

    // useEffect(() => {
    //     openMedia
    // }, []);


    function openMedia(e) {
        console.log(e);
        let media = document.createElement("div");
        let x = document.getElementById(e.target.id).getBoundingClientRect().x;
        let y = document.getElementById(e.target.id).getBoundingClientRect().y;
        media.setAttribute("class", "item");
        media.style.margin = 0;
        media.style.position = "fixed";
        media.style.top = y + "px";
        media.style.left = x + "px";
        document.body.appendChild(media);
        setTimeout(() => {
            media.style.borderRadius = "0px";
        }, 100)
        setTimeout(() => {
            media.style.width = "100vw";
            media.style.height = "100vh";
            media.style.top = "0px";
            media.style.left = "0px";
        }, 200)
    }

    return (
        <div className="item" id={props.id}  onClick={(e) => openMedia(e)}>
            
        </div>
    );
}