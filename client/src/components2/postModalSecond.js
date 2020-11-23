import React, {useEffect} from 'react';
import "./modalSecondStyle.css";

export default function PostModalSecond(props) {


    function back() {
        document.getElementById("modalSecond").style.display = "none";
        document.getElementById("whiteFirst").style.display = "initial";
    }

    return (
        <div id="modalSecond" style={{"display": "none"}}>
            <div id="whiteSecond">
                <div id="banner">
                    <p id="bannerText">Upload Video</p>
                </div>
               
                <div id="back" onClick={() => back()}>back</div>
                <button id="forward" onClick={() => console.log()}>next</button>
            </div>
        </div>
    );
}