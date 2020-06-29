import React, { useEffect, useState } from 'react';
import history from '../../history';
import UserService from "../../services/UserService";
import "./style.css";

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
            <div className="resultBody">
                <img className="resultProfilePic" src={props.imgUrl} alt="Avatar" />
                <button onClick={() => (username === props.username ? history.push('/profile') : history.push('/user/' + props.username))} className="usernameBtn"><h2>{props.username}</h2></button>
            </div>
        </div>
    );
}

export default ResultCard;