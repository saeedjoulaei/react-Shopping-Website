import React, { useContext } from "react";
//context
import { cardContext } from "../context/CardContextProvider";
//components
import Card from "./shared/Card";
import { Link } from "react-router-dom";

const ShopCard = () => {
  const { state, dispatch } = useContext(cardContext);

  return (
    <div>
      {state.selectedItems.map((item) => (
        <Card key={item.id} data={item} />
      ))}
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total Items : </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments : </span>
            {state.total}
          </p>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}
      {state.checkOut && (
        <div>
          <h3>checked out successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}

      {!state.checkOut && state.itemsCounter === 0 && (
        <div>
          <h3>Want to Buy?</h3>
          <Link to="/products">Go Back To Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCard;
