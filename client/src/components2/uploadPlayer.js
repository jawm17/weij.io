import React, { useEffect, useState } from 'react';
import { app } from '../base';
import "./uploadPlayerStyle.css";

export default function UploadPlayer(props) {

    const [thumbCode, setThumbCode] = useState();
    const [thumbSrc, setThumbSrc] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");

    useEffect(() => {
        let vid = document.getElementById("uploadPlayer");
        vid.disablePictureInPicture = true
        vid.ontimeupdate = function () { timeScrolled() };
    }, []);

    function vidError() {
        // if firebase url not working abort
        window.alert("video error");
        window.location = "/profile";
    }

    function timeScrolled() {
        // styling
        let selectBtn = document.getElementById("selectTime")
        selectBtn.style.display = "flex";
        selectBtn.textContent = "select";
        selectBtn.style.color = "gray";
        document.getElementById("optionTitle").style.color = "gray";
    }

    function timeSelected() {

        // stylying changes on dom
        let selectBtn = document.getElementById("selectTime");
        selectBtn.textContent = "selected";
        selectBtn.style.color = "#8A62E2";
        document.getElementById("optionTitle").style.color = "#8A62E2";

        // send time to secondModal function timeChosen
        let vid = document.getElementById("uploadPlayer");
        setThumbCode(vid.currentTime)
    }


    function firebaseUpload(file) {
        let storageRef = app.storage().ref();
        let fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            fileRef.getDownloadURL().then(function (url) {
                setThumbSrc(url);
                setThumbCode();
                document.getElementById("thumbnailImg").style.display = "initial";
                document.getElementById("optionTitle").style.color = "#8A62E2";

                let selectBtn = document.getElementById("selectTime")
                selectBtn.style.display = "none";
            });
        })
    }


    // on click select file handler
    function selectFile(e) {
        if (e.target.files[0]) {
            let file = e.target.files[0];
                // upload to firebase
                firebaseUpload(file);
        }
    }

    function thumbnailError() {
        document.getElementById("thumbnailImg").style.display = "none";
        document.getElementById("optionTitle").style.color = "gray";
    }


    return (
        <div>
            <input style={{ "display": "none" }} id="selectThumb" type="file" onChange={(e) => selectFile(e)}></input>
            <video id="uploadPlayer" controls controlsList="nodownload nooptions">
                <source src={props.url} type="video/mp4" onError={() => vidError()} />
                        Your browser does not support the video tag.
            </video>
            <div>
                <img src={thumbSrc} id="thumbnailImg" onError={() => thumbnailError()}></img>
            </div>
            
            <div id="selectTime" onClick={() => timeSelected()}>
                select
                </div>
            <div id="upldBttn" onClick={() => document.getElementById("selectThumb").click()}>
                or <div className="bttn">upload</div>
            </div>
        </div>
    );
}