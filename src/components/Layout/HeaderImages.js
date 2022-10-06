import classes from './HeaderImages.module.css'
import burger from '../../assets/burgers.jpg'
import pizza from '../../assets/pizza.jpg'
import hotDog from '../../assets/hot_dogs.jpg'
import chicken from '../../assets/chicken.jpg'
const HeaderImages =()=>{
    return (
      <div className={classes.container}>
        <div className={classes.box}>
          <img src={burger}/>
          <span>BURGER</span>
        </div>
        <div className={classes.box}>
          <img src={pizza} />
          <span>PIZZA</span>
        </div>
        <div className={classes.box}>
          <img src={hotDog} />
          <span>HOTDOG</span>
        </div>
        <div className={classes.box}>
          <img src={chicken} />
          <span>CHICKEN</span>
        </div>
      </div>
    );
}
export default HeaderImages;