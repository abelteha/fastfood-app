import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import HeaderImages from "./HeaderImages";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <h1>FastFood</h1>
        </div>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      {/* <div className={classes["img-holder"]}>
        <img />
      </div> */}
      <HeaderImages />
    </Fragment>
  );
};
export default Header;
