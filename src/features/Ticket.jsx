import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function Ticket() {
  const { state } = useLocation();

  if (!state) return <Navigate to="/" />;

  const {
    trip,
    members,
    membersDetails,
    phone,
    startDate,
    endDate,
    totalAmount,
    paymentMethod,
  } = state;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center", color: "#ff6b35" }}>
          🌍 Wanderlust Travels
        </h2>

        <p style={{ textAlign: "center", fontSize: "14px" }}>
          📞 +91 9876543210 <br />
          📧 support@wanderlust.com <br />
          ⏰ 9AM – 9PM
        </p>

        <hr />

        <h3>✈️ Trip Details</h3>
        <p><b>Destination:</b> {trip.name}</p>
        <p><b>Dates:</b> {startDate} → {endDate}</p>
        <p><b>Payment:</b> {paymentMethod}</p>
        <p><b>Contact:</b> {phone}</p>

        <p style={{ color: "green", fontWeight: "bold" }}>
          💰 Total Paid: ${totalAmount}
        </p>

        <hr />

        <h3>🎫 Passenger Tickets</h3>
        {membersDetails.map((m, i) => (
          <p key={i}>
            {i + 1}. {m.name} (Age: {m.age})
          </p>
        ))}

        <p style={{ textAlign: "center", marginTop: "20px", color: "green" }}>
          ✅ Booking Confirmed
        </p>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "420px",
  background: "#fff",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
};

export default Ticket;
