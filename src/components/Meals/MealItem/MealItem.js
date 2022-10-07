import { useContext, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const cartCxt = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const cartRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const amount = cartRef.current.value;
    const amountInteger = +amount;

    if (amountInteger < 1 || amount.trim().length === 0 || amountInteger > 5) {
      setIsAmountValid(false);
      return;
    }
    setIsAmountValid(true);
    const item = {
      name: props.name,
      price: props.price,
      amount: amountInteger,
    };
    cartCxt.addItem.bind(null, item);
  };
  return (
    <article className={classes["meal-item"]}>
      <div className={classes["meal-item__left"]}>
        <p className={classes.title}>{props.name}</p>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes["meal-item__right"]}>
        <form className={classes.form} onSubmit={submitHandler}>
          <Input
            label="Amount"
            ref={cartRef}
            input={{
              id: "f1",
              type: "number",
              defaultValue: "1",
              step: 1,
            }}
          />
          <button className={classes["add-button"]}>+ Add</button>
          {!isAmountValid && <p>Please enter a valid value(1-5)!</p>}
        </form>
      </div>
    </article>
  );
};
export default MealItem;
