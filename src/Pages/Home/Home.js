import React from "react";
import styles from "./Home.module.scss";
import HomeIntro from "../../components/landing-page/HomeIntro/HomeIntro";
import Features from "../../components/landing-page/Features/Features";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <div className={styles.img}>
        <HomeIntro />
      </div>
      <Features />
    </div>
  );
};

export default HomePage;
