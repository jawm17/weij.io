import React, { useEffect, useState, useContext } from 'react';
import UserService from "../../../services/UserService";
import LockedMedia from "../LockedMedia/lockedMedia";
import history from '../../../history';
import { AuthContext } from '../../../context/AuthContext';
import TipModal from "../../TipModal";
import FeedImageView from "../../FeedImageView";
import Comments from "../../Comments";
import "./style.css";

function MediaCard(props) {
    const [hexColor, setHexColor] = useState();
    const [userImg, setUserImg] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");
    const [paywall, setPaywall] = useState(true);
    const [height, setHeight] = useState();
    const [containerInfoHeight, setContainerInfoHeight] = useState(50);
    const [comments, setComments] = useState(false);
    const [imageView, setImageView] = useState(false);
    const authContext = useContext(AuthContext);

    document.body.style.overflow = "scroll"

    const style = {
        profileImgSmall: {
            borderColor: hexColor
        },
        imageArea: {
            width: "95vw",
            maxWidth: 540,
        },
        containerInfo: {
            padding: "0 16px 10px",
            height: containerInfoHeight,
            display: "flex",
            alignItems: "start",
            transition: "all 0.3s ease-in-out"
        }
    };

    useEffect(() => {
        getDisplayUserInfo();
        checkPaywall();
        getDimensions();
    }, []);

    const getDimensions = () => {
        var img = new Image();
        img.onload = function () {
            setHeight((this.height / this.width) * (window.innerWidth * .95));
        }
        img.src = props.imgUrl;
    }

    const checkPaywall = () => {
        if (!props.price) {
            setPaywall(false);
        } else if (authContext.user.username === props.username) {
            setPaywall(false);
        } else {
            UserService.getUserInfo().then(data => {
                if (props.privileged.includes(data.id)) {
                    setPaywall(false);
                }
            })
        }
    }

    const getDisplayUserInfo = () => {
        UserService.getOtherUserInfo(props.username).then(data => {
            const { message } = data;
            if (!message) {
                setUserImg(data.profileImgSrc);
                setHexColor(data.color)
            }
        });
    }

    const toggleImageView = () => {
        setImageView(!imageView);
    }

    const toggleComments = () => {
        if (!comments) {
            setContainerInfoHeight(200);
            setComments(!comments);
        } else {
            setContainerInfoHeight(50);
            setComments(!comments);
        }
    }

    if (paywall) {
        //paywall
        return (
            <div className="card panel">
                <div className="imageArea" style={style.imageArea}>
                    <LockedMedia price={props.price} updatePaywall={() => (setPaywall(false))} id={props.id} username={props.username} getBalance={props.getBalance} imgUrl={props.imgUrl} height={height}></LockedMedia>
                </div>
                <div className="containerInfo">
                    <div className="userInfoMedia">
                        <div className="innerUserInfoMedia">
                            <img className="profileImgSmall" style={style.profileImgSmall} src={userImg} alt="Avatar"></img>
                            <a className="userLink" onClick={() => (authContext.user.username === props.username ? history.push('/profile') : history.push('/user/' + props.username))}><h4>{props.username}</h4></a>
                        </div>
                    </div>
                    <div className="containerTipArea">
                        {authContext.user.username === props.username ? null : <TipModal username={props.username} />}
                    </div>
                </div>
            </div>
        );
    } else {
        //no paywall
        if (props.type === "video") {
            // video post
            return (
                <div className="card panel">
                    <div >
                        <video style={style.imageArea}
                            id="my-player"
                            class="video-js vjs-theme-city"
                            controls
                            preload="auto"
                            poster="//vjs.zencdn.net/v/oceans.png"
                            data-setup='{}'>
                            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
                            <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
                            <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
                            <p class="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a
                                web browser that
                            <a href="https://videojs.com/html5-video-support/" target="_blank">
                                    supports HTML5 video
                            </a>
                            </p>
                        </video>
                    </div>
                    <div className="containerInfo">
                        <div className="userInfoMedia">
                            <div className="innerUserInfoMedia">
                                <img className="profileImgSmall" style={style.profileImgSmall} src={userImg} alt="Avatar"></img>
                                <a className="userLink" onClick={() => (authContext.user.username === props.username ? history.push('/profile') : history.push('/user/' + props.username))}><h4>{props.username}</h4></a>
                            </div>
                        </div>
                        <div className="containerTipArea">
                            {authContext.user.username === props.username ? null : <TipModal username={props.username} getBalance={props.getBalance} />}
                        </div>
                    </div>
                </div>
            );
        } else {
            //photo post
            if (imageView) {
                return (
                    <FeedImageView toggleImageView={() => toggleImageView()} imgUrl={props.imgUrl} />
                );
            } else {
                return (
                    <div className="card panel">
                        <div className="imageArea" style={style.imageArea}>
                            <img className="feedImg" src={props.imgUrl} alt="post" onClick={() => toggleImageView()} />
                        </div>
                        <div className="containerInfo" style={style.containerInfo}>
                            <div className="basicInfoMedia">
                                <div className="infoLeft">
                                    <img className="profileImgSmall" style={style.profileImgSmall} src={userImg} alt="Avatar"></img>
                                    <a className="userLink" onClick={() => (authContext.user.username === props.username ? history.push('/profile') : history.push('/user/' + props.username))}><h4>{props.username}</h4></a>
                                </div>
                                <div className="buttons">
                                    <img className="commentIcon" src="https://image.flaticon.com/icons/svg/876/876221.svg" alt="comment icon" onClick={() => toggleComments()}></img>
                                    <div className="containerTipArea">
                                        {authContext.user.username === props.username ? null : <TipModal username={props.username} getBalance={props.getBalance} />}
                                    </div>
                                </div>
                            </div>
                            {/* {comments ? <Comments/> : null} */}
                            <div className="comments">
                                dfsdf
                            </div>
                        </div>
                    </div>
                );
            }
        }

    }
}

export default MediaCard;