import React, { useEffect } from "react";
import videos from "../videos.json";
import MediaPreview from "./mediaPreview.js";
import "./profileMediaAreaStyle.css";

export default function ProfileMediaArea(props) {

    useEffect(() => {
        console.log("hhh")
    }, [props.media]);

    if (props.media === "video") {
        return (
            <div id="profileMediaArea">
                <div id="videoGrid">
                    {videos.map(video => {
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
    } else if (props.media === "music") {
        return (
            <div id="profileMediaArea">
                <div>
                    music
                </div>
            </div>
        );
    } else {
        return (
            <div id="profileMediaArea">
                <div>
                    highscores
                </div>
            </div>
        );
    }
}