import React, { useEffect, useState } from 'react';
import { app } from '../base';
import "./uploadPlayerStyle.css";

export default function UploadPlayer(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [file, setFile] = useState("");
    const [thumbSrc, setThumbSrc] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");


    const style = {
        video: {
            width: "100",
            height: 400,
            backgroundColor: "black"
        }
    }

    useEffect(() => {
        let vid = document.getElementById("uploadPlayer");
        vid.disablePictureInPicture = true
        vid.ontimeupdate = function () { timeScrolled() };
    }, []);

    function vidError() {
        window.alert("video error");
    }

    function timeScrolled() {
        let selectBtn = document.getElementById("selectTime")
        selectBtn.style.display = "flex";
        selectBtn.textContent = "select";
        selectBtn.style.color = "gray";
        document.getElementById("optionTitle").style.color = "gray";
    }

    function timeSelected() {
        let selectBtn = document.getElementById("selectTime");
        selectBtn.textContent = "selected";
        selectBtn.style.color = "#8A62E2";
        document.getElementById("optionTitle").style.color = "#8A62E2";
        // props.timeChosen()
    }


    function firebaseUpload(file) {
        let storageRef = app.storage().ref();
        let fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            fileRef.getDownloadURL().then(function (url) {
                setThumbSrc(url);
                document.getElementById("thumbnailImg").style.display = "initial";
            });
        })
    }


    // on click select file handler
    function selectFile(e) {
        if (e.target.files[0]) {
            let file = e.target.files[0];
            setFile(file);
            console.log(file);
            // check file extension
            let ext = file.name.slice(file.name.length - 3, file.name.length).toUpperCase();

                // upload to firebase
                firebaseUpload(file);
                // display animation
                // uploadingAnimation();

        }
    }


    return (
        <div>
            <input style={{ "display": "none" }} id="selectThumb" type="file" onChange={(e) => selectFile(e)}></input>
            <video id="uploadPlayer" controls controlsList="nodownload nooptions">
                <source src={props.url} type="video/mp4" onError={() => vidError()} />
                        Your browser does not support the video tag.
            </video>
            <div>
                <img src={thumbSrc} id="thumbnailImg"></img>
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