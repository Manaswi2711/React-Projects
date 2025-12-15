import React from "react";
import { Link } from "react-router";
function Packages() {
  const destinations = [
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      price: "$1200",
    },
    {
      name: "Bali",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      price: "$1300",
    },
    {
      name: "New York",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-statue-of-liberty-in-front-the-manhattan-skyline-new-york-city-image_15937338.jpg",
      price: "$1600",
    },
    {
      name: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80",
      price: "$1500",
    },
    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      price: "$1400",
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      price: "$2200",
    },
    {
      name: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      price: "$2000",
    },
    {
      name: "Rome",
      image:
        "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
      price: "$1250",
    },
    {
      name: "Singapore",
      image:
        "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=800&q=80",
      price: "$1450",
    },
    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      price: "$1700",
    },
    {
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      price: "$1350",
    },
    {
      name: "Goa",
      image:
        "https://s3.india.com/wp-content/uploads/2025/05/10-Interesting-Facts-About-Goa-City-You-Must-Know.jpg?impolicy=Medium_Widthonly&w=350&h=263",
      price: "$900",
    },
  ];

  return (
    <div style={{ padding: "40px", backgroundColor: "#f5f7fa" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🌍 Travel Packages
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {destinations.map((pkg) => (
          <div
            key={pkg.name}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{pkg.name}</h3>
              <p style={{ fontWeight: "bold", color: "#ff6b35" }}>
                {pkg.price}
              </p>
           <Link to="/booknow" state={pkg}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  width: "100%",
                  backgroundColor: "#ff6b35",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Book Now
              </button>
            </Link>             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
