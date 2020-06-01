import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import UserService from '../services/UserService';
import TransactionService from '../services/TransactionService';
import TransactionDetail from "../components/transactionDetail";
import SendEthModal from "../components/SendEthModal";
import Button from '@material-ui/core/Button';
import "./walletPageStyle.css";
const QRCode = require('qrcode');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

function Wallet() {
    // Setting our component's initial state
    const [balance, setBalance] = useState(null);
    const [txs, setTxs] = useState([]);
    const [address, setAddress] = useState();
    const [key, setKey] = useState("");
    const authContext = useContext(AuthContext);
    let isLoaded = false;

    document.body.className = ("color-blue");

    useEffect(() => {
        getWalletInfo();
        QRCode.toDataURL('0x1C3BC05C4cD2902FFbF20e3b87A2cc9d793Fc42B', function (err, url) {
            console.log(url)
        })
    }, [])

    function getTransactions(address) {
        TransactionService.getTransactions(address).then(data => {
            console.log(data);
            setTxs(data.result.reverse());
        })
    }

    function getWalletInfo() {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                setAddress(data.address);
                getBalance(data.address);
                getTransactions(data.address);
            }
            else if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    function sendEther() {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                web3.eth.accounts.signTransaction({
                    to: '0x1C3BC05C4cD2902FFbF20e3b87A2cc9d793Fc42B',
                    value: '1000000000000000000',
                    gas: 2000000
                }, data.key)
                    .then((signedTransactionData) => {
                        web3.eth.sendSignedTransaction(signedTransactionData.rawTransaction).then(receipt => console.log("Transaction receipt: ", receipt))
                            .catch(err => console.error(err));
                    });
            }
            else if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    function getBalance(addressParam) {
        if (addressParam) {
            web3.eth.getBalance(addressParam)
                .then((res) => {
                    setBalance(res / 1000000000000000000)
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
        <a className="arrowATag" href="/home"><img className="backArrow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Feather-arrows-arrow-left.svg/768px-Feather-arrows-arrow-left.svg.png" alt="back arrow button"></img></a>
        <div className="walletMainOuter">
            <div className="walletMain">
                <div className="walletInfoCard panel">
                    <div className="substance">
                    <h2>Address: {address}</h2>
                    <h3>Balance: {balance} ETH</h3>
                    <SendEthModal />
                    </div>
                </div>
                <div className="walletTxCard panel">
                    {txs.map(tx => (
                        <TransactionDetail
                            amount={parseFloat((tx.value / 1000000000000000000).toFixed(6))}
                            address={address}
                            from={tx.from}
                            to={tx.to}
                            key={tx.cumulativeGasUsed + Math.random() * 10000}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}


export default Wallet;
