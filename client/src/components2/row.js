import React, { useState, useEffect } from "react";
import MediaPreview from "../components2/mediaPreview";
import media from "../videos.json";
import "./rowStyle.css";

export default function Row(props) {
    const rowId = Math.random() * 10000;

    useEffect(() => {
        console.log(props);
    }, []);

    function scrollRight() {
        let row = document.getElementById(rowId);
        row.scrollLeft += 300;
    }

    function scrollLeft() {
        let row = document.getElementById(rowId);
        row.scrollLeft = 0;
    }

    function scrollChecker() {
        if (document.getElementById(rowId).scrollLeft >= 23) {
            document.getElementById(rowId + "Button").style.opacity = 100;
        } else {
            document.getElementById(rowId + "Button").style.opacity = 0;
        }
    }

    return (
        <div className="row" id={rowId} onScroll={() => scrollChecker()}>
                    <div className="rowTitle">Popular Content</div>
                    <div className="scrollLeft" id={rowId + "Button"} onClick={() => scrollLeft()}>
                        <img src="https://i.ibb.co/G98bbcz/arrow-Right.png" alt="scroll arrow right" className="arrowImgLeft"></img>
                    </div>
                    <div className="scrollRight" onClick={() => scrollRight()}>
                        <img src="https://i.ibb.co/G98bbcz/arrow-Right.png" alt="scroll arrow right" className="arrowImgRight"></img>
                    </div>
                    <div className="group">
                        {media.map(video => {
                            if (!video.deleted) {
                                return <MediaPreview
                                    key={video.thumb}
                                    id={video.thumb}
                                    imgUrl={video.sources}
                                    price={video.price}
                                    privileged={video.privileged}
                                    username={video.user}
                                />
                            }
                        })}
                    </div>
                </div>
    );
}