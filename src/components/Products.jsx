import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",    
        justifyContent: "center",
        padding: "30px",
        background: "#f4f6fa",  
        minHeight: "100vh",
      }}
    >
      {products.map((p) => (
        <Product key={p.id} prod={p} />
      ))}
    </div>
  );
}

export default Products;
