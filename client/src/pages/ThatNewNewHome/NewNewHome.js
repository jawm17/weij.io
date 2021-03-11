import React from "react";
import "./NewNewHome.css";

export default function NewNewHome() {
  return (
    <div>
      {/* =============================================================== */}
      {/* Home Screen */}
      <div className="new-new-HomeConatiner">
        <div id="new-logo">
          <h1>Ethereal</h1>
        </div>
        <div className="new-hero">
          <div className="new-hero-container">
            <div className="hero-words">
              <h1>Artist getting payed what they deserve.</h1>
              <p>Watch. Play. Listen.</p>
            </div>
          </div>
        </div>
        <div className="new-new-login-container">
          <div className="new-new-login">
            <p>Log in</p>
            <p>Sign Up</p>
          </div>
        </div>
        <div className="new-new-nav-container">
          <div className="new-new-nav">
            <p>ether music</p>
            <p>ether video</p>
            <p>ether games</p>
          </div>
        </div>
        <div className="new-new-developmentInfo-container">
          <div className="new-new-developmentInfo">
            <p>about</p>
          </div>
        </div>
        <div className="new-new-contactUs">
          <div className="new-new-contactUs">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      {/* =============================================================== */}
      {/* Music Screen */}
      <div className="new-new-MusicConatiner">
        <div id="new-logo">
          <h1>Music</h1>
        </div>
        <div className="new-hero">
          <div className="new-hero-MusicContainer">
            <div className="new-hero-words">
              <p>Listen.</p>
            </div>
            <div className="new-imgContainer">
              <div className="new-img">
                <h1>asap</h1>
                <img src={require("./asap.jpeg")} />
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </div>
              <div className="new-img">
                <h1>frank</h1>
                <img src={require("./frank.jpeg")} />
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </div>
              <div className="new-img">
                <h1>tyler</h1>
                <img src={require("./tyler.jpeg")} />
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

              </div>
            </div>
          </div>
        </div>

        <div className="new-new-login-container">
          <div className="new-new-login">
            <p>Log in</p>
            <p>Sign Up</p>
          </div>
        </div>
        <div className="new-new-nav-container">
          <div className="new-new-nav">
            <p>ether music</p>
            <p>ether video</p>
            <p>ether games</p>
          </div>
        </div>
        <div className="new-new-developmentInfo-container">
          <div className="new-new-developmentInfo">
            <p>about</p>
          </div>
        </div>
        <div className="new-new-contactUs">
          <div className="new-new-contactUs">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      {/* =============================================================== */}
      {/* Video Screen */}
      <div className="new-new-VideoConatiner">
        <div id="new-logo">
          <h1>Video</h1>
        </div>
        <div className="new-hero">
          <div className="new-hero-VideoConatiner">
            <div className="hero-words">
              <h1>Artist getting payed what they deserve.</h1>
              <p>Watch.</p>
            </div>
          </div>
        </div>
        <div className="new-new-login-container">
          <div className="new-new-login">
            <p>Log in</p>
            <p>Sign Up</p>
          </div>
        </div>
        <div className="new-new-nav-container">
          <div className="new-new-nav">
            <p>ether music</p>
            <p>ether video</p>
            <p>ether games</p>
          </div>
        </div>
        <div className="new-new-developmentInfo-container">
          <div className="new-new-developmentInfo">
            <p>about</p>
          </div>
        </div>
        <div className="new-new-contactUs">
          <div className="new-new-contactUs">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      {/* =============================================================== */}
      {/* Games Screen */}
      <div className="new-new-GamesConatiner">
        <div id="new-logo">
          <h1>Games</h1>
        </div>
        <div className="new-hero">
          <div className="new-hero-GamesConatiner">
            <div className="hero-words">
              <h1>Artist getting payed what they deserve.</h1>
              <p>Play.</p>
            </div>
          </div>
        </div>
        <div className="new-new-login-container">
          <div className="new-new-login">
            <p>Log in</p>
            <p>Sign Up</p>
          </div>
        </div>
        <div className="new-new-nav-container">
          <div className="new-new-nav">
            <p>ether music</p>
            <p>ether video</p>
            <p>ether games</p>
          </div>
        </div>
        <div className="new-new-developmentInfo-container">
          <div className="new-new-developmentInfo">
            <p>about</p>
          </div>
        </div>
        <div className="new-new-contactUs">
          <div className="new-new-contactUs">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      {/* =============================================================== */}
      {/* About */}
      <div className="new-new-AboutContainer">
        <div id="new-logo">
          <h1>About</h1>
        </div>
        <div className="new-new-login-container">
          <div className="new-new-login">
            <p>Log in</p>
            <p>Sign Up</p>
          </div>
        </div>
        <div className="new-new-nav-container">
          <div className="new-new-nav">
            <p>ether music</p>
            <p>ether video</p>
            <p>ether games</p>
          </div>
        </div>
        <div className="new-new-developmentInfo-container">
          <div className="new-new-developmentInfo">
            <p>about</p>
          </div>
        </div>
        <div className="new-new-contactUs">
          <div className="new-new-contactUs">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
