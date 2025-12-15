import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function BookNow() {
  const { state } = useLocation(); 

  const pricePerPerson = Number(state.price.replace("$", ""));
  const [members, setMembers] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upi, setUpi] = useState("");
  const [card, setCard] = useState("");
  const [success, setSuccess] = useState(false);

  const totalPrice = members * pricePerPerson;

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }
    if (paymentMethod === "upi" && !upi) {
      alert("Enter UPI ID");
      return;
    }
    if (paymentMethod === "card" && !card) {
      alert("Enter Card Number");
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>✅ Payment Successful</h1>
        <h2>Enjoy your {state.name} trip ✈️</h2>
        <p>Total Paid: <b>${totalPrice}</b></p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h2>📍 {state.name} Trip Booking</h2>

      <img
        src={state.image}
        alt={state.name}
        style={{ width: "100%", borderRadius: "12px" }}
      />

      <p><b>Price per person:</b> ${pricePerPerson}</p>

    
      <label>Number of Members</label>
      <input
        type="number"
        min="1"
        value={members}
        onChange={(e) => setMembers(e.target.value)}
        style={{ width: "100%", padding: "8px", margin: "10px 0" }}
      />

      <h3>Total Price: ${totalPrice}</h3>

     
      <label>Payment Method</label>
      <select
        style={{ width: "100%", padding: "10px", marginTop: "8px" }}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="">Select</option>
        <option value="upi">UPI</option>
        <option value="card">Card</option>
      </select>

      
      {paymentMethod === "upi" && (
        <input
          placeholder="Enter UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />
      )}

      {paymentMethod === "card" && (
        <input
          placeholder="Enter Card Number"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />
      )}

      <button
        onClick={handlePayment}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          backgroundColor: "#ff6b35",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default BookNow;
