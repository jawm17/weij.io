import React, { useState, useEffect } from "react";
import "./headerAccessedStyle.css";

export default function HeaderAccessed() {


    return (
        <div>
            <div id="header">
                <h3 className="mainLogo" onClick={() => window.location.href = "/landing"}>
                    ethereal
                </h3>
                <div className="buttonGroup">
                    <div id="walletA" className="fixedButtonsA" onClick={() => window.location.href = "/wallet"}>
                    {/* <img id="ethIcon" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkhipus.io%2Fimages%2Fether-iso.png&f=1&nofb=1"></img>
                        2.01 */}
                        Wallet
                    </div>
                    <div id="profileA"  onClick={() => window.location.href = "/profile"}>
                        <img src='https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4' id="profileIcon"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}