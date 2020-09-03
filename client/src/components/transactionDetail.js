import React, { useEffect, useState } from "react";
import "./transactionDetailStyle.css";

export default function TransactionDetail(props) {
    const [txText, setTxText] = useState("");
    const [date, setDate] = useState(0);

    useEffect(() => {
        checkTx();
        setDate(props.date);
    }, []);

    function checkTx() {
        // check tx type
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
    }

    function setDate(date) {
        // set date
        if (date.length === 10) {
            let adjustedDate = parseInt(date + "000");
            let time = new Date(adjustedDate);
            setDate(time);
        } else {
            let time = new Date(date);
            setDate(time);
        }
    }

    if (txText) {
        return (
            <div>
                <hr></hr>
                <div className="detail">
                    {txText}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/1024px-Ski_trail_rating_symbol-green_circle.svg.png" className="colors"></img>
                    <div className="date">
                        {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}