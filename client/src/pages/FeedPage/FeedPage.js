import React, { useEffect, useState } from "react";
import MediaPanel from "../../components/mediaPanel";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Background from "../../components/Background";
import TxHistoryService from '../../services/TxHistoryService';
import UserService from '../../services/UserService';
import './FeedPageStyle.css';
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

function Feed() {
    const [onSearch, setOnSearch] = useState(false);

    useEffect(() => {
        initWalletData();
    }, []);

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
        <div>
            <Background />
            <Header />
            <Nav page={"home"} />
            <div className="feedPage">
                <div className="feedDiv">
                    <div className="mediaPanel">
                        <MediaPanel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;