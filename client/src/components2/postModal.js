import React, { useEffect, useState, useContext } from 'react';
import { app } from '../base';
import Sample from "./sample";
import "./postModalStyle.css";

export default function PostModal() {
    const [display, setDisplay] = useState("none");
    const [file, setFile] = useState("");
    const [displaySample, setDisplaySample] = useState(false);

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

    function publishFile() {
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            fileRef.getDownloadURL().then(function (url) {
                console.log(url);
            });
        })
    }

    function selectFile(e) {
        setFile(e.target.files[0]);
    }

    function exit() {
        document.getElementById("createPost").style.display = "none";
    }

    function dropHandler(ev) {
        console.log(ev);
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            setFile(ev.dataTransfer.items[0].getAsFile());
            document.getElementById("dropZone").style.display = "none";
            setDisplaySample(true);
            displayVideo();
        }
    }

    function displayVideo() {
        console.log(file);
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
                                <p id="dragDropText">Drag and drop a file or click here</p>
                            </div>
                            {displaySample ? <Sample src={file.name} /> : null}
                            <div className="enterVidInfo">

                            </div>
                        </div>
                        <button id="back" onClick={() => exit()}>exit</button>
                        <button id="forward" onClick={() => publishFile()}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}