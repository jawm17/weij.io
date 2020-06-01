import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import UserService from '../services/UserService';
import TransactionService from '../services/TransactionService';
import "./transactionDetailStyle.css";

export default function TransactionDetail(props) {
    const [recieved, setRecieved] = useState();
    console.log(props);

    useEffect(() => {
        if (props.address.toUpperCase() === props.to.toUpperCase()) {
            setRecieved(true);
        } else {
            setRecieved(false);
        }
        // TransactionService.getUserFromAdress(props.address).then(data => {
        //     console.log(data);
        // })
    }, [])

    return (
        <div>
            {recieved ?
                <div className="detail">
                    Recieved {props.amount} ETH from {props.from}
                </div>
                :
                <div className="detail">
                    Sent {props.amount} ETH to {props.to}
                </div>}
                <hr></hr>
        </div>
    );
}