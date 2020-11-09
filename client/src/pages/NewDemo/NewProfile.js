import React, { useEffect, useState, useContext } from 'react';
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import HeaderEth from "../../components2/headerEth";
import "./profileStyle.css";
import { IoTEvents } from 'aws-sdk';

export default function NewProfile() {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log("Profile Page");
        requestUserData();
    },[]);

    function requestUserData() {
        UserService.getUserInfo().then(data => {
            if (!data.message) {
                console.log(data);
            }
            else if (data.message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
                window.alert("not logged in");
            }
        });
    }

    return (
        <div>
            <HeaderEth />
            <div id="leftPanelProfile">
                <img id="profilePictureFull" src="https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" alt="profile picture"></img>
                <div id="profileUsername">
                    Jawm42
                </div>
                <div id="settingsButton">

                </div>
            </div>
            <div id="rightPanelProfile">
                <div id="rowOnePro">
                    <div className="profilePreview">

                    </div>
                    <div className="profilePreview">
                        
                    </div>
                    <div className="profilePreview">
                        
                    </div>
                </div>
                <div id="rowTwoPro">

                </div>
                <div id="rowThreePro">

                </div>
            </div>
        </div>
    );
}