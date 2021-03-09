import React from "react";
import "./sections.css";
import MyCarousel from './Carousel';

export default function Sections() {


  function scrollRight() {
    let row = document.getElementById("carousel");
    row.scrollLeft += 310;
  }

  function scrollLeft() {
    let row = document.getElementById("carousel");
    row.scrollLeft += -310;
  }



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
            </div>          </div>
        </div>
        <div className="game-container">
          <div className="game-content">
            <div className="words-container">
              <div className="game-header-container">
                <h1>Games</h1>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div id="carouselContainer">
              <div className="carousel" id="carousel">
                <div className="carouselItem">

                </div>
                <div className="carouselItem">

                </div>
                <div className="carouselItem">

                </div>
                <div className="carouselItem">

                </div>
                <div className="carouselItem">

                </div>
                <div className="carouselItem">

                </div>
                <div className="carouselItem">

                </div>
                <div className="carouselItem">

                </div>
                <div className="carouselItem">

                </div>
              </div>
              <img onClick={() => scrollLeft()} src="https://freeiconshop.com/wp-content/uploads/edd/arrow-flat.png" id="backwardArrow" className="arrow"></img>
              <img onClick={() => scrollRight()} src="https://freeiconshop.com/wp-content/uploads/edd/arrow-flat.png" id="forwardArrow" className="arrow"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
