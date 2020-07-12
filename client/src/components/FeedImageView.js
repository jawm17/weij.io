import React, { useState, useEffect } from "react";
import "./FeedImageViewStyle.css";

export default function FeedImageView(props) {

    document.body.style.overflow = "hidden"
    
    // useEffect(() => {
        
    // })

    return (
        <div className="FeedImageView" onClick={() => props.toggleImageView()}>
            <img className="fullscreenImg" src={props.imgUrl} alt="large feed image"></img>
        </div>
    )
}