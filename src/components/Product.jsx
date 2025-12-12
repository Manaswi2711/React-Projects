import React from "react";
import "./Product.css";

function Product({ prod }) {
  return (
    <div>
      
      <div className="prod-card">
      
      <img src={prod.thumbnail} alt={prod.title} className="prod-img" />

      <div className="prod-body">
        <h3 className="prod-title">{prod.title}</h3>
        <p className="prod-cat">{prod.category}</p>

        <p className="prod-price">₹ {prod.price}</p>

        <span className="prod-tag">
          {prod.discountPercentage}% OFF
        </span>

        <button className="prod-btn">Add To Cart</button>
      </div>
    </div>
    </div>
  );
}

export default Product;
