import React, {useEffect, useState} from 'react';
import UploadPlayer from "./uploadPlayer";
import "./modalSecondStyle.css";

export default function PostModalSecond(props) {

    function back() {
        document.getElementById("modalSecond").style.display = "none";
        document.getElementById("whiteFirst").style.display = "initial";
    }

    return (
        <div id="modalSecond" style={{"display": "none"}}>
            <div id="whiteSecond">
                <div id="banner">
                    <p id="bannerText">Thumbnail and Preview</p>
                </div>
                <div id="optionTitle">
                    Choose a thumbnail from the video
                </div>
                {props.url ? <UploadPlayer url={props.url}/> : null}
                <div id="back" onClick={() => back()}>back</div>
                <button id="forward" onClick={() => console.log()}>next</button>
            </div>
        </div>
    );
}