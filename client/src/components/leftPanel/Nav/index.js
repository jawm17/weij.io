import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

    render() {
        return (
            <div>
                <div className="card panel nav">
                    <div className="container">
                        <h4>Home</h4>
                        <a href="/profile"><h4>Profile</h4></a>
                        <h4>Discover</h4>
                    </div>
                </div>
                <div className="card panel wallet">
                    <a href="/wallet" className="walletBtn">
                    <div className="container">
                        <img className="ethlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8-CIGjYQCnoGOF87dKB8owCEpnkUiiWEy27e6lcA8abx1v-rG&usqp=CAU" alt="Ethereum Logo"></img>
                        <h3 className="walletText">13.00562 ETH</h3>
                    </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;
