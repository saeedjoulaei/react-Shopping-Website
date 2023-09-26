import React, { useContext } from "react";
import { shorten, isInCard, quantityCounter } from "../../helper/functions";
import { Link } from "react-router-dom";

//context
import { cardContext } from "../../context/CardContextProvider";
//icons
import svg from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cardContext);
  return (
    <div>
      <img src={productData.image} alt="img" style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>details</Link>
        <div>
          {quantityCounter(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCounter(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              {<img src={svg} alt="svg" style={{ width: "20px" }} />}
            </button>
          )}
          {isInCard(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
