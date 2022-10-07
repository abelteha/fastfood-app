import classes from "./HeaderImages.module.css";
import burger from "../../assets/burgers.jpg";
import pizza from "../../assets/pizza.jpg";
import hotDog from "../../assets/hot_dogs.jpg";
import chicken from "../../assets/chicken.jpg";
const HeaderImages = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <a href="#m1">
          <img src={burger} />
          <span>BURGER</span>
        </a>
      </div>

      <div className={classes.box}>
        <a href="#m2">
          <img src={pizza} />
          <span>PIZZA</span>
        </a>
      </div>
      <div className={classes.box}>
        <a href="#m3">
          <img src={hotDog} />
          <span>HOTDOG</span>
        </a>
      </div>
      <div className={classes.box}>
        <a href="#m4">
          <img src={chicken} />
          <span>CHICKEN</span>
        </a>
      </div>
    </div>
  );
};
export default HeaderImages;
