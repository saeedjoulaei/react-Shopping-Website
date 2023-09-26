import React, { useContext } from "react";
import { shorten, isInCard, quantityCounter } from "../../helper/functions";
import { Link } from "react-router-dom";

//context
import { cardContext } from "../../context/CardContextProvider";
//icons
import svg from "../../assets/icons/trash.svg";
//styles
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cardContext);
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={productData.image} alt="img" />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>details</Link>
        <div className={styles.buttonContainer}>
          {quantityCounter(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCounter(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              {<img src={svg} alt="svg" style={{ width: "20px" }} />}
            </button>
          )}
          {quantityCounter(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCounter(state, productData.id)}
            </span>
          )}
          {isInCard(state, productData.id) ? (
            <button
              className={styles.smallButton}
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
