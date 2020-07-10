import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import UserService from '../../services/UserService';
import TxHistoryService from '../../services/TxHistoryService';
import TransactionDetail from "../../components/transactionDetail";
import SendEthModal from "../../components/SendEthModal";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import "./WalletPageStyle.css";
const QRCode = require('qrcode');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

function Wallet() {
    // Setting our component's initial state
    const [balance, setBalance] = useState(null);
    const [txs, setTxs] = useState([]);
    const [address, setAddress] = useState("");
    const [qrCode, setQrCode] = useState("");
    const authContext = useContext(AuthContext);

    useEffect(() => {
        getWalletInfo();
    }, [])

    function getWalletInfo() {
        UserService.getUserInfo().then(data => {
            const { message, balance } = data;
            if (!message) {
                // generate qr code based on address
                QRCode.toDataURL(data.address, function (err, url) {
                    setQrCode(url);
                })
                setAddress(data.address);
                setBalance(balance.toFixed(7));
                TxHistoryService.getTransactions(data.address).then(data2 => {
                    setTxs(data.recievedTx.concat(data.sentTx.concat(data2.result)).sort((a, b) => (a.timeStamp.toString().substring(0, 9)) - (b.timeStamp.toString().substring(0, 9))).reverse());
                });

            }
            else if (message.msgBody === "Unauthorized") {

                //Replace with middleware 
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    return (
        <div>
            <Header />
            <Nav page={"wallet"} />
            <div className="walletPage">
                <div className="walletMain">
                    <div className="walletCard">
                        <div className="walletInfo">
                            <img className="qrCode" src={"https://image.flaticon.com/icons/png/512/1289/1289889.png"} alt="qr code"></img>
                            <div className="addressBalance">
                                {/* <img className="ethlogo" src="" alt="Ethereum Logo"></img> */}
                                <h2>Ethereum Wallet</h2>
                                {/* <h2>Address: {address.toString().substring(0,15) + "..."}</h2> */}

                                <h3 className="balance">Balance: </h3>
                                <h2>{parseFloat(balance)} ETH</h2>
                            </div>
                            {/* <SendEthModal /> */}
                            <div className="walletTxCard">
                            {txs.map(tx => {
                                return <TransactionDetail
                                    amount={parseFloat((tx.value / 1000000000000000000).toFixed(6)) || tx.amount}
                                    address={address}
                                    from={tx.from}
                                    type={tx.type}
                                    to={tx.to}
                                    key={Math.random() * 10000}
                                />
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Wallet;
