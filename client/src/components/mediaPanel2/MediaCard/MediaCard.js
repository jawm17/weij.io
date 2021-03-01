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
            <video className="mediaPlayer" id={props.descript + "vid"} controls disablePictureInPicture controlsList="nodownload" loop muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/v09044740000c0c3emppghok33p9jflg.MP4?alt=media&token=e94e9417-b0f1-452c-abe0-86e79f9c3133" type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
            <div className="infoArea">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_Rv8W2Od1KkQuN-okihZ3X3Ybaiii9wT2Q&usqp=CAU" className="infoAreaPic"></img>
               <div className="infoAreaName">
               faithordway7
               </div>
               <div className="infoButtons">
                    <img className="tip" src="https://www.flaticon.com/svg/vstatic/svg/3037/3037255.svg?token=exp=1613883134~hmac=bac134ab0b839e4c406c6f88fa50cdf5"></img>
                    <img className="comment" src="https://www.flaticon.com/svg/vstatic/svg/1946/1946412.svg?token=exp=1613882753~hmac=8be2a46061e020f5798f02fa9b1d59a0"></img>
                    <img className="heart" src="https://www.flaticon.com/svg/vstatic/svg/1077/1077035.svg?token=exp=1612158362~hmac=61e46e686c53ba0d311d96c9f324ce5a"></img>
               </div>
            </div>
        </div>
    );

}