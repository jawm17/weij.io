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
                <source src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/v09044990000bvtm4ip7447iuta7gud0.mov?alt=media&token=43e93a32-8000-49ad-ab07-22f0ada95c2d" type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
            <div className="infoArea">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_Rv8W2Od1KkQuN-okihZ3X3Ybaiii9wT2Q&usqp=CAU" className="infoAreaPic"></img>
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