import classes from "./card.module.css";
import CardContent from "./cardContent";
function Card() {
  return (
    <div className={classes.container}>
      <div className="card">
         <CardContent/>
      </div>
    </div>
  );
}

export default Card;
