import { useCallback, useContext } from "react";
import { useSelector } from "react-redux";
import CartContext from "../../store/cart-context";
import Modals from "../UI/Modals";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.items);
  const totalPrice = useSelector((state) => state.totalAmount);
  // const cartCxt = useContext(CartContext);
  const cartItemss = cartItems.map((item) => (
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
  const price = `$${Math.abs(totalPrice).toFixed(2)}`;

  const orderButtonHandler = useCallback(() => {
    console.log("Ordering...");
  }, []);
  return (
    <Modals onClick={props.onHideCart}>
      <div className={classes.scroll}>
        {totalPrice <= 0 && (
          <p className={classes["no-item"]} key="p">
            No food in the cart, May be add one?
          </p>
        )}
        <ul className={classes.ul}>{cartItemss}</ul>
      </div>

      <div className={classes["price-div"]}>
        <span className={classes.price}> Total Amount</span>
        <span className={classes.price}>{price}</span>
      </div>
      <div className={classes["modal-buttons"]}>
        <button className={classes["close-button"]} onClick={props.onHideCart}>
          Close
        </button>
        {totalPrice > 0 && (
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
