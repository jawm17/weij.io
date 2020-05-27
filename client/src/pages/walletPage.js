import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ee2cbc278b5442dfbd27dedb4806c237"));

function Wallet() {
    // Setting our component's initial state
    const [balance, setBalance] = useState(null)
    const [username, setUsername] = useState(null);
    const [address, setAddress] = useState();
    const [key, setKey] = useState(null)
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const authContext = useContext(AuthContext);
    let isLoaded = false;

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    useEffect(() => {
        getWalletInfo();
        web3.eth.net.getNetworkType()
        .then(console.log);
    }, [])

    function getWalletInfo() {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                setAddress(data.address);
                getBalance(data.address);
                isLoaded = true;
                setKey(data.key);
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
            <h1>Address: {address}</h1>
            <h3>Balance: {balance}</h3>
        </div>
    );
}


export default Wallet;
