import React, { useState, useEffect, useContext } from "react";
import MediaCard from "./MediaCard/MediaCard";
import videos from "../../videos.json";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import "./style.css"

export default function MediaPanel2(props) {
    const [posts, setPosts] = useState([]);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        getFeed();
    }, []);

    function getFeed() {
        setPosts(videos);
    }

    return (
        <div id="mediaArea">
            {posts.map(post => {
                if (!post.deleted) {
                    return <MediaCard
                        // className="mediaCard"
                        // getBalance={props.getBalance}
                        key={post.description}
                        descript={post.description}
                        color={post.color}
                        // imgUrl={post.imgSrc}
                        // price={post.price}
                        // privileged={post.privileged}
                        // username={post.user}
                        // ethPrice={props.ethPrice}
                    />
                }
            })}
            <div className="extraBlock"></div>
        </div>
    );
}

