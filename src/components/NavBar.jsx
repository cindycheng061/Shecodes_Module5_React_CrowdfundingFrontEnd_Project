import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

// import {
//   BiLogoLinkedin,
//   BiLogoGithub,
//   BiLogoFacebook,
//   BiLogoTwitter,
// } from "react-icons/bi";


function NavBar() {
    return (
      <div className="header">
        {/* <a href="#" className="logo">
          GiftASeed.
        </a> */}
          <Link to ="/" className="logo-link"> GiftASeed.
          </Link>
         
        
        {/* <div className="social-media">
          <a href="https://github.com/cindycheng061">
            <BiLogoGithub />
          </a>
          <a href="https://www.facebook.com/">
            <BiLogoFacebook />
          </a>
          <a href="https://twitter.com/">
            <BiLogoTwitter />
          </a>
          <a href="https://www.linkedin.com/in/xiaoxin-cheng-6a8155117/">
            <BiLogoLinkedin />
          </a>
        </div> */}
        <nav className="nav-bar">
          <Link to="/" className="nav-btn">
            Home
          </Link>

          <Link to="/about" className="nav-btn">
            About
          </Link>

          <Link to="/createproject" className="nav-btn">
            Create
          </Link>

          <Link to="/project" className="nav-btn">
            Projects
          </Link>

          <Link to="/login" className="nav-btn">
            Login
          </Link>

          <Link to="/register" className="nav-btn">
            Register
          </Link>

          <Link to="/user" className="nav-btn">
            Account
          </Link>
        </nav>
        <Outlet />
      </div>
    );
}


export default NavBar;