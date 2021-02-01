import React, { useEffect } from "react";
import "./mediaCardStyle.css";

export default function MediaCard(props) {

    useEffect(() => {
        var elements = document.getElementsByClassName('media');
        var requiredElement = elements[0];
        requiredElement.style.marginTop = "100px"
    })

    return (
        <div className="media" id={props.descript} color={props.color}>
            {/* <div className="buttons">
                <img src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/chat.png?alt=media&token=68d8b05a-1058-4db8-b587-294c51bc051b" className="commentIcon"></img>
            </div> */}
            <video className="mediaPlayer" id={props.descript + "vid"} controls disablePictureInPicture controlsList="nodownload" >
                <source src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/v09044e70000c0bdh69sp64eorjpc07g.MP4?alt=media&token=ad869d9e-48e1-4784-960c-264aa12b88ac" type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
            <div className="infoArea">
            <img src="https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4" className="infoAreaPic"></img>
               <div className="infoAreaName">
               faithordway7
               </div>
               <div className="infoButtons">
                    <img className="heart" src="https://www.flaticon.com/svg/vstatic/svg/1077/1077035.svg?token=exp=1612158362~hmac=61e46e686c53ba0d311d96c9f324ce5a"></img>
               </div>
            </div>
        </div>
    );

}