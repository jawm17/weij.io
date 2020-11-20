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
            backgroundColor: "rgba(0,0,0,0.5)",
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
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file') {
                    setFile(ev.dataTransfer.items[i].getAsFile());
                }
            }
        }
    }

    function dragOverHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }


    return (
        <div>
            <div >
                <div style={style.shade} id="createPost">
                    <div id="center">
                        <div className="white">
                            <div id="dropZone" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
                                <p>Drag one or more files to this Drop Zone ...</p>
                            </div>
                            <input type="file" onChange={(e) => selectFile(e)}></input>
                            <button onClick={() => exit()}>exit</button>
                            <button onClick={() => publishFile()}>publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}