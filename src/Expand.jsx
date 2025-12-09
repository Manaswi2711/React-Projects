import React, { useState } from "react";
import "./expand.css";

function Expand({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-box" onClick={() => setOpen(!open)}>
      <div className="faq-header">
        <h3>{question}</h3>
        <span className="icon">{open ? "-" : "+"}</span>
      </div>

      {open && <p className="faq-answer ">{answer}</p>}
    </div>
  );
}

export default Expand;
