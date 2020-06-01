import React, { useEffect, useState } from 'react';
import UserService from "../../../services/UserService";
import TipModal from "../../TipModal";
import "./style.css";

function MediaCard(props) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = () => {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                setUsername(data.username);
            }
        });
    }

    return (
        <div className="card panel" data-color={props.color}>
            <img className="feedImg" src={props.imgUrl} alt="Avatar" />
            <div className="container userInfoMedia">
                <img className="profileImgSmall" src={props.userImg} alt="Avatar"></img>
                <a className="userLink" href={username === props.username ? '/profile' : '/user/' + props.username}><h4>{props.username}</h4></a>
                {username === props.username ? null : <TipModal username={props.username}/>}
            </div>
        </div>
    );
}

export default MediaCard;