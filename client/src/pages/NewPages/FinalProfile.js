import React, { useEffect, useState } from "react";
import "./styles/profileStyle.css";
import HeaderAccessed from "../../components2/headerAccessed";
import ProfileMediaArea from "../../components2/profileMediaArea";

export default function FinalProfile() {
    const [hero, setHero] = useState("https://i.ytimg.com/vi/h67BfDOz2EE/maxresdefault.jpg");
    const [media, setMedia] = useState("video");

    useEffect(() => {
        setHero("https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg");
    });

    const style = {
        hero: {
            backgroundImage: `url(${hero})`,
        },
        switcherOn: {

        },
        switcherOff: {

        }
    }




    return (
        <div>
            <HeaderAccessed secured="t" />
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
                                    1402 following
                                </div>
                            </div>
                            <div id="ethEarnedLabel">
                                3.304 eth earned
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mediaSwitcher">
                    <div className={media === "video" ? "selectedTab" : "notSelectedTab"} onClick={() => setMedia("video")}>
                        videos
                    </div>
                    <div className={media === "music" ? "selectedTab" : "notSelectedTab"} onClick={() => setMedia("music")}>
                        music
                    </div>
                    <div className={media === "highscores" ? "selectedTab" : "notSelectedTab"} onClick={() => setMedia("highscores")}>
                        highscores
                    </div>
                </div>
                <ProfileMediaArea media={media} />
            </div>
        </div>
    );
}