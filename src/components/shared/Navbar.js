import React, { useContext } from "react";
//context
import { cardContext } from "../../context/CardContextProvider";
//icons
import shopsvg from "../../assets/icons/shop.svg";
import { Link } from "react-router-dom";
//style
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { state } = useContext(cardContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/Card">
            <img src={shopsvg} alt="shop" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
