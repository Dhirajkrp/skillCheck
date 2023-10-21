// import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/OwlCarousel.css";
const MovingSlider = () => {
  return (
    <div id="CaroMain">
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={1000}
      >
        <div>
          <img src="image1.jpg" alt="Image 1" className="slideImg" />
          <p className="legend" id="cap">
            CAMPUS TO CORPORATE
          </p>
        </div>
        <div>
          <img src="image2.jpeg" alt="Image 2" className="slideImg" />
          <p className="legend" id="cap">
            CRACK INTERVIEWS
          </p>
        </div>
        <div>
          <img src="image3.jpeg" alt="Image 3" className="slideImg" />
          <p className="legend" id="cap">
            GET SELECTED
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default MovingSlider;
