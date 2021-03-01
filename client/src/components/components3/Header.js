import React, { useEffect, useState } from "react";
import history from '../../history';
import "./styles/headerStyle.css";

export default function Header(props) {
    const [home, setHome] = useState(false);
    const [wallet, setWallet] = useState(false);
    const [send, setSend] = useState(false);
    const [profile, setProfile] = useState(false);


    useEffect(() => {
        if (props.page === "home") {
            setHome(true);
        } else if (props.page === "profile") {
            setProfile(true);
        } else if (props.page === "send") {
            setSend(true);
        } else if (props.page === "wallet") {
            setWallet(true);
        }
    });

    return (
        <div id="bodyHeader">
            <div id="headerArea">
                <div id="logo" className="relativeOuter" onClick={() => window.location.href = "/"}>
                    weij.io
                </div>
                <div id="searchBar">

                </div>
                <div id="headerRight">
                    <div className="relativeOuter">
                        <img src={home ? "https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/home2.png?alt=media&token=dd271323-9bc6-482e-b228-4ccb2b8c554c" : "https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/homeEmpty.png?alt=media&token=e89e81fd-4f26-46ce-97b5-91a5295fbbc7"} id="homeIcon" className="headerIcon" onClick={() => history.push("/")}></img>
                        <div className="blueLine" id="blueHome" style={home ? { "display": "initial" } : { "display": "none" }}>

                        </div>
                    </div>
                    <div className="relativeOuter">
                        <img src={send ? "https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/sendFull.png?alt=media&token=501f807c-3ead-4539-bb30-42ec2dc85b06" : "https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/in2.png?alt=media&token=815ade2b-76cf-4ee1-b420-435c65fb850b"} className="headerIcon" onClick={() => history.push("/send")}></img>
                        <div id="notif">

                        </div>
                        <div className="blueLine" id="blueSend" style={send ? { "display": "initial" } : { "display": "none" }}>

                        </div>
                    </div>
                    <div className="relativeOuter">
                        <img src={wallet ? "https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/walletFull.png?alt=media&token=0d34285b-6f0d-41d3-8d32-73fce260fd6c" : "https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/wallet2.png?alt=media&token=bebf1983-0453-4740-b297-c23b94ad7a6c"} className="headerIcon" onClick={() => history.push("/wallet")}></img>
                        <div id="notif">

                        </div>
                        <div className="blueLine" id="blueWallet" style={wallet ? { "display": "initial" } : { "display": "none" }}>

                        </div>
                    </div>
                    <div className="relativeOuter">
                        <img src="https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4" className="profileHeader" onClick={() => history.push("/profile")}></img>
                        <div className="blueLine" id="blueProfile" style={profile ? { "display": "initial" } : { "display": "none" }}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}