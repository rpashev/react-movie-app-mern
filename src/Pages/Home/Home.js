import React from "react";
import styles from "./Home.module.scss";
import HomeIntro from "../../components/landing-page/HomeIntro/HomeIntro";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <div className={styles.img}>
        <HomeIntro />
      </div>
    </div>
  );
};

export default HomePage;
