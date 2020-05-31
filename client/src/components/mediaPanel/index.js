import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import LoadingAnimation from "./LoadingAnimation";
import UserService from '../../services/UserService';

export default function MediaPanel() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getFeed();
    }, []);

    function getFeed() {

        UserService.getFeed().then(data => {
            data.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            console.log(data);
            setPosts(data);
        });
    }

    return (
        <div>
            {posts.map(post => (
                <MediaCard
                    key={post._id}
                    imgUrl={post.imgSrc}
                    userImg={post.userImg}
                    username={post.user}
                />
            ))}
            {/* <LoadingAnimation /> */}
        </div>
    );
}

