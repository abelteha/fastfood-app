import { useContext } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  // const cartCxt = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const amount = `x ${props.amount}`;

  const dispatch = useDispatch();
  const item = {
    id: props.id,
    name: props.name,
    price: props.price,
    amount: 1,
  };
  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart(item));
    //   cartCxt.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
    //   cartCxt.removeItem(item.id);
  };
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-item__left"]}>
        <span>
          <h3 className={classes.title}>{props.name}</h3>
          <p className={classes.price}>{price}</p>
        </span>
        <span className={classes.amount}>{amount}</span>
      </div>
      <div className={classes["cart-item__right"]}>
        <span>
          <button className={classes.add} onClick={removeItemHandler}>
            -
          </button>
        </span>
        <span>
          <button className={classes.remove} onClick={addItemHandler}>
            +
          </button>
        </span>
      </div>
    </div>
  );
};
export default CartItem;
