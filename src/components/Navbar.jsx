import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
  <div>
    <nav style={{ padding: 20, background: "#222", color: "white" }}>
      <Link style={{ marginRight: 20, color: "white" }} to="/home">Home</Link>
      <Link style={{ color: "white" }} to="/pokemon">Pokemon List</Link>
    </nav>
    <Outlet></Outlet>
  </div>   
  );
}

export default Navbar;
