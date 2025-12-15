import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/Destination" className="nav-link">Destinations</Link>
        <Link to="/packages" className="nav-link">Packages</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contactus" className="nav-link">Contact Us</Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;
