import React, { useEffect, useState, useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from '@material-ui/core/Button';
import PriceService from "../services/PriceService";
import UserService from '../services/UserService';
import TransactionService from '../services/TransactionService';
import "./newTipModalStyle.css";

export default function NewTipModal(props) {
    const [modal, setModal] = useState(false);
    const [price, setPrice] = useState();
    const [notification, setNotification] = useState("");
    const [notificationError, setNotificationError] = useState();
    const [rainbowWidth, setRainbowWidth] = useState(0);
    const [value, setValue] = useState(0.5);
    const authContext = useContext(AuthContext);
    let timerID = useRef(null);

    const style = {
        rainbowStyle: {
            width: rainbowWidth,
            height: 5,
            position: "absolute",
            transition: "width 0.2s",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5
        },
        success: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 11,
            width: "100vw",
            height: "100vw",
            height: 250,
            maxWidth: 400,
            width: "95%",
            backgroundColor: "white"
        }
    }

    useEffect(() => {
        getPrice();
    });

    function closeModal() {
        setModal(false);
        setRainbowWidth(0);
    }

    function getPrice() {
        //Set current eth price with api or manually
        setPrice(230.17);
    }

    function sendAnimation() {
        setRainbowWidth(400);
    }

    function amountEntered(e) {
        if (!isNaN(e.target.value)) {
            setValue(e.target.value)
        }
    }

    function sendTip(value) {
        UserService.getUserInfo().then(data => {
            const { message, balance } = data;
            if (!message) {
                if (value < balance) {
                    TransactionService.tipTx((value), props.username, data.username).then(data => {
                        setNotification("Succesfully sent Ether");
                        setNotificationError(false);
                        sendAnimation();
                        timerID = setTimeout(() => {
                            setNotification("");
                            closeModal();
                        }, 1500)
                    })
                } else {
                    setNotification("Insufficent Funds");
                    setNotificationError(true);
                    timerID = setTimeout(() => {
                        setNotification("");
                        setNotificationError(false);
                    }, 1500)
                }
            }
            else if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }


    if (modal) {
        return (
            <div>
                <img className="tipIconButton" src="https://image.flaticon.com/icons/svg/3037/3037255.svg" alt="ethereum icon" onClick={() => setModal(true)}></img>
                <div className="modalOpen">
                    <div className="tipModalBody">
                        <img style={style.rainbowStyle} src={"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218batch10-mynt-11.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=f701199de450fc12516032a94444742e"} alt="rainbow animation"></img>
                        <div className="tipArea">
                            <div className="top">
                                <h2 className="tipTitle">Tip {props.username}</h2>
                                <img className="x" src="https://image.flaticon.com/icons/svg/104/104812.svg" alt="x in circle icon" onClick={() => (closeModal())}></img>
                            </div>
                            <input className="tipInput" placeholder="Enter Amount (ETH)" onChange={amountEntered}></input>
                            <div className="sendTipButton">
                                <Button variant="contained" color="primary" onClick={() => sendTip((0.5 / price).toFixed(5))} disabled>
                                    Send Tip
                                </Button>
                            </div>
                            {notificationError ? <div className="errorMsg">Insufficent Funds</div> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <img className="tipIconButton" src="https://image.flaticon.com/icons/svg/3037/3037255.svg" alt="ethereum icon" onClick={() => setModal(true)}></img>
        );
    }
}