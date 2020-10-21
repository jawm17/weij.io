import { MediaStoreData } from 'aws-sdk';
import React, { useEffect, useState } from 'react';
import "./NewDemoStyle.css";

export default function NewDemo() {

    function openMedia(e) {
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
        <div>
            <div id="header">
                <h3 className="mainLogo">
                    ethereal
                </h3>
                <div className="buttonGroup">
                    <div id="wallet">
                        
                        {/* <img id="ethLogo" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" alt="eth logo"></img> */}
                    </div>
                    <div id="wallet">
                      
                    </div>
                </div>

            </div>
            <div className="outer">
                <div className="row">
                    <h2 className="rowTitle">Popular Content</h2>
                    <div className="item" id="media" onClick={(e) => openMedia(e)}>

                    </div>
                    <div className="item" id="media2" onClick={(e) => openMedia(e)}>

                    </div>
                    <div className="item" id="media3" onClick={(e) => openMedia(e)}>

                    </div>
                    <div className="item" id="media4" onClick={(e) => openMedia(e)}>

                    </div>
                    <div className="item" id="media5" onClick={(e) => openMedia(e)}>

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                </div>
                <div className="row">
                    <h2 className="rowTitle">B00By736's Videos</h2>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                </div>
                <div className="row">
                    <h2 className="rowTitle">For You</h2>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                </div>
            </div>
        </div>
    );
}