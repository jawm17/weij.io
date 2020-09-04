import React, { useState, useContext, useRef } from 'react';
import Modal from 'react-awesome-modal';
import { AuthContext } from '../context/AuthContext';
import Button from '@material-ui/core/Button';
import "./TipModalStyle.css";
import UserService from '../services/UserService';
import TransactionService from '../services/TransactionService';

export default function TipModal(props) {
    const [visible, setVisible] = useState(props.visible);
    const [price, setPrice] = useState();
    const [notification, setNotification] = useState("");
    const [notificationError, setNotificationError] = useState();
    const [rainbowWidth, setRainbowWidth] = useState(0);
    const authContext = useContext(AuthContext);

    const style = {
        rainbowStyle: {
            width: rainbowWidth,
            height: 5,
            position: "absolute",
            transition: "width 0.5s",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5
        }
    }

    const openModal = () => {
        setVisible(true);
        getPrice();
    }

    const closeModal = () => {
        setVisible(false);
    }

    const sendTip = (value) => {
        sendAnimation();
        UserService.getUserInfo().then(data => {
            const { message, balance } = data;
            if (!message) {
                if (value < balance) {
                    TransactionService.tipTx((value), props.username, data.username).then(data => {
                        setNotification("Succesfully sent Ether");
                        setNotificationError(false);
                        setTimeout(() => {
                            setNotification("");
                            closeModal();
                        }, 1500)
                    })
                } else {
                    setNotification("Insufficent Funds");
                    setNotificationError(true);
                    setTimeout(() => {
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

    const getPrice = () => {
        //Set current eth price with api or manually
        setPrice(230.17);
    }

    const sendAnimation = () => {
        setRainbowWidth(400);
    }

    return (
        <section className="tipModalButton">
            <img className="tipIconButton" src="https://image.flaticon.com/icons/svg/3037/3037255.svg" alt="ethereum icon" onClick={() => openModal()}></img>
            <Modal
                visible={visible}
                width="400"
                height="250"
                effect="fadeInDown"
                onClickAway={() => closeModal()}
            >
                <img style={style.rainbowStyle} src={"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218batch10-mynt-11.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=f701199de450fc12516032a94444742e"} alt="rainbow animation"></img>
                <div className="tipArea">
                    <div className="top">
                        <h1 className="tipTitle">Ethereum</h1>
                        <img className="x" src="https://image.flaticon.com/icons/svg/104/104812.svg" alt="x in circle icon" onClick={() => (closeModal())}></img>
                    </div>
                    <div className="tipButtons">
                        <Button variant="contained" color="primary" onClick={() => sendTip((0.5 / price).toFixed(5))}>
                            {(0.5 / price).toFixed(5)} ETH
                        </Button>
                        <div className="estimateTip">about 0.50 USD</div>
                    </div>
                    {notification ? notificationError ? <div className="errorMsg">Insufficent Funds</div> : <div className="successMsg">Succesfully sent Ether</div> : null}
                </div>
            </Modal>
        </section>
    )
}