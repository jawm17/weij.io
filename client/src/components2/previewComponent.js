import React, {useState} from "react";
import "./previewComponentStyle.css";

export default function PreviewComponent(props) {
    const [statsOpacity, setStatsOpacity] = useState(0);

    const style = {
        previewStats: {
            opacity: statsOpacity
        }
    }


    function startPreview() {
        let figure = document.getElementById(props.id + "vid");
        figure.play();
        setStatsOpacity(100);
    }

    function endPreview() {
        let figure = document.getElementById(props.id + "vid");
        figure.pause();
        setStatsOpacity(0);
    }

    return (
        <div className="inlineBlock">
            <div className="previewDiv" onMouseEnter={() => startPreview()} onMouseLeave={() => endPreview()}>
                <div className="flagBlock">
                </div>
                <div className="previewVideoArea">
                    <video className="previewVideo" muted id={props.id + "vid"} >
                        <source src={props.imgUrl[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                     <div className="previewStats" style={style.previewStats}>
                         <div className="statsDiv">
                            <img className="previewEthIcon" src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/ethInfo.png?alt=media&token=0fd1b994-bb0d-4ba3-b2cb-69f6d7b10e99"></img>
                            3.210
                         </div>
                         <div className="statsDiv">
                            <img className="previewViewsIcon" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/eye%20(1).png?alt=media&token=b57a7b7b-ce5d-4518-b1ed-2f4944febb2c"></img>
                            108k
                         </div> 
                     </div>
                </div>
                <div className="previewInfo">
                    <div className="previewTitle">
                        The Great Big Bunny
                    </div>
                    <div className="previewDuration">
                        12:04
                    </div>
                    <div className="previewProfile">
                        <img className="previewProfileImage" src="https://yt3.ggpht.com/yti/ANoDKi505BNxdC-6GKx90P0E_6SSiOuL5jx4SEgvr1DWWg=s88-c-k-c0x00ffffff-no-rj-mo"></img>
                        <div className="inlineBlock" className="previewUsername">jawm42</div>
                    </div>
                </div>
            </div>
        </div>
    );
}