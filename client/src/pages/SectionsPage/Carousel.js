import React from 'react';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./sections.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const MyCarousel = () => (
  <Carousel plugins={[
    {
      resolve: arrowsPlugin,
      options: {
        arrowLeft: <button><FontAwesomeIcon icon="check-square" /></button>,
        arrowLeftDisabled:<button><FontAwesomeIcon icon="coffee"/></button>,
        arrowRight: <button><FontAwesomeIcon icon="check-square" /></button>,
        arrowRightDisabled: <button><FontAwesomeIcon icon="check-square" /></button>,
        addArrowClickHandler: true,
      }
    }
  ]}>
    <img id="artist-img" src={require("./asap.jpeg")} />
    <img id="artist-img" src={require("./travis.jpeg")} />
    <img id="artist-img" src={require("./tyler.jpeg")} />
  </Carousel>
);

export default MyCarousel;