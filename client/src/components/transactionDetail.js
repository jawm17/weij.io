import React, { useEffect, useState } from "react";
import "./transactionDetailStyle.css";

export default function TransactionDetail(props) {
    const [txText, setTxText] = useState("");

    useEffect(() => {
        // transaction is a db tx
        if (props.type) {
            if (props.from) {
                setTxText(`Recieved a ${props.amount} ${props.type} from ${props.from}`);
            } else {
                setTxText(`Sent a ${props.amount} ${props.type} to ${props.to}`);
            }
        } else {
            if (props.address.toUpperCase() === props.to.toUpperCase()) {
                setTxText(`Recieved ${props.amount} ETH from ${props.from}`);
            }
        }
    }, []);

    return (
        <div>
            {txText ?
                <div>
                    <div className="detail">
                        {txText}
                    </div> <hr></hr>
                </div>
                : null}
        </div>
    );
}