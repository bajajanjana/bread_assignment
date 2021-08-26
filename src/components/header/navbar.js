import classes from "./navbar.module.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container ">
          <a className="navbar-brand text-light"><strong>bread/jane</strong></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item text-light">
                <a className="nav-link text-light" href="#">Offerings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Links</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Contact me</a>
              </li>
              <button className={classes.button}>Book Trial</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;
