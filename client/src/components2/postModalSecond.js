import React, { useState, useEffect, useContext } from 'react';
import CreatePostService from '../services/CreatePostService';
import { AuthContext } from '../context/AuthContext';
import "./uploadPlayerStyle.css";
import "./modalSecondStyle.css";

let title;
let price = 0;

export default function PostModalSecond(props) {
    const authContext = useContext(AuthContext);
    const [imagePost, setImagePost] = useState(false);
    const [priceValue, setPriceValue] = useState(0);

    useEffect(() => {

    })

    function back() {
        document.getElementById("modalSecond").style.display = "none";
        document.getElementById("whiteFirst").style.display = "initial";
    }

    function post() {
        if (title) {
                document.getElementById("postComplete").style.display = "flex";
                CreatePostService.newPost({ "src": props.url, "title": title, "price": price }).then(data => {
                    const { message } = data;
                    if (message.msgBody === "Unauthorized") {
                        authContext.setUser({ username: "" });
                        authContext.setIsAuthenticated(false);
                    } else {
                        console.log(data)
                        // setTimeout(() => {
                        //     document.getElementById("createPost").style.display = "none";
                        //     props.done();
                        // }, 1000)
                    }
                });
        }
    }

    function imageError() {
        setImagePost(false);
        if (props.url != "") {
            let previewVid = document.createElement("video");
            previewVid.src = props.url;
            previewVid.className = "postPreview";
            previewVid.id = "previewVid";
            previewVid.controls = true;
            previewVid.onerror = function () {
                window.location.href = "/profile";
            }
            document.getElementById("previewArea").append(previewVid);
        }
    }

    function imageLoad() {
        setImagePost(true);
        let previewVid = document.getElementById("previewVid");
        if (previewVid) {
            previewVid.style.display = "none"
        }
    }

    function titleChange(e) {
        let newTitle = e.target.value;
        title = newTitle;
        // styling
        if (newTitle) {
            document.getElementById("postBtn").style.backgroundColor = "#01ccff";
            document.getElementById("titleLabel").style.color = "#01ccff";
        } else {
            document.getElementById("titleLabel").style.color = "gray";
        }
    }

    function priceChange(e) {
        let newPrice = e.target.value;
        if (!isNaN(newPrice)) {
            price = newPrice;
            setPriceValue(newPrice);
        }
        /// styling
        if (price) {
            document.getElementById("priceLabel").style.color = "#01ccff";
        } else {
            document.getElementById("priceLabel").style.color = "gray";
            price = 0;
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

                <div id="vidInfo">
                    <div className="enterTitle">
                        <div id="titleLabel">
                            Enter a title
                        </div>
                        <div id="textAreaTitle">
                            <textarea id="title" onChange={(e) => titleChange(e)} onClick={() => document.getElementById("textAreaTitle").style.borderColor = "#01ccff"} onBlur={() => document.getElementById("textAreaTitle").style.borderColor = "white"}></textarea>
                        </div>
                    </div>
                    <div className="enterPrice">
                        <div id="priceLabel">
                            Enter a price
                        </div>
                        <div id="priceLabelTag">
                            (optional)
                        </div>
                        <div id="priceInputFlex">
                            <div id="textAreaPrice">
                                <textarea id="price" value={priceValue} onChange={(e) => priceChange(e)} onClick={() => document.getElementById("textAreaPrice").style.borderColor = "#01ccff"} onBlur={() => document.getElementById("textAreaPrice").style.borderColor = "white"}></textarea>
                            </div>
                            <div id="cncyType">
                                USD
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="back" onClick={() => back()}>back</div>
            <div id="postBtn" onClick={() => post()}>post</div>
        </div>
    );
}