import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import UserService from '../services/UserService';
const QRCode = require('qrcode');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

function Wallet() {
    // Setting our component's initial state
    const [balance, setBalance] = useState(null)
    const [username, setUsername] = useState(null);
    const [address, setAddress] = useState();
    const [key, setKey] = useState("");
    const authContext = useContext(AuthContext);
    let isLoaded = false;


    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    useEffect(() => {
        getWalletInfo();
        QRCode.toDataURL('0x1C3BC05C4cD2902FFbF20e3b87A2cc9d793Fc42B', function (err, url) {
            console.log(url)
          })
    }, [])

    function getWalletInfo() {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                setAddress(data.address);
                getBalance(data.address);
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
                const ex = web3.eth.accounts.privateKeyToAccount(data.key);
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
            <button onClick={() => getBalance(address)}>Update Balance</button>
            <button onClick={() => sendEther()}>Send Ether</button>
            <h1>Address: {address}</h1>
            <h3>Balance: {balance}</h3>
        </div>
    );
}


export default Wallet;
