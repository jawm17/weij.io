import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import TransactionService from '../../../services/TransactionService';
import UserService from '../../../services/UserService';
import "./lockedMediaStyle.css";

export default function LockedMedia(props) {
    const authContext = useContext(AuthContext);
    const [height, setHeight] = useState(600);
    const [purchaseInit, setPurchaseInit] = useState(false);

    useEffect(() => {
        getDimensions();
    }, []);

    const style = {
        lockedImg: {
            height: "calc(100vh - 200px)",
            // maxHeight: "73vh",
            // maxWidth: "95vw"
        }
    };

    const getDimensions = () => {
        var img = new Image();
        img.onload = function () {
            setHeight((this.height / this.width) * 540);
        }
        img.src = props.imgUrl;
    };

    function unlockPhoto() {
        if (purchaseInit) {
            UserService.getUserInfo().then(data => {
                if (data.balance >= props.price) {
                    TransactionService.unlockTx(props.price, props.username, authContext.user.username, props.id, data.id).then(data2 => {
                        console.log(data2);
                        props.updatePaywall();
                    })
                } else {
                    //insufficient funds
                }
            })
        } else {
            setPurchaseInit(true);
        }
    }

    return (
        <div className="lockedMediaBody" style={style.lockedImg}>
            <div className="infoArea">
                <p className="infoText">This image costs {props.price} ETH to unlock.</p>
                {purchaseInit ? <p className="">Are you sure? <button className="button3" onClick={() => unlockPhoto()}>Yes</button> <button className="button3" onClick={() => setPurchaseInit(false)}>No</button></p> : <button className="button3" onClick={() => unlockPhoto()}>Unlock</button>}
            </div>
        </div>
    );
}