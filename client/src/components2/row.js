import React, { useState, useEffect } from "react";
import MediaPreview from "../components2/mediaPreview";
import media from "../videos.json";
import "./rowStyle.css";

export default function Row(props) {

    useEffect(() => {
        console.log(props);
    }, []);

    function scrollRight(id) {
        let row = document.getElementById(id);
        row.scrollLeft += 300;
    }

    function scrollLeft(id) {
        let row = document.getElementById(id);
        row.scrollLeft = 0;
    }

    function scrollChecker(id) {
        if (document.getElementById(id).scrollLeft >= 23) {
            document.getElementById(id + "Button").style.opacity = 100;
        } else {
            document.getElementById(id + "Button").style.opacity = 0;
        }
    }

    return (
        <div className="row" id="rowOne" onScroll={() => scrollChecker("rowOne")}>
                    <h2 className="rowTitle">Popular Content</h2>
                    <div className="scrollLeft" id="rowOneButton" onClick={() => scrollLeft("rowOne")}>
                        <img src="https://i.ibb.co/G98bbcz/arrow-Right.png" alt="scroll arrow right" className="arrowImgLeft"></img>
                    </div>
                    <div className="scrollRight" onClick={() => scrollRight("rowOne")}>
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