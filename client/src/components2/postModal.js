import React, { useEffect, useState, useContext } from 'react';
import { app } from '../base';
import "./postModalStyle.css";

export default function PostModal() {
    const [display, setDisplay] = useState("none");

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

    function submitFile(e) {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            fileRef.getDownloadURL().then(function (url) {
                console.log(url);
            });
        })

    }

    function exit() {
        document.getElementById("createPost").style.display = "none";
    }


    return (
        <div>
            <div >
                <div style={style.shade} id="createPost">
                    <div id="center">
                        <div className="white">
                            <input type="file" onChange={(e) => submitFile(e)}></input>
                            <button onClick={() => exit()}></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}