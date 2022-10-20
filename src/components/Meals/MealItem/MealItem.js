import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

import Input from "../../UI/Input";
import classes from "./MealItem.module.css";

const defaultValue = "1";
const MealItem = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [enteredAmount, setEnteredAmount] = useState(defaultValue);

  const dispatch = useDispatch();
  const price = `$${props.price.toFixed(2)}`;
  const cartRef = useRef();
  const amountInteger = +enteredAmount;
  const enteredAmountIsValid =
    amountInteger > 0 && enteredAmount.trim().length > 0 && amountInteger < 6;
  const inputChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsAmountValid(enteredAmountIsValid);

    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amountInteger,
    };

    if (enteredAmountIsValid) {
      dispatch(cartActions.addItemToCart(item));
    }
  };
  return (
    <article className={classes["meal-item"]} id={props.id}>
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
              defaultValue: defaultValue,
              step: 1,
              onChange: inputChangeHandler,
            }}
          />
          <button className={classes["add-button"]}>+ Add</button>
          {!isAmountValid && (
            <p className={classes.invalid}>Please enter a valid value(1-5)!</p>
          )}
        </form>
      </div>
    </article>
  );
};
export default MealItem;
