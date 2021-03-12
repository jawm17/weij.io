import React, {useEffect, useState} from "react";
import "./NewNewHome.css";

export default function NewNewHome () {
    return (
      <div>
        {/* nav */}
        <div className="new-nav">
          <div className="new-nav-login">
            <p>Log in</p>
            <p>Sign Up</p>
          </div>
          <div className="new-nav-apps">
            <p>ether music</p>
            <p>ether video</p>
            <p>ether games</p>
          </div>
          <div className="new-nav-about">
            <p>about</p>
          </div>
          <div className="new-nav-contact">
            <p>Contact Us</p>
          </div>
        </div>
        {/* =============================================================== */}
        {/* All Home Content*/}
        <div className="all-content">
          {/* Home */}
          <div className="home-content">
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
          </div>
          {/* Music */}
          <div className="music-content">
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
          </div>
          {/* video */}
          <div className="video-content">
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
          </div>
          {/* Games */}
          <div className="games-content">
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
          </div>
          {/* About */}
          <div className="about-content">
            <div id="new-logo">
              <h1>About</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }



