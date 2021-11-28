import styles from "./HomeIntro.module.scss";
import Button from "../../UI/Button";

const HomeIntro = () => {
  return (
    <div className={styles.prompt}>
      <h1>Welcome to MyMovies</h1>
      <h3>Your personal movie management tool</h3>
      <p>Start building your custom lists today!</p>
      <Button to="/register" yellow>
        Sign Up
      </Button>
      <p>Already have an account?</p>
      <Button to="/login" yellow>
        Login
      </Button>
    </div>
  );
};
export default HomeIntro;
