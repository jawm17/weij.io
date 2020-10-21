import React, { useEffect, useState } from 'react';
import "./NewDemoStyle.css";

export default function NewDemo() {


    function openMedia(e) {
        let id = document.getElementById(e.target.id);
        let x = id.getBoundingClientRect().x;
        let y = id.getBoundingClientRect().y;
        id.style.backgroundColor = "black";
        id.style.position = "fixed";
        id.style.margin = 0;
        id.style.width = "100vw";
        id.style.height = "100vh";
        id.style.top = "0px";
        id.style.left = "0px";
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
                    <div className="item" id="media" onClick={(e) => openMedia(e)}>

                    </div>
                    <div className="item" id="media" onClick={(e) => openMedia(e)}>

                    </div>
                    <div className="item" id="media" onClick={(e) => openMedia(e)}>

                    </div>
                    <div className="item" id="media" onClick={(e) => openMedia(e)}>

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