import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import "./SendPageStyle.css";

export default function SendPage() {
    const [position, setPosition] = useState("-100vh");

    useEffect(() => {
        setTimeout(() => {
            setPosition("80px");
        }, 60)
    }, []);


    const style = {
        sendCardMain: {
            position: "fixed",
            top: position,
            height: "calc(100vh - 130px)",
            width: "95vw",
            maxWidth: 540,
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            borderRadius: 10,
            backgroundColor: "white",
            transition: "all 0.3s ease-in-out"
        }
    }

    return (
        <div>
            <Header page={"send"} />
            <Background />
            <div className="outerBody">
                <div className="sendCardMain" style={style.sendCardMain}>
                </div>
            </div>
        </div>
    );
}