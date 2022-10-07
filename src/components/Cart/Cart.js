import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modals from "../UI/Modals";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  const cartItems = cartCxt.items.map((item) => <li>{item.name}</li>);
  const price = `$${cartCxt.totalAmount.toFixed(2)}`;
  return (
    <Modals onClick={props.onHideCart}>
      <ul className={classes.ul}>
        <CartItem />
      </ul>
      <div className={classes["price-div"]}>
        <span className={classes.price}> Total Amount</span>
        <span className={classes.price}>{price}</span>
      </div>
      <div className={classes["modal-buttons"]}>
        <button className={classes["close-button"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes["order-button"]}>Order</button>
      </div>
    </Modals>
  );
};
export default Cart;
