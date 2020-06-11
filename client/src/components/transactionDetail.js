import React, { useEffect, useState } from "react";
import "./transactionDetailStyle.css";

export default function TransactionDetail(props) {
    const [recieved, setRecieved] = useState();

    useEffect(() => {
        if (props.address.toUpperCase() === props.to.toUpperCase()) {
            setRecieved(true);
        } else {
            setRecieved(false);
        }
    }, []);

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