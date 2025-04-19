import React from "react";

function ProductCard({ name, description, price }) {
  return (
    <table>
      <tr>
        <th>Nama Produk</th>
        <th>Harga</th>
        <th>Deskripsi</th>
      </tr>
      <tr>
        <td>{name}</td>
        <td>Rp. {price}</td>
        <td>{description}</td>
      </tr>
    </table>
  );
}

export default ProductCard;
