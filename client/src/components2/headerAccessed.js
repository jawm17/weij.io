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
                    <div id="wallet" className="fixedButtons" onClick={() => window.location.href = "/register"}>
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