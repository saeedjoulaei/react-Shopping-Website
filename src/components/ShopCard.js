import React, { useContext } from "react";
//context
import { cardContext } from "../context/CardContextProvider";
//components
import Card from "./shared/Card";
import { Link } from "react-router-dom";
//styles
import styles from "./ShopCart.module.css";
const ShopCard = () => {
  const { state, dispatch } = useContext(cardContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items : </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments : </span>
            {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {!state.checkOut && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3>Want to Buy?</h3>
          <Link to="/products">Go Back To Shop</Link>
        </div>
      )}

      {state.checkOut && (
        <div className={styles.complete}>
          <h3>checked out successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCard;
