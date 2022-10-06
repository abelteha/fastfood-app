import { type } from "@testing-library/user-event/dist/type";
import Input from "../../UI/Input";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <article className={classes["meal-item"]}>
      <div className={classes["meal-item__left"]}>
        <p className={classes.title}>{props.name}</p>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes["meal-item__right"]}>
        <form className={classes.form}>
          <Input
            label="Amount"
            input={{
              id: "f1",
              type: "number",
              defaultValue: "1",
              min: 1,
              max: 5,
              step: 1,
            }}
          />
          <button className={classes["add-button"]}>+ Add</button>
        </form>
      </div>
    </article>
  );
};
export default MealItem;
