import React, { useEffect, useState, useContext } from 'react';
import UserService from "../../../services/UserService";
import LockedMedia from "../LockedMedia/lockedMedia";
import { AuthContext } from '../../../context/AuthContext';
import TipModal from "../../TipModal";
import "./style.css";

function MediaCard(props) {
    const [hexColor, setHexColor] = useState();
    const [color, setColor] = useState();
    const [userImg, setUserImg] = useState("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");
    const [paywall, setPaywall] = useState(true);
    const [height, setHeight] = useState(280);
    const authContext = useContext(AuthContext);

    var style = {
        profileImgSmall: {
            marginRight: 10,
            float: "left",
            width: 40,
            height: 40,
            borderRadius: "50%",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: hexColor
        },
        imageArea: {
            height: height,
            maxHeight:"600px"
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
            setHeight((this.height / this.width) * 540);
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

    return (
        <div className="card panel" data-color={color}>
            <div className="imageArea" style={style.imageArea}>
                {paywall ? <LockedMedia price={props.price} updatePaywall={() => (setPaywall(false))} id={props.id} username={props.username} getBalance={props.getBalance} imgUrl={props.imgUrl} height={height}></LockedMedia> : <img className="feedImg" src={props.imgUrl} alt="post" />}
            </div>
            <div className="container">
                <div className="outerUserInfoMedia">
                    <div className="userInfoMedia">
                        <img className="profileImgSmall" style={style.profileImgSmall} src={userImg} alt="Avatar"></img>
                        <a className="userLink" href={authContext.user.username === props.username ? '/profile' : '/user/' + props.username}><h4>{props.username}</h4></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MediaCard;