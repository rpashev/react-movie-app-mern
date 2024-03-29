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
        } ${props.yellow && styles["button--yellow"]} ${
          props.dark && styles["button--dark"]
        } ${props.primary && styles["button--primary"]}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.button} ${
        props.danger && styles["button--danger"]
      } ${props.yellow && styles["button--yellow"]} ${
        props.dark && styles["button--dark"]
      } ${props.primary && styles["button--primary"]}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
