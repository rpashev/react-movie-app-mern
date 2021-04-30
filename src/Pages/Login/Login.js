import React, { Fragment } from "react";
import useInput from "../../Custom Hooks/use-input";
import styles from "./Login.module.css";

const Login = (props) => {
  const validateEmail = (value) => {
    let regex = /\S+@\S+\.\S+/;
    if (regex.test(value) === false || value === "") {
      return false;
    } else {
      return true;
    }
  };

  const {
    value: email,
    hasError: emailError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);

  const {
    value: password,
    hasError: passwordError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => (value.length < 6 ? false : true));

  const submitHandler = async (e) => {
    e.preventDefault();
    if (passwordIsValid && emailIsValid) {
      console.log(email, password);
    }
    resetEmail();
    resetPassword();
  };

  return (
    <Fragment>
      <h1 className={styles.title}>LOGIN</h1>
      <form onSubmit={submitHandler} className={styles.loginForm}>
        <div className={styles.formcontrol}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            value={email}
            type="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailError ? (
            <p className={styles.error}>Please enter a valid email!</p>
          ) : null}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            onBlur={passwordBlurHandler}
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          {passwordError ? (
            <p className={styles.error}>
              Password should be at least 6 symbols!
            </p>
          ) : null}
        </div>

        <div className={styles.formcontrol}>
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
