import React, { useEffect, useState, useContext } from "react";
import UserService from "../../services/UserService";
import { AuthContext } from "../../context/AuthContext";
import "./homePage.css";
export default function Home() {
  // const [posts, setPosts] = useState([]);
  // const [access, setAccess] = useState();
  // const authContext = useContext(AuthContext);

  // useEffect(() => {
  //     getFeed();
  //     console.log(authContext.isAuthenticated);
  //     if(authContext.isAuthenticated) {
  //         setAccess("t");
  //     }
  // }, []);

  // function getFeed() {
  //     UserService.getFeed().then(data => {
  //         if (!data.message) {
  //             console.log(data);
  //             data.sort(function (a, b) {
  //                 return new Date(b.createdAt) - new Date(a.createdAt);
  //             });
  //             setPosts(data);
  //         }
  //         else if (data.message.msgBody === "Unauthorized") {
  //             authContext.setUser({ username: "" });
  //             authContext.setIsAuthenticated(false);
  //             setAccess("f");
  //         }
  //     });
  // }
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
          <div className="desktop-container">
            <div className="outer-frame">
              <div className="inner-frame">
                <div className="desktop-content">
                <div className="page">
                  <h1>hi this is Ethereal</h1>
                </div>
                <div className="page">
                  <h1>this is page 1</h1>
                </div>
                <div className="page">
                <h1> this is page 2</h1>
                </div>
                <div className="page">
                <h1>this is page 3</h1>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="supports-container">
            <div className="support-container">
              <div className="music">
                <div className="support-headers">
                  <h1>music</h1>
                </div>
              </div>
            </div>
            <div className="support-container">
              <div className="video">
                <div className="support-headers">
                  <h1>video</h1>
                </div>
              </div>
            </div>
            <div className="support-container">
              <div className="support-headers">
                <div className="game">
                  <h1>game</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="about-container">
              <h1 className="about-header">
                  About
              </h1>
              <p>
              Ethereal allows you to play games, listen to music, and watch videos.
              We strive to give the artist the money they deserve. Every song you listen to, the artist of the song gets a cent,
              same goes for videos. You also have the opertunity to win money by winning the highscore of one of our arcade games.
              </p>
          </div>
        </div>
        <div className="home-content">
          <div className="future-development"></div>
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
