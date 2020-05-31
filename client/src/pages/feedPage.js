import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import MediaPanel from "../components/mediaPanel";
import SearchPanel from "../components/searchPanel/SearchPanel";
import './feedPageStyle.css'

function Feed() {
    const [onSearch, setOnSearch] = useState(false);

    document.body.className=("color-blue");
    function revealSearch() {
        setOnSearch(true);
    }

    function revealHome() {
        setOnSearch(false);
        console.log("rr")
    }

    return (
        <div className="feedPage">
            <div className="feedDiv">
                <div className="leftPanel">
                    <div>
                        <div className="card panel nav">
                            <div className="container">
                                <a onClick={() => revealHome()} className="btn"><h3>Home</h3></a>
                                <a href="/profile" className="btn"><h3>Profile</h3></a>
                                <a onClick={() => revealSearch()} className="btn"><h3>Search</h3></a>
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
                </div>


                <div className="mediaPanel">
                    {onSearch ? <SearchPanel /> : <MediaPanel />}
                </div>
            </div>
        </div>
    )
}

export default Feed;