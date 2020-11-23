import React, { useEffect } from 'react';
import "./uploadPlayerStyle.css";

export default function UploadPlayer(props) {

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
    }, []);


    return (
        <div>
            <video id="uploadPlayer"  controls controlsList="nodownload nooptions">
                <source src={props.url} type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
        </div>
    );
}