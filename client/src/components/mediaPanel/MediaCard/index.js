import React, { useEffect, useState } from 'react';
import UserService from "../../../services/UserService";
import TipModal from "../../TipModal";
import "./style.css";

function MediaCard(props) {
    const [username, setUsername] = useState("");
    const [color, setColor] = useState();

    var style = {
        profileImgSmall: {
            marginRight: 10,
            float: "left",
            width: 40,
            height: 40,
            borderRadius : "50%",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: color
          }
    };

    useEffect(() => {
        getUserInfo();
        switch (props.color) {
            case "color-violet":
                setColor("#7A4EAB");
                break;
            case "color-indigo":
                setColor("#4332CF");
                break;
            case "color-blue":
                setColor("#2F8FED");
                break;
            case "color-green":
                setColor("#4DCF42");
                break;
            case "color-yellow":
                setColor("#FAEB33");
                break;
            case "color-orange":
                setColor("#F19031");
                break;
            case "color-red":
                setColor("#F2293A");
                break;
            case "color-pink":
                setColor("#FF1493");
                break;
        }
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
            <img className="feedImg" src={props.imgUrl} alt="Avatar"/>
            <div className="container userInfoMedia">
                <img className="profileImgSmall" style={style.profileImgSmall} src={props.userImg} alt="Avatar"></img>
                <a className="userLink" href={username === props.username ? '/profile' : '/user/' + props.username}><h4>{props.username}</h4></a>
                {username === props.username ? null : <TipModal username={props.username}/>}
            </div>
        </div>
    );
}

export default MediaCard;