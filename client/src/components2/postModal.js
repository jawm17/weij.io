import React, { useEffect, useState, useContext } from 'react';
import { app } from '../base';
import "./postModalStyle.css";

export default function PostModal() {
    const [file, setFile] = useState("");

    const style = {
        shade: {
            position: "fixed",
            zIndex: 200,
            width: "100vw",
            height: "100vh",
            display: "none",
            backgroundColor: "rgba(0,0,0,0.8)",
        }
    }

    function selectFile(e) {
        if(e.target.files[0]) {
            let file = e.target.files[0];
            setFile(file);
    
            let ext = file.name.slice(file.name.length - 3, file.name.length).toUpperCase();
            if (ext === "MOV" || ext === "MP4" || ext === "AVI") {
                displayAnimation();
                
                // upload to firebase
                let storageRef = app.storage().ref();
                let fileRef = storageRef.child(file.name);
                fileRef.put(file).then((e) => {
                    fileRef.getDownloadURL().then(function (url) {
                        console.log(url);
                        uploadFinished(file.name);
                    });
                })
            } else {
                fileError();
            }
        }
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

            let ext = file.name.slice(file.name.length - 3, file.name.length).toUpperCase();
            if (ext === "MOV" || ext === "MP4" || ext === "AVI") {
                displayAnimation();

                // upload to firebase
                let storageRef = app.storage().ref();
                let fileRef = storageRef.child(file.name);
                fileRef.put(file).then((e) => {
                    fileRef.getDownloadURL().then(function (url) {
                        console.log(url);
                        uploadFinished(file.name);
                    });
                })
            }
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

    function uploadFinished(name) {
        document.getElementById("loader").style.display = "none";
        document.getElementById("success").style.display = "initial";
        document.getElementById("uploadText").textContent = ("uploaded " + name);
    }

    function fileError() {
        document.getElementById("dragDropText").textContent = "This file type is not supported";
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
                                    <div id="uploadFlex">
                                        <div id="loader">
                                        </div>
                                        <div id="success">
                                            <div id="successFlex">
                                                <img id="checkMark" alt="success" src="https://i.pinimg.com/originals/0f/7c/61/0f7c619d53fbe58fabce214b53530141.png"></img>
                                            </div>
                                        </div>
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