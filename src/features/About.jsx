import React from "react";

function About() {
  return (
    <div>
      
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.55)",
            padding: "30px",
            borderRadius: "12px",
          }}
        >
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            About Wanderlust Travel
          </h1>
          <p style={{ fontSize: "18px" }}>
            Your journey begins with us ✈️
          </p>
        </div>
      </div>

      
      <div
        style={{
          padding: "50px 20px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
          <strong>Wanderlust Travel</strong> is a premium travel agency dedicated
          to helping you explore the world with comfort, style, and unforgettable
          experiences. We specialize in tailor-made travel packages designed for
          solo travelers, couples, families, and adventure seekers.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginTop: "20px",
          }}
        >
          From exotic destinations to luxury getaways, our expert team ensures
          seamless planning, personalized itineraries, and 24/7 customer
          support—so you can focus on creating memories that last a lifetime.
        </p>

        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[
            "🌍 Worldwide Destinations",
            "✈️ Customized Travel Packages",
            "🏨 Premium Hotels & Resorts",
            "🤝 24/7 Customer Support",
          ].map((item, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: "#d7dce4ff",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
