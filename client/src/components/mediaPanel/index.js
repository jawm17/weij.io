import React, { Component } from "react";
import MediaCard from "./MediaCard";
import LoadingAnimation from "./LoadingAnimation";
import posts from "../../posts.json";

class MediaPanel extends Component {

    render() {
        return (
            <div>
                {posts.map(post => (
                    <MediaCard
                        key={post.id}
                        imgUrl={post.imageUrl}
                        color={post.userColor}
                    />
                ))}

                <LoadingAnimation />
            </div>
        )
    }
}

export default MediaPanel;
