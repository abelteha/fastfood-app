import classes from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";
import { BsCartFill } from "react-icons/bs";
import { useContext, useEffect, useMemo, useState } from "react";
const HeaderButton = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const cartCxt = useContext(CartContext);

  useEffect(() => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 300);
  }, [cartCxt.items]);

  const numberOfItems = cartCxt.items.reduce(
    (total, item) => (total += item.amount),
    0
  );
  const icon = useMemo(() => <BsCartFill />, []);
  return (
    <button
      className={`${classes["header-button"]} ${isAdded && classes.bump}`}
      onClick={props.onClick}
    >
      <span className={classes.icon}>{icon}</span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};
export default HeaderButton;
