import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoFacebook,
  BiLogoTwitter,
} from "react-icons/bi";


function NavBar() {
  const hasToken = window.localStorage.getItem("token");
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("is_login");
    push("/");
  }
    return (
      <div className="header">
        {/* <a href="#" className="logo">
          GiftASeed.
        </a> */}
        <Link to="/" className="logo-link">
          GiftASeed.
        </Link>

        <div className="social-media">
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
        </div>
        <nav className="nav-bar">
          <Link to="/" className="nav-btn">
            Home
          </Link>

          <Link to="/about" className="nav-btn">
            About
          </Link>

          {/* <Link to="/createproject" className="nav-btn">
            Create
          </Link> */}

          {/* without login, createproject button to loginpage, but the function has been done by conditonal path. */}

          {/* {hasToken ? (
            <Link to="/createproject" className="nav-btn">
            Create
            </Link>
          ) : (
            <Link to="/login" className="nav-btn">
            Create
            </Link>
          )} */}

          {/* Create button only displayed when hasToken=true */}
          {hasToken ? (
            <Link to="/createproject" className="nav-btn">
              Create
            </Link>
          ) : null}

          <Link to="/project" className="nav-btn">
            Projects
          </Link>

          {/* <Link to="/login" className="nav-btn">
            Login
          </Link> */}

          {hasToken ? (
            <Link to="/" className="nav-btn" onClick={handleLogout}>
            Logout
            </Link>
          ) : (
            <Link to="/login" className="nav-btn">
            Login
            </Link>
          )}

          <Link to="/register" className="nav-btn">
            Register
          </Link>

          {/* <Link to="/user" className="nav-btn">
            Account
          </Link> */}
          {hasToken ? (
            <Link to="/user" className="nav-btn">
              Account
            </Link>
          ) : null}
        </nav>
        <Outlet />
      </div>
    );
}


export default NavBar;