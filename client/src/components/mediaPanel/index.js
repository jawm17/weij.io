import React, { useState, useEffect, useContext } from "react";
import MediaCard from "./MediaCard";
import LoadingAnimation from "./LoadingAnimation";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import { PromiseProvider } from "mongoose";

export default function MediaPanel(props) {
    const [posts, setPosts] = useState([]);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        getFeed();
    }, []);

    function getFeed() {

        UserService.getFeed().then(data => {
            if(!data.message) {
                data.sort(function (a, b) {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setPosts(data);
            }
            else if (data.message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    return (
        <div>
            {posts.map(post => {
                if (!post.deleted) {
                    return <MediaCard
                        getBalance={() => props.getBalance}
                        key={post._id}
                        id={post._id}
                        imgUrl={post.imgSrc}
                        price={post.price}
                        privileged={post.privileged}
                        username={post.user}
                    />
                }
            })}
            <div className="extraBlock"></div>
            {/* <LoadingAnimation /> */}
        </div>
    );
}

