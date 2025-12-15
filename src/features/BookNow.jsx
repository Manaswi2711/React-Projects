import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookNow() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h2 style={{ textAlign: "center" }}>No Trip Selected</h2>;

  const pricePerPerson = Number(state.price.replace("$", ""));

  const [members, setMembers] = useState(1);
  const [membersDetails, setMembersDetails] = useState([
    { name: "", age: "" },
  ]);

  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const totalAmount = members * pricePerPerson;

 
  const handleMembersChange = (value) => {
    const count = Number(value);
    setMembers(count);

    const updated = Array.from({ length: count }, (_, i) => ({
      name: membersDetails[i]?.name || "",
      age: membersDetails[i]?.age || "",
    }));

    setMembersDetails(updated);
  };

  const handleMemberInput = (index, field, value) => {
    const updated = [...membersDetails];
    updated[index][field] = value;
    setMembersDetails(updated);
  };

  const handlePayment = () => {
    if (!startDate || !endDate) return alert("Select travel dates");
    if (!phone || phone.length !== 10) return alert("Enter valid phone number");
    if (!paymentMethod) return alert("Select payment method");

    if (paymentMethod === "UPI" && !upiId)
      return alert("Enter UPI ID");

    if (paymentMethod === "Card" && cardNumber.length !== 16)
      return alert("Enter valid 16 digit card number");

    for (let m of membersDetails) {
      if (!m.name || !m.age)
        return alert("Fill all passenger details");
    }

    navigate("/ticket", {
      state: {
        trip: state,
        members,
        membersDetails,
        phone,
        startDate,
        endDate,
        totalAmount,
        paymentMethod,
      },
    });
  };

  return (
    <div style={{ maxWidth: "650px", margin: "40px auto", padding: "20px" }}>
      <h2>📍 Book Trip – {state.name}</h2>

      <img
        src={state.image}
        alt={state.name}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "10px" }}
      />

      <p><b>Price per person:</b> ${pricePerPerson}</p>

      <label>Start Date</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={inputStyle} />

      <label>End Date</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={inputStyle} />

      <label>Contact Phone</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />

      <label>Number of Members</label>
      <input type="number" min="1" value={members} onChange={(e) => handleMembersChange(e.target.value)} style={inputStyle} />

      <h3>👨‍👩‍👧 Passenger Details</h3>
      {membersDetails.map((m, i) => (
        <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input
            placeholder={`Member ${i + 1} Name`}
            value={m.name}
            onChange={(e) => handleMemberInput(i, "name", e.target.value)}
            style={{ flex: 2, padding: "8px" }}
          />
          <input
            type="number"
            placeholder="Age"
            value={m.age}
            onChange={(e) => handleMemberInput(i, "age", e.target.value)}
            style={{ flex: 1, padding: "8px" }}
          />
        </div>
      ))}
      <h3>💳 Payment Method</h3>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} style={inputStyle}>
        <option value="">Select</option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
        <option value="NetBanking">Net Banking</option>
      </select>
      {paymentMethod === "UPI" && (
        <input
          placeholder="Enter UPI ID"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          style={inputStyle}
        />
      )}
      {paymentMethod === "Card" && (
        <input
          placeholder="Enter Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          style={inputStyle}
        />
      )}
      <h3>Total Amount: ${totalAmount}</h3>
      <button onClick={handlePayment} style={btnStyle}>
        Pay & Continue
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
};

const btnStyle = {
  marginTop: "20px",
  width: "100%",
  padding: "12px",
  background: "#ff6b35",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
};

export default BookNow;
