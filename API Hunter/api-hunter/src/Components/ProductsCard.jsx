import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ item }) => {
  const {id,category,brand,price} = item
  return (
    <div>
      <td>{id}</td>
      <td>
        <Link to={`/singleProducts/${id}`}>{brand}</Link>
      </td>
      <td>{category}</td>
      <td>{price}</td>
    </div>
  );
};

export default ProductsCard;
