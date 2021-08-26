import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image from "./slideimg.png";
import "./slider.module.css";
function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3
        }
      },
    ]
  };
  return (
    <div >
      {/* <h3>Browse All My Offerings</h3> */}
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image slide1">
            {/* <img src={image}/> */}
            <div className="details">
              <button>Live</button>
              <p>Friday-Online Classes</p>
              <p>Aug 8,9:00 AM to 11:00 AM IST</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image slide2">
          {/* <img src={image}/> */}
            <div className="details">
              <button>Live</button>
              <p>Friday-Online Classes</p>
              <p>Aug 8,9:00 AM to 11:00 AM IST</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image slide3">
          {/* <img src={image}/> */}
            <div className="details">
              <button>Live</button>
              <p>Friday-Online Classes</p>
              <p>Aug 8,9:00 AM to 11:00 AM IST</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image slide4">
          {/* <img src={image}/> */}
            <div className="details">
              <button>Live</button>
              <p>Friday-Online Classes</p>
              <p>Aug 8,9:00 AM to 11:00 AM IST</p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  );
}

export default ImageSlider;
