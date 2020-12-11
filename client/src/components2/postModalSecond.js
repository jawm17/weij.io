import React, { useState, useEffect } from 'react';
import "./modalSecondStyle.css";
import { app } from '../base';
import "./uploadPlayerStyle.css";

export default function PostModalSecond(props) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [thumbCode, setThumbCode] = useState();
    const [thumbSrc, setThumbSrc] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");

    useEffect(() => {
        let vid = document.getElementById("uploadPlayer");
        vid.disablePictureInPicture = true
        vid.ontimeupdate = function () { timeScrolled() };
    }, []);

    function back() {
        document.getElementById("modalSecond").style.display = "none";
        document.getElementById("whiteFirst").style.display = "initial";
    }

    function post() {

    }


    // Four Inputs ------------------------------------------------------------------------------------------------------
    function titleChange(e) {
        let newTitle = e.target.value;
        setTitle(newTitle);

        // styling
        if (newTitle) {
            document.getElementById("titleLabel").style.color = "#8A62E2";
        } else {
            document.getElementById("titleLabel").style.color = "gray";
        }
    }

    function priceChange(e) {
        let price = e.target.value;
        setPrice(price);

        /// styling
        if (price) {
            document.getElementById("priceLabel").style.color = "#8A62E2";
        } else {
            document.getElementById("priceLabel").style.color = "gray";
        }
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

    // on click select file handler
    function selectFile(e) {
        if (e.target.files[0]) {
            let file = e.target.files[0];
            // upload to firebase
            firebaseUpload(file);
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
        let selectBtn = document.getElementById("selectTime")
        selectBtn.style.display = "flex";
        selectBtn.textContent = "select";
        selectBtn.style.color = "gray";
        document.getElementById("optionTitle").style.color = "gray";
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

    function thumbnailError() {
        document.getElementById("thumbnailImg").style.display = "none";
        document.getElementById("optionTitle").style.color = "gray";
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
                            <img src={thumbSrc} id="thumbnailImg" onError={() => thumbnailError()}></img>
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
                <div id="forward2" onClick={() => console.log()}>post</div>
            </div>
        </div>
    );
}