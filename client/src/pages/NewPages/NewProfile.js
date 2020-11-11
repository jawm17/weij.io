import React, { useEffect, useState, useContext } from 'react';
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import HeaderEth from "../../components2/headerEth";
import "./profileStyle.css";

export default function NewProfile() {
    const authContext = useContext(AuthContext);
    const settingsSrc = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fmodern-ui-1%2F64%2Fsettings-cog-512.png&f=1&nofb=1";

    useEffect(() => {
        console.log("Profile Page");
        requestUserData();
    }, []);

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
                <div id="infoGroup">
                
                </div>
                <div id="buttonGroup">
                    <div id="settingsButton">
                        <img src={settingsSrc} alt="settings cog" id="cog"></img>
                    </div>
                    <div id="uploadButton">
                        upload
                    </div>
                    <div id="manageSubs">
                        subscriptions
                    </div>
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
                    <div className="profilePreview">

                    </div>
                    <div className="profilePreview">

                    </div>
                    <div className="profilePreview">

                    </div>
                </div>
                <div id="rowThreePro">
                    <div className="profilePreview">

                    </div>
                    <div className="profilePreview">

                    </div>
                    <div className="profilePreview">

                    </div>
                </div>
            </div>
        </div>
    );
}