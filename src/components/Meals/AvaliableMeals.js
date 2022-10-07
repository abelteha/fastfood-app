import classes from "./AvaliableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",

    name: "Burger",
    description: "Americal wonder",
    price: 5.99,
  },
  {
    id: "m2",

    name: "Pizza",
    description: "Italian masterpiece!",
    price: 7.5,
  },
  {
    id: "m3",

    name: "Hot Dog",
    description: "Not a real dog I tell u that",
    price: 3.99,
  },
  {
    id: "m4",

    name: "Chicken",
    description: "juicy, tasty!",
    price: 10.99,
  },
];
const AvaliableMeals = () => {
  const avaliableMeals = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes["avaliable-meals"]}>
      <div className={classes["meals-list"]}>
        <ul>{avaliableMeals}</ul>
      </div>
    </section>
  );
};

export default AvaliableMeals;
