import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Finder from "../../components/ContactFinder/Finder";
import history from '../../history';
import "./SendPageStyle.css";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';


export default function SendPage(props) {
    const [position, setPosition] = useState("-140vh");
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const authContext = useContext(AuthContext);


    useEffect(() => {
        setTimeout(() => {
            setPosition("73px");
        }, 60)
        getFriends();
        if (props.match.params.user) {
            console.log(props.match.params.user);
        }
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
    };

    function getFriends() {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                console.log(data.following);
            }
            else if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
    }

    function leavePage() {
        setPosition("-140vh");
    }

    return (
        <div>
            <Header page={"send"} leavePage={() => leavePage()} />
            <Background />
            <div className="outerBody">
                <div className="sendCardMain" style={style.sendCardMain}>
                    <div className="letterScroll">
                        {alphabet.map((letter) => {
                            return (
                                <Finder
                                    letter={letter}
                                    key={alphabet.indexOf(letter)}
                                    id={alphabet.indexOf(letter) + 1}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="footer">
                    <div onClick={() => history.push("/terms")}></div>
                </div>
            </div>
        </div>
    );
}