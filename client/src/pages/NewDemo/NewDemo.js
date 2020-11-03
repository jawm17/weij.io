import React, { useEffect, useState, useContext } from 'react';
import MediaPreview from "../../components2/mediaPreview";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import media from "../../videos.json";
import "./NewDemoStyle.css";

export default function NewDemo() {
    const [posts, setPosts] = useState([]);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        getFeed();
    }, []);

    function getFeed() {
        UserService.getFeed().then(data => {
            if (!data.message) {
                console.log(data);
                data.sort(function (a, b) {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setPosts(data);
            }
            else if (data.message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
                window.alert("not logged in");
            }
        });
    }

    function scrollRight(id) {
       let row = document.getElementById(id);
       row.scrollLeft += 950;
    }

    return (
        <div>
            <div id="header">
                <h3 className="mainLogo" onClick={() => window.location.href = "/landing"}>
                    ethereal
                </h3>
                <div className="buttonGroup">
                    <div id="wallet">

                        {/* <img id="ethLogo" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" alt="eth logo"></img> */}
                    </div>
                    <div id="profile" onClick={() => window.location.href = "/profile"}>

                    </div>
                </div>

            </div>
            <div className="outer">
                <div className="row" id="rowOne">
                    <h2 className="rowTitle">Popular Content</h2>
                    <div className="scrollRight" onClick={() => scrollRight("rowOne")}></div>
                    <div className="group">
                        {media.map(post => {
                            if (!post.deleted) {
                                return <MediaPreview
                                    className="item"
                                    key={post.thumb}
                                    id={post.thumb}
                                    imgUrl={post.sources}
                                    price={post.price}
                                    privileged={post.privileged}
                                    username={post.user}
                                />
                            }
                        })}
                    </div>
                </div>
                <div className="row">
                    <h2 className="rowTitle">B00By736's Videos</h2>
                    <div className="group">
                    {media.map(post => {
                            if (!post.deleted) {
                                return <MediaPreview
                                    className="item"
                                    key={post.thumb}
                                    id={post.thumb + "9"}
                                    imgUrl={post.sources}
                                    price={post.price}
                                    privileged={post.privileged}
                                    username={post.user}
                                />
                            }
                        })}
                    </div>
                </div>
                <div className="row">
                    <h2 className="rowTitle">For You</h2>
                    <div className="group">
                    {media.map(post => {
                            if (!post.deleted) {
                                return <MediaPreview
                                    className="item"
                                    key={post.thumb}
                                    id={post.thumb +" 90"}
                                    imgUrl={post.sources}
                                    price={post.price}
                                    privileged={post.privileged}
                                    username={post.user}
                                />
                            }
                        })}
                    </div>
                </div>
                <div className="row">
                    <h2 className="rowTitle">For You</h2>
                    <div className="group">
                        {posts.map(post => {
                            if (!post.deleted) {
                                return <MediaPreview
                                    className="item"
                                    key={post._id}
                                    id={post._id}
                                    imgUrl={post.imgSrc}
                                    price={post.price}
                                    privileged={post.privileged}
                                    username={post.user}
                                />
                            }
                        })}
                    </div>
                </div>
                <div className="row">
                    <h2 className="rowTitle">For You</h2>
                    <div className="group">
                        {posts.map(post => {
                            if (!post.deleted) {
                                return <MediaPreview
                                    className="item"
                                    key={post._id}
                                    id={post._id}
                                    imgUrl={post.imgSrc}
                                    price={post.price}
                                    privileged={post.privileged}
                                    username={post.user}
                                />
                            }
                        })}
                    </div>
                </div>
                <div className="row">
                    <h2 className="rowTitle">For You</h2>
                    <div className="group">
                        {posts.map(post => {
                            if (!post.deleted) {
                                return <MediaPreview
                                    className="item"
                                    key={post._id}
                                    id={post._id}
                                    imgUrl={post.imgSrc}
                                    price={post.price}
                                    privileged={post.privileged}
                                    username={post.user}
                                />
                            }
                        })}
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="tile">
                    <div className="footerElement" onClick={() => window.location.href = "/agreement"}>agreement</div>
                    <div className="footerElement" onClick={() => window.location.href = "/copyright"}>copyright</div>
                    <div className="footerElement" onClick={() => window.location.href = "/about"}>about</div>
                </div>
                <div className="tile2">
                    <div className="footerElement" onClick={() => window.location.href = "/profile"}>account</div>
                    <div className="footerElement" onClick={() => window.location.href = "/about/ethereum"}>ethereum</div>
                    <div className="footerElement" onClick={() => window.location.href = "/help"}>help</div>
                </div>
            </div>
        </div>
    );
}