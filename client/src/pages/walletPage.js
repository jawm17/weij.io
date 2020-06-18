import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import UserService from '../services/UserService';
import TxHistoryService from '../services/TxHistoryService';
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
    const authContext = useContext(AuthContext);

    document.body.className = ("color-blue");

    useEffect(() => {
        getWalletInfo();
        QRCode.toDataURL('0x1C3BC05C4cD2902FFbF20e3b87A2cc9d793Fc42B', function (err, url) {
            console.log(url)
        })
    }, [])

    function getTransactions(address) {
        TxHistoryService.getTransactions(address).then(data => {
            setTxs(data.result.reverse());
        })
    }

    function getWalletInfo() {
        UserService.getUserInfo().then(data => {
            const { message, balance } = data;
            if (!message) {
                setAddress(data.address);
                getTransactions(data.address);
                setBalance(balance / 1000000000000000000);
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
                        {txs.map(tx => {
                            if (tx.to !== "0x1c3bc05c4cd2902ffbf20e3b87a2cc9d793fc42b") {
                                return <TransactionDetail
                                    amount={parseFloat((tx.value / 1000000000000000000).toFixed(6))}
                                    address={address}
                                    from={tx.from}
                                    to={tx.to}
                                    key={tx.cumulativeGasUsed + Math.random() * 10000}
                                />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Wallet;
