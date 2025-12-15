import React from "react";
import { Link,Outlet } from "react-router-dom";

function Navbar() {
  return (
  <div>
      <div style={{ padding: "10px", backgroundColor: "#f2f2f2"}}>
      <Link to="/home" style={{ margin: "0 10px" }} >Home</Link>
      <Link to="/Destination" style={{ margin: "0 10px" }}>Destinations</Link>
      <Link to="/packages" style={{ margin: "0 10px" }}>Packages</Link>
      <Link to="/about" style={{ margin: "0 10px" }}>About Us</Link>
      <Link to="/contactus" style={{ margin: "0 10px" }}>Contact Us</Link>
    </div>
    <Outlet></Outlet>
  </div>
    
  );
}

export default Navbar;
