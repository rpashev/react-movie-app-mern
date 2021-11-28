import styles from "./HomeIntro.module.scss";
import Button from "../../UI/Button";

const HomeIntro = () => {
  return (
    <div className={styles.prompt}>
      <h1>Welcome to <span>MyMovies</span></h1>
      <h3>Your personal movie management tool</h3>
      <p>Start building your custom lists today!</p>
      <Button to="/register" primary>
        Sign Up
      </Button>
      <p>Already have an account?</p>
      <Button to="/login" primary>
        Login
      </Button>
    </div>
  );
};
export default HomeIntro;
