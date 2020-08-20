import React, { useEffect, useState } from "react";
import "./transactionDetailStyle.css";

export default function TransactionDetail(props) {
    const [txText, setTxText] = useState("");

    useEffect(() => {
        // transaction is a db tx
        if (props.type === "tip") {
            if (props.from) {
                setTxText(`Recieved a ${props.amount} ${props.type} from ${props.from}`);
            } else {
                setTxText(`Sent a ${props.amount} ${props.type} to ${props.to}`);
            }
        } else if (props.type === "unlock") {
            if (props.from) {
                setTxText(`${props.from} unlocked your photo for ${props.amount} ETH`);
            } else {
                setTxText(`Unlocked ${props.to}'s photo for ${props.amount} ETH`);
            }
        }
        else {
            if (props.address.toUpperCase() === props.to.toUpperCase()) {
                setTxText(`Recieved ${props.amount} ETH from ${props.from}`);
            }
        }
    }, []);

    if(txText) {
        return (
            <div>
                <hr></hr>
                <div className="detail">
                    {txText}
                    <div className="date">
                        {props.date}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}