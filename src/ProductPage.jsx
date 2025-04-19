import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

function ProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const handleFormChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === "number" ? parseInt(value) : value,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <h1>Input Produk</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          onChange={handleFormChange}
          placeholder="Nama Produk"
        />
        <input
          type="number"
          name="price"
          onChange={handleFormChange}
          placeholder="Harga"
        />
        <textarea
          placeholder="Deskripsi"
          type="text"
          name="description"
          onChange={handleFormChange}
        ></textarea>
      </form>
      <div>
        <ProductCard {...formData} />
      </div>
    </div>
  );
}

export default ProductPage;
