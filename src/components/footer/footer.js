import SocialIcon from "../card/socialicon";
import classes from "./footer.module.css";
function Footer(){
    return(
        <div className={classes.container}>
            <div>
                <div className={classes.div1}>
                    <h4>Powered  By  Bread</h4>
                    <div>
                        <SocialIcon/>
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.div2}>
                    <p><strong> &copy; Bread All Rights Reserved</strong></p>
                    <p>Terms &nbsp; Privacy &nbsp; About</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;