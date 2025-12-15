import { Link } from "react-router-dom";

function Destinations() {
  const destinations = [
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bali",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "New York",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-statue-of-liberty-in-front-the-manhattan-skyline-new-york-city-image_15937338.jpg",
    },
    {
      name: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Rome",
      image:
        "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
    },
    {
      name: "Singapore",
      image:
        "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Goa",
      image:
        "https://s3.india.com/wp-content/uploads/2025/05/10-Interesting-Facts-About-Goa-City-You-Must-Know.jpg?impolicy=Medium_Widthonly&w=350&h=263",
    },
  ];

  return (
    <div style={{ padding: "50px 20px", textAlign: "center", background: "#f9fafc" }}>
      <h2 style={{ marginBottom: "40px", fontSize: "32px" }}>
        🌍 Popular Destinations
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {destinations.map((dest) => (
          <div
            key={dest.name}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
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
              src={dest.image}
              alt={dest.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{dest.name}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                Discover the beauty of {dest.name} with our curated travel
                packages.
              </p>

              <Link to="/packages" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#ff7f50",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Explore Packages
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;

