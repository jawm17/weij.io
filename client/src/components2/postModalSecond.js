import React, { useState, useEffect, useContext } from 'react';
import PostPhotoService from '../services/PostPhotoService';
import { AuthContext } from '../context/AuthContext';
import "./uploadPlayerStyle.css";
import "./modalSecondStyle.css";

let imageError = true;
let title;
let price = 0;
let thumbCode;

export default function PostModalSecond(props) {
    const authContext = useContext(AuthContext);
    const [imagePost, setImagePost] = useState(false);

    useEffect(() => {
       
    })

    function back() {
        document.getElementById("modalSecond").style.display = "none";
        document.getElementById("whiteFirst").style.display = "initial";
    }

    function post() {

    }

    function imageError() {
        setImagePost(false);
        if(props.url != "") {
            let previewVid = document.createElement("video");
            previewVid.src = props.url;
            previewVid.className = "postPreview";
            previewVid.id = "previewVid";
            previewVid.controls = true;
            previewVid.onerror = function() {
                window.location.href = "/profile";
            }
            document.getElementById("previewArea").append(previewVid);
        }
    }

    function imageLoad() {
        setImagePost(true);
        let previewVid =  document.getElementById("previewVid");
        if (previewVid) {
            previewVid.style.display = "none"
        }
    }

    return (
        <div id="modalSecond" style={{ "display": "none" }}>
            <div id="postComplete">
                Complete!
            </div>
            <div id="whiteSecond">
                <div id="banner">
                    <p id="bannerText">Create Post</p>
                </div>
                <div id="previewArea">
                    <img className="postPreview" onError={() => imageError()} onLoad={() => imageLoad()} src={props.url} style={imagePost ? { "display": "initial" } : { "display": "none" }}></img>
                </div>

                <div id="back" onClick={() => back()}>back</div>
                <div id="postBtn" onClick={() => post()}>post</div>
            </div>
        </div>
    );
}