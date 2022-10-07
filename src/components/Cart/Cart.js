import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modals from "../UI/Modals";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  const cartItems = cartCxt.items.map((item) => (
    <li>
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
      />
    </li>
  ));
  const price = `$${Math.abs(cartCxt.totalAmount).toFixed(2)}`;

  const orderButtonHandler = () => {
    console.log("Ordering...");
  };
  return (
    <Modals onClick={props.onHideCart}>
      <div className={classes.scroll}>
        {cartCxt.totalAmount <= 0 && (
          <p className={classes["no-item"]} key="p">
            No food in the cart, May be add one?
          </p>
        )}
        <ul className={classes.ul}>{cartItems}</ul>
      </div>

      <div className={classes["price-div"]}>
        <span className={classes.price}> Total Amount</span>
        <span className={classes.price}>{price}</span>
      </div>
      <div className={classes["modal-buttons"]}>
        <button className={classes["close-button"]} onClick={props.onHideCart}>
          Close
        </button>
        {cartCxt.totalAmount > 0 && (
          <button
            className={classes["order-button"]}
            onClick={orderButtonHandler}
          >
            Order
          </button>
        )}
      </div>
    </Modals>
  );
};
export default Cart;
