import React, { useState, useEffect } from "react";
import "./FeedImageViewStyle.css";

export default function FeedImageView(props) {

    document.body.style.overflow = "hidden"

    return (
        <div className="FeedImageView" onClick={() => props.toggleImageView()}>
            
        </div>
    )
}