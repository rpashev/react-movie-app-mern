import React, { Fragment, useState } from "react";
import styles from "./Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!passwordError && !emailError) {
      console.log(email, password);
    }
  };

  return (
    <Fragment>
      <h1 className={styles.title}>LOGIN</h1>
      <form className={styles.loginForm}>
        <div className={styles.formcontrol}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError ? <p className={styles.error}>{emailError}</p> : null}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            onBlur={validatePassword}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError ? (
            <p className={styles.error}>{passwordError}</p>
          ) : null}
        </div>

        <div className={styles.formcontrol}>
          <button
            className={styles.button}
            type="button"
            onClick={submitHandler}
          >
            Login
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
