import React, { useEffect, useState } from "react";
import MediaPanel from "../../components/mediaPanel";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Background from "../../components/Background";
import PriceService from "../../services/PriceService";
import './FeedPageStyle.css';

export default function Feed() {
    const [ethPrice, setEthPrice] = useState();

    useEffect(() => {
        localStorage.setItem('prevPage', "/home");
        PriceService.getEthPrice().then(data => {
            setEthPrice(data.rate);
        });
    }, []);

    return (
        <div>
            <Background />
            <Header page={"home"} />
            <Nav page={"home"} />
            <div className="feedPage">
            
                    <MediaPanel ethPrice={ethPrice}/>
               
            </div>
        </div>
    )
}