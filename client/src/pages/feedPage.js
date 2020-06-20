import React, { useEffect, useState, useContext } from "react";
import MediaPanel from "../components/mediaPanel";
import SearchPanel from "../components/searchPanel/SearchPanel";
import TxHistoryService from '../services/TxHistoryService';
import UserService from '../services/UserService';
import './feedPageStyle.css';
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

function Feed() {
    const [onSearch, setOnSearch] = useState(false);
    const [balance, setBalance] = useState(0);

    document.body.className = ("color-blue");

    useEffect(() => {
        initWalletData();
        getBalance();
    }, []);

    function revealSearch() {
        setOnSearch(true);
    }

    function revealHome() {
        setOnSearch(false);
    }

    function getBalance() {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                // set display balance to balance in db
                setBalance(data.balance.toFixed(7));
            }
        })
    }

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

    return (
        <div className="feedPage">
            <div className="feedDiv">
                <div className="leftPanel">
                    <div>
                        <div className="card panel nav">
                            <div className="container">
                                <a onClick={() => revealHome()} className="btn"><h3>Home</h3></a>
                                <a href="/profile" className="btn"><h3>Profile</h3></a>
                                <a onClick={() => revealSearch()} className="btn"><h3>Search</h3></a>
                            </div>
                        </div>
                        <div className="card panel wallet">
                            <a href="/wallet" className="walletBtn">
                                <div className="container">
                                    <img className="ethlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8-CIGjYQCnoGOF87dKB8owCEpnkUiiWEy27e6lcA8abx1v-rG&usqp=CAU" alt="Ethereum Logo"></img>
                                    <h3 className="walletText">{parseFloat(balance)} ETH</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="mediaPanel">
                    {onSearch ? <SearchPanel /> : <MediaPanel getBalance={() => getBalance()} />}
                </div>
            </div>
        </div>
    )
}

export default Feed;