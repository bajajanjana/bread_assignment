import Card from "../card/card";
import classes from "./hero.module.css";
import Navbar from "./navbar.js";

function Hero() {
  return (
    <div className={classes.hero}>
      <Navbar />
      <Card/>
    </div>
  );
}

export default Hero;
