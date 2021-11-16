import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

export default Backdrop;
