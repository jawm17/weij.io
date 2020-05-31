import React from "react";
import { createBrowserHistory as history } from 'history';
import "./style.css";

function ResultCard(props) {

    return (
        <div>
            <div className="resultBody">
                <img className="resultProfilePic" src={props.imgUrl} alt="Avatar" />
                <button onClick={() => window.location.href = ('/user/' + props.username)} className="usernameBtn"><h2>{props.username}</h2></button>
            </div>
        </div>
    );
}

export default ResultCard;