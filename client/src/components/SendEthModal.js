import React, { useState, useContext, useRef } from 'react';
import Modal from 'react-awesome-modal';
import { AuthContext } from '../context/AuthContext';
import Button from '@material-ui/core/Button';
import "./TipModalStyle.css";
import PriceService from "../services/PriceService";
import UserService from '../services/UserService';
import "./SendEthModalStyle.css";
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

export default function TipModal(props) {
    const [visible, setVisible] = useState(props.visible);
    const [price, setPrice] = useState();
    const [notification, setNotification] = useState("");
    const [notificationError, setNotificationError] = useState();
    const [amount, setAmount] = useState();
    const [address, setAddress] = useState();
    const authContext = useContext(AuthContext);
    let timerID = useRef(null);

    const openModal = () => {
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false);
    }

    const sendEth = () => {
        if (amount && address) {
            UserService.getUserInfo().then(data => {
                const { message } = data;
                if (!message) {
                    web3.eth.getBalance(data.address)
                        .then((res) => {
                            if (amount < (res / 1000000000000000000)) {
                                if (!message) {
                                    web3.eth.accounts.signTransaction({
                                        to: address,
                                        value: parseInt(amount * 1000000000000000000),
                                        gas: 2000000
                                    }, data.key)
                                        .then((signedTransactionData) => {
                                            web3.eth.sendSignedTransaction(signedTransactionData.rawTransaction).then(receipt => console.log("Transaction receipt: ", receipt))
                                                .catch(err => console.error(err));
                                        });
                                }
                                setNotification("Succesfully sent Ether");
                                setNotificationError(false);
                                timerID = setTimeout(() => {
                                    setNotification("");
                                    closeModal();
                                }, 1500)

                            } else {
                                setNotification("Insufficent Funds");
                                setNotificationError(true);
                                timerID = setTimeout(() => {
                                    setNotification("");
                                    setNotificationError(false);
                                }, 1500)
                            }
                        })
                        .catch(err => console.log(err));
                }
                else if (message.msgBody === "Unauthorized") {
                    authContext.setUser({ username: "" });
                    authContext.setIsAuthenticated(false);
                }
            });
        } else {
            setNotification("You must enter an address and amount");
            setNotificationError(true);
            timerID = setTimeout(() => {
                setNotification("");
                setNotificationError(false);
            }, 1500)
        }
    }

    const onAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const onAmountChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <section>
            <div className="sendModal">
                <Button variant="contained" color="primary" onClick={() => openModal()}>
                    Send
            </Button>
            </div>
            <Modal
                visible={visible}
                width="400"
                height="230"
                effect="fadeInDown"
                onClickAway={() => closeModal()}
            >
                <div className="tipArea">
                    <h1 className="tipTitle">Send Ethereum</h1>
                    <div className="tipButtons">
                        <textarea
                            name="message"
                            rows="4" cols="52"
                            placeholder="address"
                            onChange={onAddressChange}
                            value={address}
                        />
                        <input
                            name="amount"
                            placeholder="amount"
                            onChange={onAmountChange}
                            value={amount}
                        />
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" onClick={() => sendEth()}>
                            Send {amount} ETH
                        </Button>
                    </div>
                    {notification ? notificationError ? <div className="errorMsg">{notification}</div> : <div className="successMsg">Succesfully sent Ether</div> : null}
                </div>
            </Modal>
        </section>
    )
}