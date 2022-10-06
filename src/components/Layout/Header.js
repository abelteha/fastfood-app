import { Fragment } from "react";
import { GiFrenchFries } from "react-icons/gi";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import HeaderImages from "./HeaderImages";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <GiFrenchFries style={{ fontSize: "2.5rem" }}></GiFrenchFries>
          <h1>FastFOOD</h1>
          <GiFrenchFries style={{ fontSize: "2.5rem" }}></GiFrenchFries>
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
