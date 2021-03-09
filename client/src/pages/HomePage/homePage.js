import React from "react";
import "./homePage.css";
export default function Home() {
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
        <div className="hero">
          <div className="hero-container">
            <div className="hero-words">
              <h1>Artist getting payed what they deserve.</h1>
              <p>Watch. Play. Listen.</p>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="info-content">
            <div className="desktop-container">
              <div className="desktop-content">
                <div className="page1">
                  <h1>hi this is Ethereal</h1>
                </div>
                <div className="page2">
                  <h1>this is page 1</h1>
                </div>
                <div className="page3">
                  <h1> this is page 2</h1>
                </div>
                <div className="page4">
                  <h1>this is page 3</h1>
                </div>
              </div>
            </div>
            <div className="supports-container">
              <div className="support-container1">
                <div className="music">
                  <div className="support-headers">
                    <h1>music</h1>
                  </div>
                </div>
              </div>
              <div className="support-container2">
                <div className="video">
                  <div className="support-headers">
                    <h1>video</h1>
                  </div>
                </div>
              </div>
              <div className="support-container3">
                <div className="support-headers">
                  <div className="game">
                    <h1>game</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="about-container">
            <div className="about-words">
              <h1>About</h1>
              <p>
                Ethereal allows you to play games, listen to music, and watch
                videos. We strive to give the artist the money they deserve.
                Every song you listen to, the artist of the song gets a cent,
                same goes for videos. You also have the opertunity to win money
                by winning the highscore of one of our arcade games.
              </p>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="future-development">
            <div className="future-words">
              <h1>Future Development</h1>
              <p>
                Ethereal allows you to play games, listen to music, and watch
                videos. We strive to give the artist the money they deserve.
                Every song you listen to, the artist of the song gets a cent,
                same goes for videos. You also have the opertunity to win money
                by winning the highscore of one of our arcade games.
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
