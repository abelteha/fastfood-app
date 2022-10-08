import React from "react";
import classes from "./HeaderImages.module.css";
import burger from "../../assets/burgers.jpg";
import pizza from "../../assets/pizza.jpg";
import hotDog from "../../assets/hot_dogs.jpg";
import chicken from "../../assets/chicken.jpg";
const HeaderImages = () => {
  console.log("image");
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <a href="#m1">
          <img src={burger} alt="burger" />
          <span>BURGER</span>
        </a>
      </div>

      <div className={classes.box}>
        <a href="#m2">
          <img src={pizza} alt="pizza" />
          <span>PIZZA</span>
        </a>
      </div>
      <div className={classes.box}>
        <a href="#m3">
          <img src={hotDog} alt="hotdog" />
          <span>HOTDOG</span>
        </a>
      </div>
      <div className={classes.box}>
        <a href="#m4">
          <img src={chicken} alt="chicken" />
          <span>CHICKEN</span>
        </a>
      </div>
    </div>
  );
};
export default React.memo(HeaderImages);
