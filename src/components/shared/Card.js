import React, { useContext } from "react";
//context
import { cardContext } from "../../context/CardContextProvider";
//functions
import { shorten } from "../../helper/functions";
//icons
import trash from "../../assets/icons/trash.svg";

const Card = (props) => {
  const { image, title, price, quantity } = props.data;
  const { state, dispatch } = useContext(cardContext);

  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trash} alt="product" style={{ width: "20px" }} />
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
