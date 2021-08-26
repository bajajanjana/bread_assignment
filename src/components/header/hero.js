import Card from "../card/card";
import Footer from "../footer/footer";
import ImageSlider from "../slider/slider.js";
import classes from "./hero.module.css";
import Navbar from "./navbar.js";
import "../slider/slider.module.css";

function Hero() {
  return (
    <>
    <div className={classes.hero}>
      <Navbar />
      <div className={classes.heading}>
      <h2>Start your day with the goodness of Yoga</h2>
      </div>
      <Card/>
      <h1 className="slider_title">Browse  All  my  Offerings</h1>
      <ImageSlider/>
      <Footer/>
    </div>
    </>
  );
}

export default Hero;
