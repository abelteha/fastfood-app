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
      <div className={classes["meal-item__right"]}></div>
    </article>
  );
};
export default MealItem;
