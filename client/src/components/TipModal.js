import React, { useState, useContext, useRef } from 'react';
import Modal from 'react-awesome-modal';
import { AuthContext } from '../context/AuthContext';
import Button from '@material-ui/core/Button';
import "./TipModalStyle.css";
import PriceService from "../services/PriceService";
import UserService from '../services/UserService';
import TransactionService from '../services/TransactionService';
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

export default function TipModal(props) {
    const [visible, setVisible] = useState(props.visible);
    const [price, setPrice] = useState();
    const [notification, setNotification] = useState("");
    const [notificationError, setNotificationError] = useState();
    const authContext = useContext(AuthContext);
    let timerID = useRef(null);

    const openModal = () => {
        setVisible(true);
        getPrice();
    }

    const closeModal = () => {
        setVisible(false);
    }

    const sendTip = (value) => {
        UserService.getUserInfo().then(data => {
            const { message, balance } = data;
            if (!message) {
                if (value < balance) {
                    TransactionService.tipTx((value), props.username, data.username).then(data => {
                        props.getBalance();
                        setNotification("Succesfully sent Ether");
                        setNotificationError(false);
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

    const getPrice = () => {
        //Set current eth price with api or manually
        setPrice(230.17);
    }

    return (
        <section className="tipModalButton">
            <img className="tipIconButton" src="https://image.flaticon.com/icons/svg/3037/3037255.svg" alt="ethereum icon" onClick={() => openModal()}></img>
            {/* <button className="tipButton" onClick={() => openModal()}>Tip</button> */}
            <Modal
                visible={visible}
                width="400"
                height="300"
                effect="fadeInDown"
                onClickAway={() => closeModal()}
            >
                <div className="tipArea">
                    <div className="top">
                        <h1 className="tipTitle">Tip {props.username}</h1>
                        <img className="x" src="https://image.flaticon.com/icons/svg/104/104812.svg" alt="x in circle icon" onClick={() => (closeModal())}></img>
                    </div>
                    <div className="tipButtons">
                        <Button variant="contained" color="primary" onClick={() => sendTip((0.5 / price).toFixed(5))}>
                            {(0.5 / price).toFixed(5)} ETH
                        </Button>
                        <div className="estimateTip">about 0.50 USD</div>
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" onClick={() => sendTip((1 / price).toFixed(5))}>
                            {(1 / price).toFixed(5)} ETH
                        </Button>
                        <div className="estimateTip">about 1.00 USD</div>
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" onClick={() => sendTip((5 / price).toFixed(5))}>
                            {(5 / price).toFixed(5)} ETH
                        </Button>
                        <div className="estimateTip">about 5.00 USD</div>
                    </div>
                    {notification ? notificationError ? <div className="errorMsg">Insufficent Funds</div> : <div className="successMsg">Succesfully sent Ether</div> : null}
                </div>
            </Modal>
        </section>
    )
}