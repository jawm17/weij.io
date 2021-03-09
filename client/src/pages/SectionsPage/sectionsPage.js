import React from "react";
import "./sections.css";

export default function Sections() {
  return (
    <div>
      <div className="Content-container">
        <div className="music-container">
          <div className="music-content">
            <div className="words-container">
              <div className="header-container">
                <h1>Music</h1>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="artist-container">
              <div className="artist">
                <div className="artist1">
                  <div className="artist-name">
                    <h1>asap</h1>
                  </div>
                  <div className="artist-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>

                  <div className="artist-img">
                    <img src={require("./asap.jpeg")} />
                  </div>
                </div>
                <div className="artist2">
                  <div className="artist-name">
                    <h1>frank</h1>
                  </div>
                  <div className="artist-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="artist-img">
                    <img src={require("./frank.jpeg")} />{" "}
                  </div>
                </div>
                <div className="artist3">
                  <div className="artist-name">
                    <h1>travis</h1>
                  </div>
                  <div className="artist-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="artist-img">
                    <img src={require("./travis.jpeg")} />{" "}
                  </div>
                </div>
                <div className="artist4">
                  <div className="artist-name">
                    <h1>tyler</h1>
                  </div>
                  <div className="artist-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="artist-img">
                    <img src={require("./tyler.jpeg")} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-container">
          <div className="video-content">
            <div className="words-container">
              <div className="video-header-container">
                <h1>Video</h1>
              </div>
              <div className="video-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="artist-container">
              <div className="artist">
                <div className="artist1">
                  <h1>asap</h1>
                  <div className="artist-img">
                    <img src={require("./asap.jpeg")} />
                  </div>
                </div>
                <div className="artist2">
                  <h1>frank</h1>
                  <div className="artist-img">
                    <img src={require("./frank.jpeg")} />{" "}
                  </div>
                </div>
                <div className="artist3">
                  <h1>travis</h1>
                  <div className="artist-img">
                    <img src={require("./travis.jpeg")} />{" "}
                  </div>
                </div>
                <div className="artist4">
                  <h1>tyler</h1>
                  <div className="artist-img">
                    <img src={require("./tyler.jpeg")} />{" "}
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="game-container">
          <div className="game-content">
            <div className="words-container">
              <div className="game-header-container">
                <h1>Games</h1>
              </div>
              <div className="game-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="artist-container">
              <div className="artist">
                <div className="artist1">
                  <h1>asap</h1>
                  <div className="artist-img">
                    <img src={require("./asap.jpeg")} />
                  </div>
                </div>
                <div className="artist2">
                  <h1>frank</h1>
                  <div className="artist-img">
                    <img src={require("./frank.jpeg")} />{" "}
                  </div>
                </div>
                <div className="artist3">
                  <h1>travis</h1>
                  <div className="artist-img">
                    <img src={require("./travis.jpeg")} />{" "}
                  </div>
                </div>
                <div className="artist4">
                  <h1>tyler</h1>
                  <div className="artist-img">
                    <img src={require("./tyler.jpeg")} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
