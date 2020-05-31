import React from "react";
import "./style.css";

function MediaCard(props) {
    console.log(props.username)
    return (
        <div className="card panel" data-color={props.color}>
            <img className="feedImg" src={props.imgUrl} alt="Avatar" />
            <div className="container userInfoMedia">
                <img className="profileImgSmall" src={props.userImg} alt="Avatar"></img>
                <a className="userLink" href={"/user/" + props.username}><h4>{props.username}</h4></a>
            </div>
        </div>
    );
}

export default MediaCard;