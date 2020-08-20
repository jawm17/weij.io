import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import UserService from '../../services/UserService';
import TxHistoryService from '../../services/TxHistoryService';
import TransactionDetail from "../../components/transactionDetail";
import SendEthModal from "../../components/SendEthModal";
import Background from "../../components/Background";
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
        localStorage.setItem('prevPage', `/wallet`);
        getWalletInfo();
        navigator.permissions.query({name: "clipboard-write"}).then(result => {
            if (result.state == "granted" || result.state == "prompt") {
                navigator.clipboard.writeText("address").then(function() {
                    console.log("success")
                  }, function() {
                    return;
                  });
            }
          });
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
                    if(data2) {
                        setTxs(data.recievedTx.concat(data.sentTx.concat(data2.result)).sort((a, b) => (a.timeStamp.toString().substring(0, 9)) - (b.timeStamp.toString().substring(0, 9))).reverse());
                    }
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
            <Background/>
            <Nav page={"wallet"} />
            <div className="walletPage">
                <div className="walletMain">
                    <div className="walletCard">
                    <img className="qrCode" src={qrCode} alt="address qr"></img>
                      <div className="infoBlock">
                            <h3 className="balance info">Ethereum Address</h3>
                            <h2 className="info">{address.slice(0,20)}...</h2>
                            <h3 className="balance info">Balance</h3>
                            <h2 className="info">{parseFloat(balance)} ETH</h2>
                            </div>
                        {/* <SendEthModal /> */}
                        <div className="txHistory">
                            {txs.map(tx => {
                                return <TransactionDetail
                                    amount={parseFloat((tx.value / 1000000000000000000).toFixed(6)) || tx.amount}
                                    address={address}
                                    from={tx.from}
                                    type={tx.type}
                                    to={tx.to}
                                    date={tx.timeStamp}
                                    key={Math.random() * 10000}
                                />
                            })}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Wallet;
