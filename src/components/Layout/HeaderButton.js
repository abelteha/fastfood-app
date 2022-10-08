import classes from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";
import { BsCartFill } from "react-icons/bs";
import { useContext, useMemo } from "react";
const HeaderButton = (props) => {
  const cartCxt = useContext(CartContext);
  const numberOfItems = cartCxt.items.reduce(
    (total, item) => (total += item.amount),
    0
  );
  const icon = useMemo(() => <BsCartFill />, []);
  return (
    <button className={classes["header-button"]} onClick={props.onClick}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};
export default HeaderButton;
