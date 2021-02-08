import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/components3/Header";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import "./styles/walletStyle.css";
const QRCode = require('qrcode');


export default function Wallet() {
    const authContext = useContext(AuthContext);
    const [qrCode, setQrCode] = useState("");
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState("");

    useEffect(() => {
        walletInit();
    });

    function walletInit() {
        UserService.getUserInfo().then(data => {
            if (!data.message) {
                // generate qr code based on address
                QRCode.toDataURL(data.address, function (err, url) {
                    setQrCode(url);
                })
                setBalance(data.balance);
                setAddress(data.address);
            }
            else if (data.message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }
    
    return (
        <div>
            <Header page="wallet"/>
            <div id="walletOuter">
                <div id="walletMain">
                    <div id="walletLeft">
                        <div id="qrContainer">
                            <img id="qrImg" src={qrCode}></img>
                        </div>
                        {/* <div id="address">
                            {address.slice(0,20)}...
                        </div> */}
                        <div id="balance">
                            Balance: {balance} ETH
                        </div>
                        <div id="btnContainer">
                            <div className="walletBtn">
                                send
                            </div>
                            <div className="walletBtn">
                                recieve
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}