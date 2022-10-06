import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes["meal-summary"]}>
      <div>
        <h1>Tasty FastFood, Delivered To You</h1>
        <p>
          Choose your favorite fastFood from our broad selection of available
          meals and enjoy a tasty lunch or dinner at home.
        </p>
        <p>
          All our foods are cooked with high-quality ingredients, just-in-time
          and of course by experienced cooks!
        </p>
      </div>
    </section>
  );
};
export default MealsSummary;
