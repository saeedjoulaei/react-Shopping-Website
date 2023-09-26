import React, { useContext } from "react";
//context
import { cardContext } from "../../context/CardContextProvider";
//icons
import shopsvg from "../../assets/icons/shop.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state } = useContext(cardContext);
  return (
    <div>
      <div>
        <Link>products</Link>
      </div>
      <div>
        <Link to="/Card">
          <img src={shopsvg} alt="shop" />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
