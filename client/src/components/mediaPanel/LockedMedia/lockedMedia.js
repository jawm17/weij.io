import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import TransactionService from '../../../services/TransactionService';
import UserService from '../../../services/UserService';
import "./lockedMediaStyle.css";

export default function LockedMedia(props) {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log();
    }, []);

    var style = {
        lockedImg: {
            height: props.height,
            maxHeight:"600px",
            maxWidth: "90vw"
        }
    };

    function unlockPhoto(){
        UserService.getUserInfo().then(data => { 
            if(data.balance >= props.price) {
                TransactionService.unlockTx(props.price, props.username, authContext.user.username, props.id, data.id).then(data2 => {
                    console.log(data2);
                    props.updatePaywall();
                })
            } else {
                //insufficient funds
            }
        })
    }

    return (
        <div className="lockedMediaBody" style={style.lockedImg}>
            <div className="infoArea">
            <p className="infoText">This image costs {props.price} ETH to unlock.</p>
            <button className="button3" onClick={() => unlockPhoto()}>Unlock</button>
            </div>
        </div>
    );
}