import classes from "./cardContent.module.css";
import nameimg from "./nameimg.jpg";
import videoimg from "./videoimg.png";

import SocialIcon from "./socialicon.js";
function CardContent() {
  return (
    <div className={classes.content}>
      <div className={classes.div1}>
        <div className={classes.NameImage}>
          <img src={nameimg} width="80px" height="80px"></img>
        </div>
        <div className={classes.context}>
          <div className={classes.flex1}>
            <button>Yoga</button>
            <button>Wellness</button>
            <button>Fitness</button>
          </div>
        </div>
        <div className={classes.buttons}>
          <div className={classes.flex2}>
            <button>Book Trial</button>
            <button>Contact me</button>
          </div>
        </div>
      </div>
      <div className={classes.div2}>
        <h2>Jane Doe</h2>
        <p>Hi, I am Jane Doe, your next door fitness instructor with just one goal-Make people fit
          and healty.Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
        </p>
        <SocialIcon/>
        <hr/>
      </div>
      <div className={classes.div3}>
        <div className={classes.icon}>
        <a href="#"><i class="fas fa-map-marker-alt"></i></a>
        <span><strong>Lives in</strong> 
        <button>Newdelhi</button>
        </span>
        </div>
        <div className={classes.icon}>
        <a href="#"><i class="fas fa-comments"></i></a>
        <span><strong>Speaks</strong>
        <button>English</button>
        <button>Hindi</button>
        <button>Punjabi</button>
        </span>
        </div>
      </div>
      <div className={classes.div4}>
        <div>
          <h4>Check out my video  about 30 min yoga for beginners</h4>
          <span><strong>Contact me <i class="fas fa-arrow-right"></i></strong></span>
        </div>
        <div>
          <img src={videoimg} width="350px" height="200px"></img>
        </div>
      </div>
      <div className={classes.div5}>
        <form>
           <input type="email" placeholder="Enter your Email" className="form-control"></input>
           <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default CardContent;
