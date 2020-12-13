import React, { useState, useEffect, useContext } from 'react';
import PostPhotoService from '../services/PostPhotoService';
import { AuthContext } from '../context/AuthContext';
import { app } from '../base';
import "./uploadPlayerStyle.css";
import "./modalSecondStyle.css";

let imageError = true;
let title;
let price = 0;
let thumbCode;

export default function PostModalSecond(props) {
    const authContext = useContext(AuthContext);

    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState();
    // const [thumbCode, setThumbCode] = useState();
    const [thumbSrc, setThumbSrc] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let vid = document.getElementById("uploadPlayer");
        vid.disablePictureInPicture = true
        vid.ontimeupdate = function () { timeScrolled() };
        console.log("f")
    }, []);

    function back() {
        document.getElementById("modalSecond").style.display = "none";
        document.getElementById("whiteFirst").style.display = "initial";
    }

    function post() {
        if (ready) {
            PostPhotoService.postVideo({ "vidSrc": props.url, thumbSrc: thumbSrc, thumbCode: thumbCode, "user": props.username, "userImg": props.profileSrc, "price": price }).then(data => {
                const { message } = data;
                if (message.msgBody === "Unauthorized") {
                    authContext.setUser({ username: "" });
                    authContext.setIsAuthenticated(false);
                } else {
                    console.log(data)
                }
            });
        }

    }

    function checkInputs() {
        if (title && price) {
            if (price >= 0.25 && !imageError) {
                document.getElementById("postBtn").style.backgroundColor = "#8A62E2";
                setReady(true);
            } else if (imageError) {
                console.log('upload image');
                setReady(false);
                document.getElementById("postBtn").style.backgroundColor = "gray";
            } else {
                console.log('increase price');
                setReady(false);
                document.getElementById("postBtn").style.backgroundColor = "gray";
            }
        } else if (title && (!imageError || thumbCode) && (price === 0)) {
            document.getElementById("postBtn").style.backgroundColor = "#8A62E2";
            setReady(true);
        } else {
            setReady(false);
            document.getElementById("postBtn").style.backgroundColor = "gray";
        }
    }


    // Four Inputs ------------------------------------------------------------------------------------------------------
    function titleChange(e) {
        let newTitle = e.target.value;
        title = newTitle;
        checkInputs();
        // styling
        if (newTitle) {
            document.getElementById("titleLabel").style.color = "#8A62E2";
        } else {
            document.getElementById("titleLabel").style.color = "gray";
        }
    }

    function priceChange(e) {
        let newPrice = e.target.value;
        price = newPrice;
        /// styling
        if (price) {
            document.getElementById("priceLabel").style.color = "#8A62E2";
        } else {
            document.getElementById("priceLabel").style.color = "gray";
            price = 0;
        }
        checkInputs();
    }

    function timeSelected() {
        // stylying changes on dom
        let selectBtn = document.getElementById("selectTime");
        selectBtn.textContent = "selected";
        selectBtn.style.color = "#8A62E2";
        document.getElementById("optionTitle").style.color = "#8A62E2";

        // send time to secondModal function timeChosen
        let vid = document.getElementById("uploadPlayer");
        thumbCode = vid.currentTime;
        checkInputs();
        imageError = true;
    }

    // on click select file handler
    function selectFile(e) {
        if (e.target.files[0]) {
            let file = e.target.files[0];
            // upload to firebase
            firebaseUpload(file);
            thumbCode = 0;
        }
    }
    // Four Inputs ------------------------------------------------------------------------------------------------------


    function vidError() {
        // if firebase url not working abort
        window.alert("video error");
        window.location = "/profile";
    }

    function timeScrolled() {
        // styling
        let selectBtn = document.getElementById("selectTime");
        selectBtn.style.display = "flex";
        selectBtn.textContent = "select";
        selectBtn.style.color = "gray";
        document.getElementById("optionTitle").style.color = "gray";

        thumbCode = 0;
        checkInputs();
    }


    function firebaseUpload(file) {
        let storageRef = app.storage().ref();
        let fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            fileRef.getDownloadURL().then(function (url) {
                setThumbSrc(url);
                document.getElementById("thumbnailImg").style.display = "initial";
                document.getElementById("optionTitle").style.color = "#8A62E2";

                let selectBtn = document.getElementById("selectTime");
                selectBtn.style.display = "none";
            });
        })
    }

    function thumbnailError() {
        document.getElementById("thumbnailImg").style.display = "none";
        document.getElementById("optionTitle").style.color = "gray";
        imageError = true;
        checkInputs();
    }

    function imageLoaded() {
        imageError = false;
        checkInputs();
    }


    return (
        <div id="modalSecond" style={{ "display": "none" }}>
            <div id="whiteSecond">
                <div id="banner">
                    <p id="bannerText">Create a Post</p>
                </div>
                <div id="optionTitle">
                    Slide to choose a thumbnail
                </div>

                <div id="thumbArea">
                    {/* {props.url ? <UploadPlayer url={props.url}/> : null} */}
                    <div>
                        <input style={{ "display": "none" }} id="selectThumb" type="file" onChange={(e) => selectFile(e)}></input>
                        <video id="uploadPlayer" controls controlsList="nodownload nooptions">
                            <source src={props.url} type="video/mp4" onError={() => vidError()} />
                            Your browser does not support the video tag.
                        </video>
                        <div>
                            <img src={thumbSrc} id="thumbnailImg" onLoad={() => imageLoaded()} onError={() => thumbnailError()}></img>
                        </div>

                        <div id="selectTime" onClick={() => timeSelected()}>
                            select
                        </div>
                        <div id="upldBttn" onClick={() => document.getElementById("selectThumb").click()}>
                            or <div className="bttn">upload</div>
                        </div>
                    </div>
                </div>

                <div className="vl"></div>

                <div className="vidInfo">
                    <div className="enterTitle">
                        <div id="titleLabel">
                            Enter a title
                        </div>
                        <div id="textAreaTitle">
                            <textarea id="title" onChange={(e) => titleChange(e)} onClick={() => document.getElementById("textAreaTitle").style.borderColor = "#8A62E2"} onBlur={() => document.getElementById("textAreaTitle").style.borderColor = "white"}></textarea>
                        </div>
                    </div>
                    <div className="enterPrice">
                        <div id="priceLabel">
                            Enter a price
                        </div>
                        <div id="priceLabelTag">
                            (optional)
                        </div>
                        <div id="textAreaPrice">
                            <textarea id="price" onChange={(e) => priceChange(e)} onClick={() => document.getElementById("textAreaPrice").style.borderColor = "#8A62E2"} onBlur={() => document.getElementById("textAreaPrice").style.borderColor = "white"}></textarea>
                        </div>
                        <div id="cncyType">
                            USD
                        </div>
                    </div>
                </div>

                <div id="back" onClick={() => back()}>back</div>
                <div id="postBtn" onClick={() => post()}>post</div>
            </div>
        </div>
    );
}