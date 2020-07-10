import React, { useEffect, useState } from 'react';
import history from '../../history';
import UserService from "../../services/UserService";
import "./SearchStyle.css";

function ResultCard(props) {
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
        <div>
            <div className="resultBody" onClick={() => (username === props.username ? history.push('/profile') : history.push('/user/' + props.username))}>
                <img className="resultProfilePic" src={props.imgUrl} alt="Avatar" />
                <h2 className="usernameResult" >{props.username}</h2>
            </div>
        </div>
    );
}

export default ResultCard;