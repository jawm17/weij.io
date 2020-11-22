import React, { useEffect, useState, useContext } from 'react';
import { app } from '../base';
import "./postModalStyle.css";

export default function PostModal() {
    const [display, setDisplay] = useState("none");
    const [file, setFile] = useState("");

    const style = {
        shade: {
            position: "fixed",
            zIndex: 200,
            width: "100vw",
            height: "100vh",
            display: display,
            backgroundColor: "rgba(0,0,0,0.8)",
        }
    }

    function selectFile(e) {
        let file = e.target.files[0];
        setFile(file);
        displayAnimation();

        // upload to firebase
        let storageRef = app.storage().ref();
        let fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            fileRef.getDownloadURL().then(function (url) {
                console.log(url);
            });
        })
    }

    function exit() {
        window.location.href = "/profile";
    }

    function dropHandler(ev) {
        console.log(ev);
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            let file = ev.dataTransfer.items[0].getAsFile();
            setFile(file);
            displayAnimation();

            // upload to firebase
            let storageRef = app.storage().ref();
            let fileRef = storageRef.child(file.name);
            fileRef.put(file).then((e) => {
                fileRef.getDownloadURL().then(function (url) {
                    console.log(url);
                });
            })
        }
    }

    function displayAnimation() {
        document.getElementById("dropZone").style.borderColor = "white";
        document.getElementById("dragDropText").textContent = "";
        document.getElementById("uploadingDiv").style.display = "initial";
    }

    function dragOverHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }


    return (
        <div>
            <div style={style.shade} id="createPost">
                <div id="center">
                    <div className="white">
                        <div id="banner">
                            <p id="bannerText">Upload Video</p>
                        </div>
                        <div id="centerDrop">
                            <input style={{ "display": "none" }} id="j" type="file" onChange={(e) => selectFile(e)}></input>
                            <div id="dropZone" onClick={() => document.getElementById("j").click()} onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
                                <div id="uploadingDiv">
                                    <div className="loader">
                                    </div>
                                    <div id="uploadText">
                                        {"uploading " + file.name}
                                    </div>
                                </div>
                                <p id="dragDropText">Drag and drop a file or click here</p>
                            </div>
                            <div className="enterTitle">
                                <div id="titleLabel">
                                    Title
                                </div>
                                <div className="textArea">
                                </div>
                            </div>
                            <div className="enterDescription">
                                <div id="descriptionLabel">
                                    Description
                                </div>
                                <div className="textArea">
                                </div>
                            </div>
                        </div>
                        <div id="back" onClick={() => exit()}>exit</div>
                        <button id="forward" onClick={() => console.log()}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}