import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import "./lockedMediaStyle.css";

export default function LockedMedia(props) {
    function unlockPhoto(){
        props.updatePaywall();

    }

    return (
        <div className="lockedMediaBody">
            <div className="infoArea">
            <p className="infoText">This image costs {props.price} ETH to unlock.</p>
            <button className="button3" onClick={() => unlockPhoto()}>Unlock</button>
            </div>
        </div>
    );
}