import React, { useContext } from "react";

//context
import { productsContext } from "../context/ProductContextProvider";
//components
import Product from "./shared/Product";

const Store = () => {
  const products = useContext(productsContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
