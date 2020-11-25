import React, { useEffect, useState, useContext } from 'react';
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import HeaderAccessed from '../../components2/headerAccessed';
import PostModal from '../../components2/postModal';
import "./profileStyle.css";

export default function NewProfile() {
    const authContext = useContext(AuthContext);
    const settingsSrc = "https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/cog.png?alt=media&token=23ca742a-18ce-4318-b62c-b697f299afcb";

    useEffect(() => {
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

    function createAPost() {
        document.getElementById("createPost").style.display = "initial";
    }

    return (
        <div>
            <HeaderAccessed />
            <PostModal />
            <div id="leftPanelProfile">
                <img id="profilePictureFull" src="https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" alt="profile picture"></img>
                <div id="profileUsername">
                    Jawm42
                </div>
                <div id="buttonGroup">
                <div id="subscriptions">
                        <div className="bold">
                            4
                        </div>
                        subscriptions
                    </div>
                    <div id="subs">
                        <div className="bold">
                            4000
                        </div>
                        subscribers
                    </div>
                    <div id="ethEarned">
                        <div className="bold">
                            510
                        </div>
                        eth earned
                    </div>
                </div>
                <div id="btnCntr">
                    <div id="postButtn" onClick={() => createAPost()}>
                        Post Something
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