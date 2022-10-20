import classes from "./HeaderButton.module.css";
import { BsCartFill } from "react-icons/bs";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
const HeaderButton = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  // const cartCxt = useContext(CartContext);
  const cartItems = useSelector((state) => state.items);

  useEffect(() => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 300);
  }, [cartItems]);

  const numberOfItems = cartItems.reduce(
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
