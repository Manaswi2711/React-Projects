import React from "react";
import "./Home.css"; 
import picachu from "./../assets/picachu.png";
import charmindar from "./../assets/charmindar.png";
import squirtle from "../assets/squirtle.png";


function Home() {
  return (
    <div className="home-container">

      <h1 className="home-title">✨ Pokémon Explorer ✨</h1>

      <p className="home-subtitle">
        Explore all Pokémon with stats, abilities, and detailed information.
        Dive into your adventure now!
      </p>

      <a href="/pokemon" className="explore-btn">
        🚀 Explore Pokémon
      </a>

      <div className="particles"></div>
    </div>
  );
}

export default Home;
