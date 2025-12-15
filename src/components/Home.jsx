import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>  
    <div
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjMyfDB8MXxzZWFyY2h8M3x8dHJhdmVsJTIwaW1hZ2V8ZW58MHx8fHwxNjk3NDA4MjE5&ixlib=rb-4.0.3&q=80&w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",  
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>         
     <div>
           <h1>Welcome to Wanderlust Travel</h1>
           <h1 style={{ fontSize: "3em", marginBottom: "20px" }}>
                  Wanderlust Travel
           </h1>
           <p style={{ fontSize: "1.5em", marginBottom: "30px" }}>
                  Explore the world with our exclusive travel packages!
           </p>
      <Link to="/Destination">
         <button
          style={{
            padding: "15px 30px",
            fontSize: "1em",
            backgroundColor: "#ff7f50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Explore Now
        </button>
      </Link>
        </div>
      </div>
  </div>
 );
}

export default Home;
