import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modals.module.css";
export const Modal = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const BackDrop = (props) => {
  return <div className={classes["back-drop"]} onClick={props.onClick}></div>;
};
const Modals = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("back-drop")
      )}
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};
export default Modals;
