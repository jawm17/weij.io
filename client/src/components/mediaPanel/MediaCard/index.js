import React, { useEffect, useState, useContext } from 'react';
import UserService from "../../../services/UserService";
import LockedMedia from "../LockedMedia/lockedMedia";
import history from '../../../history';
import { AuthContext } from '../../../context/AuthContext';
import TipModal from "../../TipModal";
import "./style.css";
import zIndex from '@material-ui/core/styles/zIndex';

function MediaCard(props) {
    const [hexColor, setHexColor] = useState();
    const [color, setColor] = useState();
    const [userImg, setUserImg] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");
    const [paywall, setPaywall] = useState(true);
    const [height, setHeight] = useState();
    const authContext = useContext(AuthContext);

    var style = {
        profileImgSmall: {
            borderColor: hexColor
        },
        imageArea: {
            maxHeight: "600px",
            width: "97vw",
            maxWidth: 540
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
                setColor(data.color);
                switch (data.color) {
                    case "color-violet":
                        setHexColor("#7A4EAB");
                        break;
                    case "color-indigo":
                        setHexColor("#4332CF");
                        break;
                    case "color-blue":
                        setHexColor("#2F8FED");
                        break;
                    case "color-green":
                        setHexColor("#4DCF42");
                        break;
                    case "color-yellow":
                        setHexColor("#FAEB33");
                        break;
                    case "color-orange":
                        setHexColor("#F19031");
                        break;
                    case "color-red":
                        setHexColor("#F2293A");
                        break;
                    case "color-pink":
                        setHexColor("#FF1493");
                        break;
                }
            }
        });
    }

    if (paywall) {
        //paywall
        return (
            <div className="card panel" data-color={color}>
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
                        {authContext.user.username === props.username ? null : <TipModal username={props.username}/>}
                    </div>
                </div>
            </div>
        );
    } else {
        //no paywall
        if (props.type === "video") {
            // video post
            return (
                <div className="card panel" data-color={color}>
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
            return (
                <div className="card panel" data-color={color}>
                    <div className="imageArea" style={style.imageArea}>
                        <img className="feedImg" src={props.imgUrl} alt="post" />
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
        }

    }
}

export default MediaCard;