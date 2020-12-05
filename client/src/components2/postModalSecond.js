import React, { useState } from 'react';
import { app } from '../base';
import UploadPlayer from "./uploadPlayer";
import "./modalSecondStyle.css";

export default function PostModalSecond(props) {

    const [title, setTitle] = useState("");
    const [descript, setDescript] = useState("");
    const [file, setFile] = useState("");
    const [thumbSrc, setThumbSrc] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");


    function back() {
        document.getElementById("modalSecond").style.display = "none";
        document.getElementById("whiteFirst").style.display = "initial";
    }

    function titleChange(e) {
        let newTitle = e.target.value;
        setTitle(newTitle);
        if (newTitle) {
            document.getElementById("titleLabel").style.color = "#8A62E2";
        } else {
            document.getElementById("titleLabel").style.color = "gray";
        }
    }

    function descriptChange(e) {
        let newD = e.target.value;
        setDescript(newD);
        if (newD) {
            document.getElementById("descriptionLabel").style.color = "#8A62E2";
        } else {
            document.getElementById("descriptionLabel").style.color = "gray";
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
 
                // upload to firebase
                firebaseUpload(file);
                // display animation
                uploadingAnimation();
         
        }
    }

    function dragOverHandler(e) {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();
    }

    // on click select file handler
    function selectFile(e) {
        if (e.target.files[0]) {
            let file = e.target.files[0];
            setFile(file);
            // check file extension
            let ext = file.name.slice(file.name.length - 3, file.name.length).toUpperCase();
     
                // upload to firebase
                firebaseUpload(file);
                // display animation
                uploadingAnimation();
         
        }
    }

    function firebaseUpload(file) {
        let storageRef = app.storage().ref();
        let fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            fileRef.getDownloadURL().then(function (url) {
                setThumbSrc(url);
                uploadFinished(url);
            });
        })
    }

    function uploadingAnimation() {
        document.getElementById("uploadThumbArea").style.borderColor = "white";
        document.getElementById("dropText").textContent = "";
        document.getElementById("uploadingDiv2").style.display = "initial";
        document.getElementById("loader2").style.display = "initial";
    }

    function fileError() {
        document.getElementById("dropText").textContent = "This file type is not supported";
        // document.getElementById("uploadingDiv").style.display = "none";
    }

    function uploadFinished() {
        document.getElementById("thumbSample").style.display = "initial";
        document.getElementById("forward2").style.color ="#8A62E2";
    }

    return (
        <div id="modalSecond" style={{ "display": "none" }}>
            <div id="whiteSecond">
                <div id="banner">
                    <p id="bannerText">Thumbnail</p>
                </div>
                <div id="optionTitle">
                    Choose a thumbnail from the video
                </div>
                <div id="thumbArea">
                    {props.url ? <UploadPlayer url={props.url} /> : null}
                </div>


                {/* <div id="orLabel">
                    Or
                </div> */}

                {/* <input style={{ "display": "none" }} id="selectThumb" type="file" onChange={(e) => selectFile(e)}></input>
                <div id="uploadThumbArea" onClick={() => document.getElementById("selectThumb").click()} onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
                    <p id="dropText">Upload a thumbnail</p>
                    <div id="thumbSample">
                        <img id="thumbSampleImg" src={thumbSrc}></img>
                    </div>
                    <div id="uploadingDiv2">
                        <div id="uploadFlex2">
                            <div id="loader2">
                            </div>
                        </div>
                        <div id="uploadText2">
                            {"uploading " + file.name}
                        </div>
                    </div>
                </div> */}

                <div className="vidInfo">
                    <div id="optionTitle2">
                        Choose a title
                    </div>
                    <div className="enterTitle">
                        <div id="titleLabel">
                            Title
                                </div>
                        <div id="textAreaTitle">
                            <textarea id="title" onChange={(e) => titleChange(e)} onClick={() => document.getElementById("textAreaTitle").style.borderColor = "#8A62E2"} onBlur={() => document.getElementById("textAreaTitle").style.borderColor = "white"}></textarea>
                        </div>
                    </div>
                    <div className="enterDescription">
                        <div id="descriptionLabel">
                            Description
                                </div>
                        <div id="textAreaDescript">
                            <textarea id="descript" onChange={(e) => descriptChange(e)} onClick={() => document.getElementById("textAreaDescript").style.borderColor = "#8A62E2"} onBlur={() => document.getElementById("textAreaDescript").style.borderColor = "white"}></textarea>
                        </div>
                    </div>
                </div>
                <div id="back" onClick={() => back()}>back</div>
                <div id="forward2" onClick={() => console.log()}>next</div>
            </div>
        </div>
    );
}