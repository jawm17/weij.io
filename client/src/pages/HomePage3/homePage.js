import React, {useEffect, useState} from "react";
import "./homePage.css";
export default function Home() {
  const [scaleClass, setScaleClass] = useState("notScaled");
  const [titleOpacity, setTitleOpacity] = useState("0%");
  const [heroOpacityOne, setHeroOpacityOne] = useState("100%");
  const [heroOpacityTwo, setHeroOpacityTwo] = useState("0%");
  const [heroOpacityThree, setHeroOpacityThree] = useState("0%");
  const [heroOpacityFour, setHeroOpacityFour] = useState("0%");
  const [deskTop, setDeskTop] = useState("auto");
  const [heroTop, setHeroTop] = useState("auto");
  const [titleTop, setTitleTop] = useState("20%");


  const style = {
    titleText: {
      opacity: titleOpacity,
      top: titleTop
    },
    titleChange: {
      marginBottom: 400
    },
    heroWordsOne: {
      opacity: heroOpacityOne
    },
    heroWordsTwo: {
      opacity: heroOpacityTwo
    },
    heroWordsThree: {
      opacity: heroOpacityThree
    },
    heroWordsFour: {
      opacity: heroOpacityFour
    },
    desktop: {
      top: deskTop
    },
    hero: {
      top: heroTop
    }
  }



  useEffect(() => {
    document.addEventListener("scroll", function(e) {
      console.log(window.scrollY)
      if(window.scrollY < 300) {
        setScaleClass("notScaled");
        setTitleOpacity("0%");
        setHeroOpacityOne("100%");
        setHeroOpacityTwo("0%");
      } else if(window.scrollY >= 300 && window.scrollY <= 640) {
        setScaleClass("scaled");
        setTitleOpacity("100%");
        setHeroOpacityOne("0%");
        setHeroOpacityTwo("100%");
        setHeroOpacityThree("0%");
      } else if (window.scrollY > 640 && window.scrollY <= 940) {
        setHeroOpacityTwo("0%");
        setHeroOpacityThree("100%");
        setHeroOpacityFour("0%");
      } else if (window.scrollY > 940 && window.scrollY <= 1240) {
        setHeroOpacityThree("0%");
        setHeroOpacityFour("100%");
      } else if(window.scrollY > 1240) {
        let title = document.getElementById("video")
        let desktop = document.getElementById("desktop");
        let hero = document.getElementById("hero-vid");
        setTitleTop(title.getBoundingClientRect().top - (window.scrollY - 1240));
        setDeskTop(desktop.getBoundingClientRect().top - (window.scrollY - 1240));
        setHeroTop(hero.getBoundingClientRect().top - (window.scrollY - 1240));
      }
      // else if (window.screenY <= 40) {
      //   setScaleClass("notScaled");
      //   setTitleOpacity("0%");
      // }
    });   
  }, []);

  return (
    <div>
        <div className="nav-container">
            <nav>
                <div id="logo">
                    <h1>Ethereal</h1>
                </div>
                <div id="nav-links">
                    <ul>
                        <li>About</li>
                        <li>Explore</li>
                        <li>Log In</li>
                    </ul>
                </div>
            </nav>
        </div>
      <div id="home-body">
        <div id="video" style={style.titleText}>
            Ethereal <div className="red" style={style.titleChange}>Video</div>
        </div>
        <div id="desktop" style={style.desktop}>
          <img id="desktopImg" src="https://lh3.googleusercontent.com/proxy/YXSIFUGeCPssTb7xblgcjWiRU1XwEFP3wd6RvweS3fuXAW4QC4g1J4jPTWTxbyHub9y_BY-EVDuCjTv0K_AgQXGsgKoWgCUAJmJQ2joSzyN7-9l-clkERX9TyfLdpYQe8_xi9HnAK5g"></img>
        </div>
        <div id="hero" className={scaleClass}>
          <div className="hero-container">
          <video muted loop autoPlay id="hero-vid" style={style.hero}>
              <source src="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/600028cbc95ff54c4975b6bd_stacks-meta-transcode.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
            </video>
            <div className="hero-words" style={style.heroWordsOne}>
              <h1>Artist getting payed what they deserve.</h1>
              <p>Watch. Play. Listen.</p>
            </div>
            <div className="hero-words" style={style.heroWordsTwo}>
              <h1>Earn money for your <div className="red">videos</div></h1>

            </div>
            <div className="hero-words" style={style.heroWordsThree}>
              <h1>Earn money for your <div className="blue">music</div></h1>
      
            </div>
            <div className="hero-words" style={style.heroWordsFour}>
              <h1>Earn money playing <div className="green">games</div></h1>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
