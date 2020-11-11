import React, { useEffect, useState, useContext } from 'react';
import UserService from '../../services/UserService';
import AuthContext from '../../context/AuthContext';
import HeaderEth from "../../components2/headerEth";
import Row from "../../components2/row";
import "./LandingStyle.css";

export default function Landing() {
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

    return (
        <div>
            <HeaderEth />
            <div id="landingBg"></div>
            <div className="contentContainer">
                
                <Row posts={posts}/>
                <Row posts={posts}/>
                <Row posts={posts}/>
                <Row posts={posts}/>
                <Row posts={posts}/>

                {/* <div className="row">
                    <h2 className="rowTitle">For You</h2>
                    <div className="group">
                        {posts.map(post => {
                            if (!post.deleted) {
                                return <MediaPreview
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
                </div> */}
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