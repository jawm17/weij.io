import React, { useEffect, useState } from 'react';
import Player from "./player";
import "./mediaStyle.css";

export default function Media(props) {
    // const [x, setX] = useState(document.getElementById(props.id).getBoundingClientRect().x);
    // const [y, setY] = useState(document.getElementById(props.id).getBoundingClientRect().y);
    const [width, setWidth] = useState(196);
    const [height, setHeight] = useState(260);
    const [br, setBr] = useState(12);

    const style = {
        mediaMain: {
            position: "fixed",
            top: 0,
            left: 0,
            margin: 0,
            width: width,
            height: height,
            backgroundColor: "gray",
            borderRadius: 0,
            transition: "all 0.2s ease-in-out",
            zIndex: 5
        }
    }

    // useEffect(() => {
        
    // }, []);


    // function openMedia() {
    //     setTimeout(() => {
    //         setBr(0);
    //     }, 100)
    //     setTimeout(() => {
    //         setWidth("100vw");
    //         setHeight("100vh");
    //         setY(0);
    //         setX(0);
    //     }, 200)
    // }

    return (
        <div style={style.mediaMain} >
            {/* <div className="player">

            </div> */}
            <Player />
            <div id="return" >-</div>
        </div>
    );
}