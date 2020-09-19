import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import UserService from '../../services/UserService';
import TxHistoryService from '../../services/TxHistoryService';
import TransactionDetail from "../../components/transactionDetail";
// import SendEthModal from "../../components/SendEthModal";
import Background from "../../components/Background";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import "./WalletPageStyle.css";
import ClipButton from "../../components/ClipButton";
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
        // par of send page return function
        localStorage.setItem('prevPage', `/wallet`);
        getWalletInfo();
        initWalletData();
    }, [])

    function initWalletData() {
        UserService.getUserInfo().then(data => {
            const { message, numTx, address } = data;
            if (!message) {
                // update db balance based on blockchain history from etherscan api
                TxHistoryService.getBlockTx(address).then(blockData => {
                    // if there are more txs on user's blockchain address than numTx (db)
                    if (numTx < blockData.result.length) {
                        // update db variable to new blockchain tx count
                        UserService.updateNumTx(blockData.result.length);
                        // loop through each new tx and update balance if recieved
                        for (var i = blockData.result.length - 1; i >= numTx; i--) {
                            if (blockData.result[i].to.toUpperCase() === address.toUpperCase()) {
                                console.log("reciceved: " + blockData.result[i].value / 1000000000000000000 + "ETH");
                                UserService.updateBalance(blockData.result[i].value / 1000000000000000000);
                            }
                        }
                    }
                })
                // checks real wallet ballance to see if forwarding is needed
                web3.eth.getBalance(address).then((amnt) => {
                    web3.eth.getGasPrice().then((gasPrice) => {
                        // address contains enough eth
                        if (amnt > gasPrice * 23000) {
                            // send balance to central wallet 
                            web3.eth.accounts.signTransaction({
                                to: "0x7B42Ee76D570c13eded96053E0042a77e944bF7d",
                                value: parseInt(amnt - gasPrice * 23000),
                                gas: 21000
                            }, data.key).then((signedTransactionData) => {
                                web3.eth.sendSignedTransaction(signedTransactionData.rawTransaction).then(receipt => {
                                    console.log("Transaction receipt: ", receipt);
                                }).catch(err => console.log("Could not send tx"));
                            });
                        }
                    });
                }).catch(err => console.log("@@@wallet page + " + err));
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
                // sort eth blockchain txs and data from db
                TxHistoryService.getBlockTx(data.address).then(data2 => {
                    if (data2) {
                        setTxs(data.recievedTx.concat(data.sentTx.concat(data2.result)).sort((a, b) => (a.timeStamp.toString().substring(0, 9)) - (b.timeStamp.toString().substring(0, 9))).reverse());
                    }
                });
                // do this
                setAddress(data.address);
                setBalance(balance.toFixed(7));
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
                            <h3 className="addressLabel">Ethereum Address</h3>
                            <h2 className="address">{address.slice(0, 10) + "..." + address.slice(address.length - 8, address.length)}</h2>
                            <ClipButton address={address} />
                            {/* <h3 className="balanceLabel">Balance</h3> */}
                            <h2 className="balance">{parseFloat(balance)} ETH</h2>
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
