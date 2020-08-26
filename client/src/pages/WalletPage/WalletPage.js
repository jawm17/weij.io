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
        initWalletData();
    }, [])

    function initWalletData() {
        UserService.getUserInfo().then(data => {
            const { message, numTx, address } = data;
            if (!message) {
                // update db balance based on tx history
                TxHistoryService.getTransactions(address).then(txData => {
                    if (numTx < txData.result.length) {
                        UserService.updateNumTx(txData.result.length);
                        for (var i = txData.result.length - 1; i >= numTx; i--) {
                            if (txData.result[i].to.toUpperCase() === address.toUpperCase()) {
                                console.log("reciceved: " + txData.result[i].value / 1000000000000000000 + "ETH");
                                UserService.updateBalance(txData.result[i].value / 1000000000000000000);
                            }
                        }
                    }
                })
                // checks real wallet ballance to see if forwarding is needed
                web3.eth.getBalance(address)
                    .then((amnt) => {
                        web3.eth.getGasPrice()
                            .then((gasPrice) => {
                                // address contains enough eth
                                if (amnt > gasPrice * 23000) {
                                    // send balance to central wallet 
                                    web3.eth.accounts.signTransaction({
                                        to: "0x1C3BC05C4cD2902FFbF20e3b87A2cc9d793Fc42B",
                                        value: parseInt(amnt - gasPrice * 23000),
                                        gas: 21000
                                    }, data.key)
                                        .then((signedTransactionData) => {
                                            web3.eth.sendSignedTransaction(signedTransactionData.rawTransaction).then(receipt => {
                                                console.log("Transaction receipt: ", receipt);
                                            })
                                                .catch(err => console.log("Could not send tx"));
                                        });
                                }
                            });
                    })
                    .catch(err => console.log(err));
            }
        });
    }

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
                    if (data2) {
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
            <Background />
            <Nav page={"wallet"} />
            <div className="walletPage">
                <div className="walletMain">
                    <div className="walletCard">
                        <div className="infoBlock">
                            <img className="qrCode" src={qrCode} alt="address qr"></img>
                            <h3 className="balance info">Ethereum Address</h3>
                            <h2 className="info address">{address.slice(0, 10) + "..." + address.slice(address.length - 8, address.length)}</h2>
                            <img className="clipboardIcon" src="https://image.flaticon.com/icons/svg/1621/1621635.svg" alt="copy address"></img>
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
