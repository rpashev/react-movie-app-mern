import React, { useState, useContext } from "react";
import styles from "./Register.module.scss";
import useInput from "../../Custom Hooks/use-input";
import Button from "../../Components/UI/Button";
import { useAxios } from "../../Custom Hooks/use-axios";
import { useHistory } from "react-router";
import AuthContext from "../../Context/user-context";
import Loader from "../../Components/Loader/Loader";

const Register = (props) => {
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
    value: username,
    hasError: usernameError,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((value) => value !== "");

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

  const [repeatPasswordIsTouched, setRepeatPasswordIsTouched] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const repeatPasswordIsValid = repeatPassword === password;
  const repeatPasswordError = !repeatPasswordIsValid && repeatPasswordIsTouched;

  const showEmailError = emailError || (isSubmitting && !emailIsValid);
  const showPasswordError = passwordError || (isSubmitting && !passwordIsValid);
  const showRepeatPasswordError =
    repeatPasswordError || (isSubmitting && !repeatPasswordIsValid);
  const showUsernameError = usernameError || (isSubmitting && !usernameIsValid);

  const repeatPasswordChangeHandler = (event) => {
    setRepeatPassword(event.target.value);
  };

  const repeatPasswordBlurHandler = () => {
    setRepeatPasswordIsTouched(true);
  };

  let { isLoading, error, sendRequest: register } = useAxios();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      emailIsValid &&
      passwordIsValid &&
      repeatPasswordIsValid &&
      usernameIsValid
    ) {
      const userData = await register({
        url: "/auth/register",
        method: "POST",
        data: { username, email, password, repeatPassword },
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
    <div className={styles["register-page"]}>
      <h1 className={styles.title}>REGISTER</h1>
      <form onSubmit={submitHandler} className={styles.registerForm}>
        <div className={styles.formcontrol}>
          <label htmlFor="username">Username</label>
          <input
            className={`${styles.input} ${
              showUsernameError ? styles["input-error"] : ""
            }`}
            type="text"
            value={username}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
          />
          {showUsernameError && (
            <p className={styles.error}>Please enter a valid username!</p>
          )}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="email">Email</label>
          <input
            className={`${styles.input} ${
              showEmailError ? styles["input-error"] : ""
            }`}
            type="email"
            value={email}
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
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {showPasswordError && (
            <p className={styles.error}>
              Password should be at least 6 symbols!
            </p>
          )}
        </div>

        <div className={styles.formcontrol}>
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            className={`${styles.input} ${
              showRepeatPasswordError ? styles["input-error"] : ""
            }`}
            type="password"
            value={repeatPassword}
            onChange={repeatPasswordChangeHandler}
            onBlur={repeatPasswordBlurHandler}
          />
          {showRepeatPasswordError && (
            <p className={styles.error}>Passwords should match!</p>
          )}
        </div>
        {isLoading && <Loader />}

        {!isLoading && (
          <div className={styles.formcontrol}>
            <Button type="submit">Sign Up</Button>
          </div>
        )}
        {error && !isLoading && <p className={styles["http-error"]}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
