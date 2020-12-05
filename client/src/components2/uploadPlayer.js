import React, { useEffect } from 'react';
import "./uploadPlayerStyle.css";

export default function UploadPlayer(props) {

    var scaleFactor = 0.25;
    var snapshots = [];

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
        vid.ontimeupdate = function() {timeSelected()};
    }, []);

    function vidError() {
        window.alert("video error");
    }

    function timeSelected() {
        document.getElementById("optionTitle").style.color = "#8A62E2";
    }

    // function capture(video, scaleFactor) {
    //     if (scaleFactor == null) {
    //         scaleFactor = 1;
    //     }
    //     var w = video.videoWidth * scaleFactor;
    //     var h = video.videoHeight * scaleFactor;
    //     var canvas = document.createElement('canvas');
    //     canvas.width = w;
    //     canvas.height = h;
    //     var ctx = canvas.getContext('2d');
    //     ctx.drawImage(video, 0, 0, w, h);
    //     return canvas;
        
    // }

    function snap(){
    //     let vid = document.getElementById("uploadPlayer");
    //     var output = document.getElementById('selectBttn');
    //     var canvas = capture(vid, scaleFactor);
    //     snapshots.unshift(canvas);
    //     output.innerHTML = '';
    //     output.appendChild(snapshots[0]);
    }

    return (
        <div>
            <video id="uploadPlayer" controls controlsList="nodownload nooptions">
                <source src={props.url} type="video/mp4" onError={() => vidError()}/>
                        Your browser does not support the video tag.
                </video>
                <div id="upldBttn" onClick={() => snap()}>
                    or <div className="bttn">upload</div>
                </div>
        </div>
    );
}