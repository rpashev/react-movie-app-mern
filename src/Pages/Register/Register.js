import React, { Fragment, useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!passwordError && !repeatPasswordError && !emailError) {
      console.log(password, repeatPassword, email);
    }
  };

  const validateEmail = () => {
    let regex = /\S+@\S+\.\S+/;
    if (regex.test(email) === false || email === "") {
      setEmailError("Please enter a valid email!");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 symbols!");
    } else {
      setPasswordError("");
    }
  };

  const validateRePassword = () => {
    if (password !== repeatPassword) {
      setRepeatPasswordError("Passwords should match!");
    } else {
      setRepeatPasswordError("");
    }
  };

  return (
    <Fragment>
      <h1 className={styles.title}>REGISTER</h1>
      <form className={styles.registerForm}>
        <div className={styles.formcontrol}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError ? <p className={styles.error}>{emailError}</p> : null}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          {passwordError ? (
            <p className={styles.error}>{passwordError}</p>
          ) : null}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            className={styles.input}
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            onBlur={validateRePassword}
          />
          {repeatPasswordError ? (
            <p className={styles.error}>{repeatPasswordError}</p>
          ) : null}
        </div>

        <div className={styles.formcontrol}>
          <button
            className={styles.button}
            type="button"
            onClick={submitHandler}
          >
            Register
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
