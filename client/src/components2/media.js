import React, { useEffect, useState } from 'react';
import Player from "./player";
import history from '../history';
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

    useEffect(() => {
    }, []);


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
        <div id="mediaPage">
            {/* <div className="player">

            </div> */}
            <Player />
            <div id="return" onClick={() => window.history.back()}>
                <img src="https://i.ibb.co/G98bbcz/arrow-Right.png" alt="scroll arrow right" id="returnImg"></img>
            </div>
            <div className="contentTop">
                <div className="contentTopLeft">
                    <div id="videoTitle">
                        The Great big green bunny
                </div>
                    <div id="description">
                        Proin eget dapibus urna. Aliquam in augue ante. Aliquam non tempor tortor. Morbi ullamcorper rhoncus metus vitae aliquet. Duis rhoncus velit nec lobortis tempor. Integer tempor libero massa, tincidunt molestie lorem ultricies id. Integer sed ullamcorper dolor.
                </div>
                </div>
                <div id="mediaButtons">
                    <div id="tipButton" className="mediaButton">
                        Tip
                    </div>
                    <div id="likeButton" className="mediaButton">
                        Like
                    </div>
                    <div id="shareButton" className="mediaButton">
                        Share
                    </div>
                </div>
            </div>
            <div className="commentArea">
            </div>
            <div className="relatedContent">

            </div>
        </div>
    );
}