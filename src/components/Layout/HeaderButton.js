import classes from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";
import { BsCartFill } from "react-icons/bs";
import { useContext } from "react";
const HeaderButton = (props) => {
  const cartCxt = useContext(CartContext);
  const numberOfItems = cartCxt.items.reduce(
    (total, item) => (total += item.amount),
    0
  );
  return (
    <button className={classes["header-button"]} onClick={props.onClick}>
      <span className={classes.icon}>
        <BsCartFill />
      </span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};
export default HeaderButton;
