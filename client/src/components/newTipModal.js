import React, { useEffect, useState, useContext } from 'react';
import "./newTipModalStyle.css";

export default function NewTipModal(props) {
    const [modal, setModal] = useState(false);
    
    if (modal) {
        return (
            <div>
                <img className="tipIconButton" src="https://image.flaticon.com/icons/svg/3037/3037255.svg" alt="ethereum icon" onClick={() => setModal(true)}></img>
                <div className="modalOpen">
                    <div className="tipModalBody">
                        <button onClick={() => (setModal(false))}></button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <img className="tipIconButton" src="https://image.flaticon.com/icons/svg/3037/3037255.svg" alt="ethereum icon" onClick={() => setModal(true)}></img>
        );
    }
}