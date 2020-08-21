import React, { useEffect, useState } from "react";
import MediaPanel from "../../components/mediaPanel";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Background from "../../components/Background";
import './FeedPageStyle.css';

function Feed() {

    useEffect(() => {
        localStorage.setItem('prevPage', "/home");
    }, []);

    return (
        <div>
            <Background />
            <Header page={"home"}/>
            <Nav page={"home"} />
            <div className="feedPage">
                <div className="mediaPanel" id="mediaPanel">
                    <MediaPanel />
                </div>
            </div>
        </div>
    )
}

export default Feed;