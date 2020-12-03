import React, { useEffect, useState, useContext } from 'react';
import { app } from '../base';
import PostModalSecond from './postModalSecond';
import "./postModalStyle.css";

export default function PostModal() {
    const [file, setFile] = useState("");
    const [url, setUrl] = useState();
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

    function exit() {
        window.location.href = "/profile";
    }

    function next() {

            document.getElementById("modalSecond").style.display = "initial";
            document.getElementById("whiteFirst").style.display = "none";
        
    }

    // on click select file handler
    function selectFile(e) {
        if (e.target.files[0]) {
            let file = e.target.files[0];
            setFile(file);
            // check file extension
            let ext = file.name.slice(file.name.length - 3, file.name.length).toUpperCase();
            if (ext === "MOV" || ext === "MP4" || ext === "AVI") {
                // upload to firebase
                firebaseUpload(file);
                // display animation
                uploadingAnimation();
            } else {
                fileError();
            }
        }
    }

    // on drop file handler 
    function dropHandler(e) {
        // prevent file opening in browser
        e.preventDefault();
        if (e.dataTransfer.items) {
            let file = e.dataTransfer.items[0].getAsFile();
            setFile(file);
            // check file extension
            let ext = file.name.slice(file.name.length - 3, file.name.length).toUpperCase();
            if (ext === "MOV" || ext === "MP4" || ext === "AVI") {
                // upload to firebase
                firebaseUpload(file);
                // display animation
                uploadingAnimation();
            } else {
                fileError();
            }
        }
    }

    function firebaseUpload(file) {
        let storageRef = app.storage().ref();
        let fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            fileRef.getDownloadURL().then(function (url) {
                setUrl(url);
                uploadFinished(file.name);
            });
        })
    }

    function uploadingAnimation() {
        document.getElementById("dropZone").style.borderColor = "white";
        document.getElementById("dragDropText").textContent = "";
        document.getElementById("uploadingDiv").style.display = "initial";
        document.getElementById("success").style.display = "none";
        document.getElementById("loader").style.display = "initial";
    }

    function dragOverHandler(e) {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();
    }

    function uploadFinished(name) {
        document.getElementById("loader").style.display = "none";
        document.getElementById("success").style.display = "initial";
        document.getElementById("uploadText").textContent = ("uploaded " + name);
        document.getElementById("forward").style.backgroundColor = "#8A62E2";
    }

    function fileError() {
        document.getElementById("dragDropText").textContent = "This file type is not supported";
        document.getElementById("uploadingDiv").style.display = "none";
    }

    return (
        <div>
            <div style={style.shade} id="createPost">
                <div id="center">
                    <PostModalSecond url={url}/>
                    <div id="whiteFirst">
                        <div id="banner">
                            <p id="bannerText">Upload Video</p>
                        </div>
                        <div id="centerDrop">
                            <input style={{ "display": "none" }} id="selectileInput" type="file" onChange={(e) => selectFile(e)}></input>
                            <div id="dropZone" onClick={() => document.getElementById("selectileInput").click()} onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
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
                        </div>
                        <div id="exit" onClick={() => exit()}>cancel</div>
                        <div id="forward" onClick={() => next()}>next</div>
                    </div>
                </div>
            </div>
        </div>
    );
}