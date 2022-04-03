import styles from "./toggle-button.module.scss";

const ToggleButton = (props) => {
  return (
    <button
      className={`${styles["toggle-button"]} ${props.fromNav ? styles.close : ""}`}
      onClick={props.toggleShowMobileNav}
    >
      <span className={styles["toggle-button__bar"]}></span>
      <span className={styles["toggle-button__bar"]}></span>
      <span className={styles["toggle-button__bar"]}></span>
    </button>
  );
};

export default ToggleButton;
