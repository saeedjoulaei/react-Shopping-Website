import React, { useEffect, useState, createContext } from "react";
import { getProducts } from "../services/Api";

const productsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };
    fetchApi();
  }, []);

  return (
    <div>
      <productsContext.Provider value={products}>
        {children}
      </productsContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
