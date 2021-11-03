import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const Button = (props) => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`${styles.button} ${
          props.danger && styles["button--danger"]
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.button} ${props.danger && styles["button--danger"]}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
