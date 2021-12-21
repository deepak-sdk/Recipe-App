import { useContext } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const totalAmount = `₹${+cartCtx.totalAmount}`;

  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </Button>
        {hasItem && <Button className={classes.button}>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
