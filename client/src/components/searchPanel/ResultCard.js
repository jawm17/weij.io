import React, { useEffect, useState } from 'react';
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

    const relocate = () => {
        if(username === props.username){
            window.location.href = ('/profile');
        } else {
            window.location.href = ('/user/' + props.username);
        }
    }


    return (
        <div>
            <div className="resultBody">
                <img className="resultProfilePic" src={props.imgUrl} alt="Avatar" />
                <button onClick={() => relocate()} className="usernameBtn"><h2>{props.username}</h2></button>
            </div>
        </div>
    );
}

export default ResultCard;