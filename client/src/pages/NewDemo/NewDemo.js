import React, { useEffect, useState } from 'react';
import "./NewDemoStyle.css";

export default function NewDemo() {

    return (
        <div>
            <div id="header">
                <h3 className="mainLogo">
                    ethereal
                </h3>
                <div className="buttonGroup">
                    <div id="wallet">
                        <p>wallet</p>
                        {/* <img id="ethLogo" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" alt="eth logo"></img> */}
                    </div>
                    <div id="wallet">
                        <p>profile</p>
                    </div>
                </div>

            </div>
            <div className="outer">
                <div className="row">
                    <h2 className="rowTitle">Popular Content</h2>
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