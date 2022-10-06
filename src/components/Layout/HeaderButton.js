import classes from "./HeaderButton.module.css"
import { BsCartFill } from "react-icons/bs";
const HeaderButton =()=>{
    return (
      <button className={classes['header-button']}>
        <span className={classes.icon}>
          <BsCartFill />
        </span>
        <span className={classes.title}>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    );
}
export default HeaderButton