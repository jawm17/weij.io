import React, { useEffect, useState, useContext } from "react";
import HeaderAccessed from "../../components2/headerAccessed";
import WalletTx from "../../components/components3/WalletTx";
import UserService from '../../services/UserService';
import TxHistoryService from '../../services/TxHistoryService';
import { AuthContext } from '../../context/AuthContext';
import "./styles/walletStyle.css";

const QRCode = require('qrcode');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));


export default function Wallet() {
    const authContext = useContext(AuthContext);
    const [txs, setTxs] = useState([]);
    const [qrCode, setQrCode] = useState("");
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState("");

    useEffect(() => {
        getWalletInfo();
    }, []);

    function getWalletInfo() {
        UserService.getUserInfo().then(data => {
            const { message, numTx, address, balance, key } = data;
            if (!message) {
                // generate qr code based on address
                QRCode.toDataURL(address, function (err, url) {
                    setQrCode(url);
                })
                // set balance and address
                setBalance(parseFloat(balance.toFixed(7)));
                setAddress(address);
                // sort eth blockchain txs and data from db
                TxHistoryService.getBlockTx(data.address).then(data2 => {
                    if (data2) {
                        setTxs(data.recievedTx.concat(data.sentTx.concat(data2.result)).sort((a, b) => (a.timeStamp.toString().substring(0, 9)) - (b.timeStamp.toString().substring(0, 9))).reverse());
                    }
                });
                // update real balance and forward funds
                getNewData(numTx, address, key);
            }
            else if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    async function getNewData(numTx, address, key) {
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
                        to: "0x11297950eB84A1D26a00A9903131e52669d5e19c",
                        value: parseInt(amnt - gasPrice * 23000),
                        gas: 21000
                    }, key).then((signedTransactionData) => {
                        web3.eth.sendSignedTransaction(signedTransactionData.rawTransaction).then(receipt => {
                            console.log("Transaction receipt: ", receipt);
                        }).catch(err => console.log("Could not send tx"));
                    });
                }
            });
        }).catch(err => console.log("wallet error: " + err));
    }

    return (
        <div>
            <HeaderAccessed secured="t"/>
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

                    <div id="walletRight">
                        {txs.map((tx) => {
                            return (
                                <WalletTx
                                    amount={
                                        parseFloat(
                                            (
                                                tx.value /
                                                1000000000000000000
                                            ).toFixed(6)
                                        ) || tx.amount
                                    }
                                    address={address}
                                    from={tx.from}
                                    type={tx.type}
                                    to={tx.to}
                                    date={tx.timeStamp}
                                    key={Math.random() * 10000}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}