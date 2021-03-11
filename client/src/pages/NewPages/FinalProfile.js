import React, {useEffect, useState} from "react";
import "./styles/profileStyle.css";
import HeaderAccessed from "../../components2/headerAccessed";

export default function FinalProfile() {
    const [hero, setHero] = useState("https://i.ytimg.com/vi/h67BfDOz2EE/maxresdefault.jpg");

    // useEffect(() => {
    //    setHero("");
    // });

    const style = {
        hero: {
            backgroundImage: `url(${hero})`,
        }
    }


    return (
        <div>
            <HeaderAccessed secured="t"/>
            <div id="profilePage">
            <div id="profileHero" style={style.hero}>

            </div>
            <div id="profileInfo">
                <div id="centerArea">
                    <div>
                        <img id="profilePhoto" src="https://avatars3.githubusercontent.com/u/56066513?s=460&u=2724432d8929c333aea5ea6751128b6db55c747e&v=4" alt="profile avatar"></img>
                        <div id="username">
                            jawm42
                        </div>
                        <div id="profileStats">
                            <div id="followerStats">
                                200 followers    
                            </div>
                            <div id="space">

                            </div>
                            <div>
                                3.304 eth earned
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}