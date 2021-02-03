import React from "react";
import history from '../../history';
import "./styles/headerStyle.css";

export default function Header() {

    return (
        <div id="bodyHeader">
            <div id="headerArea">
                <div id="logo" className="relativeOuter" onClick={() => window.location.href = "/"}>
                    weij.io
                </div>
                <div id="headerRight">
                    <div className="relativeOuter">
                        <img src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/home2.png?alt=media&token=dd271323-9bc6-482e-b228-4ccb2b8c554c" id="homeIcon" className="headerIcon" onClick={() => history.push("/")}></img>
                        <div className="blueIcon">

                        </div>
                    </div>
                    <div className="relativeOuter">
                        <img src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/in2.png?alt=media&token=815ade2b-76cf-4ee1-b420-435c65fb850b" className="headerIcon"></img>
                        <div id="notif">

                        </div>
                    </div>
                    <div className="relativeOuter">
                        <img src="https://firebasestorage.googleapis.com/v0/b/weij-c2efd.appspot.com/o/wallet2.png?alt=media&token=bebf1983-0453-4740-b297-c23b94ad7a6c" className="headerIcon"></img>
                        <div id="notif">

                        </div>
                    </div>
                    <div className="relativeOuter">
                        <img src="https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4" className="profileHeader" onClick={() => history.push("/profile")}></img>

                    </div>
                </div>
            </div>
        </div>
    );
}