import React, { useState, useContext } from "react";
import useInput from "../../Custom Hooks/use-input";
import styles from "./Login.module.scss";
import Button from "../../Components/UI/Button";
import { useAxios } from "../../Custom Hooks/use-axios";
import { useHistory } from "react-router";
import AuthContext from "../../Context/user-context";
import Loader from "../../Components/Loader/Loader";

const Login = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const auth = useContext(AuthContext);

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
  } = useInput(validateEmail);

  const {
    value: password,
    hasError: passwordError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => (value.length < 6 ? false : true));

  const showEmailError = emailError || (isSubmitting && !emailIsValid);
  const showPasswordError = passwordError || (isSubmitting && !passwordIsValid);

  let { isLoading, error, sendRequest: login } = useAxios();

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (passwordIsValid && emailIsValid) {
      const userData = await login({
        url: "/auth/login",
        method: "POST",
        data: { email, password },
      });

      if (!userData) {
        return;
      }
      auth.login(
        userData.token,
        userData.username,
        userData.userId,
        userData.email
      );
      history.replace("/");
    }
  };

  return (
    <div className={styles["login-page"]}>
      <h1 className={styles.title}>LOGIN</h1>
      <form onSubmit={submitHandler} className={styles.loginForm}>
        <div className={styles.formcontrol}>
          <label htmlFor="email">Email</label>
          <input
            className={`${styles.input} ${
              showEmailError ? styles["input-error"] : ""
            }`}
            value={email}
            type="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {showEmailError && (
            <p className={styles.error}>Please enter a valid email!</p>
          )}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="password">Password</label>
          <input
            className={`${styles.input} ${
              showPasswordError ? styles["input-error"] : ""
            }`}
            onBlur={passwordBlurHandler}
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          {showPasswordError && (
            <p className={styles.error}>
              Password should be at least 6 symbols!
            </p>
          )}
        </div>
        {isLoading && <Loader />}
        {!isLoading && (
          <div className={styles.formcontrol}>
            <Button type="submit">Login</Button>
          </div>
        )}
        {error && !isLoading && <p className={styles["http-error"]}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
