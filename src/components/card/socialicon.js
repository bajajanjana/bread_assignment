import classes from './socialicon.module.css';
function SocialIcon(){
    return(
        <div className={classes.flex1}>
            <a href="#"><i class="fab fa-instagram-square"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-spotify"></i></a>
        </div>
    );
}

export default SocialIcon;