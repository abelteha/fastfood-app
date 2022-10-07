import classes from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-item__left"]}>
        <span>
          <h3 className={classes.title}>Sushi</h3>
          <p className={classes.price}>$12.99</p>
        </span>
        <span className={classes.amount}>x 1</span>
      </div>
      <div className={classes["cart-item__right"]}>
        <span>
          <button className={classes.add}>-</button>
        </span>
        <span>
          <button className={classes.remove}>+</button>
        </span>
      </div>
    </div>
  );
};
export default CartItem;
