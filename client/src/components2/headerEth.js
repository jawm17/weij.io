import React, { useState, useEffect } from "react";
import "./headerEthStyle.css";

export default function HeaderEth() {


    return (
        <div>
            <div id="header">
                <h3 className="mainLogo" onClick={() => window.location.href = "/landing"}>
                    ethereal
                </h3>
                <div className="buttonGroup">
                    <div id="wallet" className="fixedButtons" onClick={() => window.location.href = "/register"}>
                        Sign Up
                    </div>
                    <div id="profile" className="fixedButtons" onClick={() => window.location.href = "/profile"}>
                        <div>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}