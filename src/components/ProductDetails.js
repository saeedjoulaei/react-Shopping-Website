import React from "react";
import { productsContext } from "../context/ProductContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(productsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div>
      <img src={image} alt="product" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <span>category : {category}</span>
      </p>
      <div>
        <span>{price}</span>
        <Link to="/products">back to shop </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
