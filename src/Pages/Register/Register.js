import React, { useState } from "react";
import styles from "./Register.module.scss";
import useInput from "../../Custom Hooks/use-input";

const Register = (props) => {
  const validateEmail = (value) => {
    let regex = /\S+@\S+\.\S+/;
    if (regex.test(value) === false || value === "") {
      return false;
    } else {
      return true;
    }
  };

  const {
    value: username,
    hasError: usernameError,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput((value) => value !== "");

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

  const [repeatPasswordIsTouched, setRepeatPasswordIsTouched] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const repeatPasswordIsValid = repeatPassword === password;
  const repeatPasswordError = !repeatPasswordIsValid && repeatPasswordIsTouched;

  const repeatPasswordChangeHandler = (event) => {
    setRepeatPassword(event.target.value);
  };

  const repeatPasswordBlurHandler = () => {
    setRepeatPasswordIsTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      emailIsValid &&
      passwordIsValid &&
      repeatPasswordIsValid &&
      usernameIsValid
    )
      console.log(password, repeatPassword, email, username);
    resetEmail();
    resetPassword();
    setRepeatPassword("");
    resetUsername();
  };

  return (
    <div className={styles["register-page"]}>
      <h1 className={styles.title}>REGISTER</h1>
      <form onSubmit={submitHandler} className={styles.registerForm}>
        <div className={styles.formcontrol}>
          <label htmlFor="username">Username</label>
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
          />
          {usernameError ? (
            <p className={styles.error}>Please enter a valid username!</p>
          ) : null}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            value={email}
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
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordError ? (
            <p className={styles.error}>
              Password should be at least 6 symbols!
            </p>
          ) : null}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            className={styles.input}
            type="password"
            value={repeatPassword}
            onChange={repeatPasswordChangeHandler}
            onBlur={repeatPasswordBlurHandler}
          />
          {repeatPasswordError && repeatPasswordIsTouched ? (
            <p className={styles.error}>Passwords should match!</p>
          ) : null}
        </div>

        <div className={styles.formcontrol}>
          <button className={styles.button} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
