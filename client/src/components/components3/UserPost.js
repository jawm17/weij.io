import React, { useState } from "react";
import "./styles/userPostStyle.css";

export default function UserPost(props) {
    const [postInfo, setPostInfo] = useState(false);

    return (
        <div className="userPost" onMouseEnter={() => setPostInfo(true)} onMouseLeave={() => setPostInfo(false)}>
            <img className="userPostImage" src={props.src}></img>
            <div className="postInfo" style={postInfo ? { "display": "flex" } : { "display": "none" }}>
                <div>
                <div className="postInfoRow">
                    <img className="infoIcon" src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/heartInfo.png?alt=media&token=b9df2b6c-9f83-41c4-8ab1-d7637ae82611"></img>
                            20K
                </div>
                <div className="postInfoRow">
                    <img className="infoIcon" src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/commentInfo.png?alt=media&token=ebfcc5e7-2336-48f4-ae8e-03fe1f706314"></img>
                            3000
                </div>
                <div className="postInfoRow">
                    <img className="infoIcon" src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/ethInfo.png?alt=media&token=0fd1b994-bb0d-4ba3-b2cb-69f6d7b10e99"></img>
                            3.566
                </div>
                </div>
            </div>
        </div>
    );
}