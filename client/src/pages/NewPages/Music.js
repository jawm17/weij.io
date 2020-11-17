import React from "react";
import HeaderBlue from '../../components2/HeaderBlue';

export default function() {
    const style = {
        bg : {
            width: "100vw",
            height: "100vh",
            position: "fixed",
            backgroundColor:  "#01CBFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        messageBody: {
            fontWeight: "bold",
            color: "white"
        }
    }
    
    return (
        <div>
        <HeaderBlue />
        <div style={style.bg} className="bluebg">
            <div style={style.messageBody}>
                This site is coming soon!
            </div>
        </div>
        </div>
    );
}