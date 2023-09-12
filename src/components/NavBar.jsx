import { Link, Outlet } from "react-router-dom";
import "./NavBar.css"

// function NavBar() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/project">Project</Link>
//         <Link to="/login">Login</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }
// export default NavBar;

function NavBar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          src="https://i.ibb.co/mb1153D/Green-Line-art-Nature-Tree-Logo-removebg-preview.png"
          alt="Logo"
          className="navbar-logo"
        />
      </div>
      <div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/" className="nav-button">
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="nav-button">
                Project
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-button">
                About
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-button">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-button">
                Register
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </header>
  );
}

export default NavBar;
