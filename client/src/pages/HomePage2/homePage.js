import React, { useEffect, useState } from "react";
// import "./homePage.css";
export default function Home2() {
  const [scroll, setScroll] = useState("scroll");

  const style = {
    scrollStyle: {
      overflowY: scroll
    }
  }

  useEffect(() => {
      let info = document.getElementById("info");
      let deskTop = document.getElementById("desktopContent");
      // document.getElementById("home-area").addEventListener("scroll", function(e) {
      //   console.log("scroll")
      //   let top = info.getBoundingClientRect().top;
      //   if(top <= 96) {
      //     deskTop.scrollTop = 300;
      //   }
      // });
  }, []);

  function scrollBody(e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      console.log("e")
        // if any scroll is attempted, set this to the previous value 
      window.scrollTop = 0;
      setScroll("hidden");
        
  }

  return (
    <div id="home-area" style={style.scrollStyle}>
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
        <div className="hero">
          <div className="hero-container">
            <video muted loop autoPlay id="hero-vid">
              <source src="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/600028cbc95ff54c4975b6bd_stacks-meta-transcode.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
            </video>
            <div className="hero-words">
              <h1>Artist getting payed what they deserve.</h1>
              <p>Watch. Play. Listen.</p>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="info-content" id="info">
            <div id="desktopContainer">
                <div id="desktopContent">
                  <div className="sampleSlide" id="aqua"></div>
                  <div className="sampleSlide" id="red"></div>
                  <div className="sampleSlide" id="green"></div>
                </div>
            </div>
            <div id="largeDiv">

            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="about-container">
            <div className="about-words">
              <h1 >
                About
              </h1>
              <p>
                Ethereal allows you to play games, listen to music, and watch videos.
                We strive to give the artist the money they deserve. Every song you listen to, the artist of the song gets a cent,
                same goes for videos. You also have the opertunity to win money by winning the highscore of one of our arcade games.
              </p>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="future-development">
            <div className="future-words">
              <h1>
                Future Development
              </h1>
              <p>
                Ethereal allows you to play games, listen to music, and watch videos.
                We strive to give the artist the money they deserve. Every song you listen to, the artist of the song gets a cent,
                same goes for videos. You also have the opertunity to win money by winning the highscore of one of our arcade games.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="tile">
          <div
            className="footerElement"
            onClick={() => (window.location.href = "/agreement")}
          >
            copyright
          </div>
          <div
            className="footerElement"
            onClick={() => (window.location.href = "/copyright")}
          >
            agreement
          </div>
          <div
            className="footerElement"
            onClick={() => (window.location.href = "/about")}
          >
            about
          </div>
        </div>
        <div className="tile2">
          <div
            className="footerElement"
            onClick={() => (window.location.href = "/about/ethereum")}
          >
            what is ethereal
          </div>
          <div
            className="footerElement"
            onClick={() => (window.location.href = "/help")}
          >
            what is ethereum
          </div>
          <div
            className="footerElement"
            onClick={() => (window.location.href = "/profile")}
          >
            leaderboard
          </div>
        </div>
      </div>
    </div>
  );
}
