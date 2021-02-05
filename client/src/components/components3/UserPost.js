import React, { useState } from "react";
import  "./styles/userPostStyle.css";

export default function UserPost() {
    const [postInfo, setPostInfo] = useState(false);

    return (
        <div className="userPost" onMouseEnter={() => setPostInfo(true)} onMouseLeave={() => setPostInfo(false)}>
                <div className="postInfo" style={postInfo ? {"display": "flex"} : {"display" : "none"}}>
                        hello
                </div>
        </div>
    );
}