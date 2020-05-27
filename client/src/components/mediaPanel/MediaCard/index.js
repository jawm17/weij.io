import React from "react";
import "./style.css";

function MediaCard(props) {
    return (
        <div className="card panel" data-color={props.color}>
            <img className="feedImg" src={props.imgUrl} alt="Avatar" />
            <div className="container">
                <h4><b>Test Post</b></h4>
            </div>
        </div>
    );
}

export default MediaCard;