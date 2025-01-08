import logo from "../assets/app-logo.svg";
import { Link, NavLink, replace, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="logo" width="130px" height="50px" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/jobs">
          <li>Jobs</li>
        </NavLink>

        {/* <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link> */}

      </ul>
      <button onClick={() => {navigate('/contact', {replace: true} )}}>Get Started</button>
    </div>
  );
}

export default NavBar;
