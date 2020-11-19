import React from "react";
import HeaderGreen from '../../components2/headerGreen';

export default function() {
    const style = {
        bg : {
            width: "100vw",
            height: "100vh",
            position: "fixed",
            backgroundColor:  "#5DE900",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        messageBody: {
            marginTop: 45,
            fontWeight: "bold",
            color: "white"
        }
    }
    
    return (
        <div>
        <HeaderGreen />
        <div style={style.bg} className="bluebg">
            <div style={style.messageBody}>
                This site is coming 2021!
            </div>
        </div>
        </div>
    );
}