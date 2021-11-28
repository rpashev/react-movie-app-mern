import React from "react";
import styles from "./Home.module.scss";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <h1 className={styles.title}>Welcome</h1>
    </div>
  );
};

export default HomePage;
