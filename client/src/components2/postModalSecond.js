import React, {useEffect, useState} from 'react';
import UploadPlayer from "./uploadPlayer";
import "./modalSecondStyle.css";

export default function PostModalSecond(props) {

    const [title, setTitle] = useState("");
    const [descript, setDescript] = useState("");

    const style = {
        nextBtn : {
            width: 50,
            heigh: 20,
            backgroundColor: "gray",
        }
    }


    function back() {
        document.getElementById("modalSecond").style.display = "none";
        document.getElementById("whiteFirst").style.display = "initial";
    }

    function titleChange(e) {
        let newTitle = e.target.value;
        setTitle(newTitle);
        if(newTitle) {
            document.getElementById("titleLabel").style.color = "#8A62E2";
        } else {
            document.getElementById("titleLabel").style.color = "gray";
        }
    }

    function descriptChange(e) {
        let newD = e.target.value;
        setDescript(newD);
        if(newD) {
            document.getElementById("descriptionLabel").style.color = "#8A62E2";
        } else {
            document.getElementById("descriptionLabel").style.color = "gray";
        }
    }

    return (
        <div id="modalSecond" style={{"display": "none"}}>
            <div id="whiteSecond">
                <div id="banner">
                    <p id="bannerText">Thumbnail and Preview</p>
                </div>
                <div id="optionTitle">
                    Choose a thumbnail from the video
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
                {props.url ? <UploadPlayer url={props.url}/> : null}
                <div id="back" onClick={() => back()}>back</div>
                <div style={style.nextBtn} id="forward2" onClick={() => console.log()}>next</div>
            </div>
        </div>
    );
}