import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import HeaderImages from "./HeaderImages";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <h1>FastFOOD</h1>
        </div>
        <HeaderButton />
      </header>
      {/* <div className={classes["img-holder"]}>
        <img />
      </div> */}
      <HeaderImages />
    </Fragment>
  );
};
export default Header;
