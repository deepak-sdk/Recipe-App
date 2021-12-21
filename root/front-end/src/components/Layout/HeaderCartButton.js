import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";
import Button from "./../UI/Button";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  return (
    <Button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
  );
};

export default HeaderCartButton;
