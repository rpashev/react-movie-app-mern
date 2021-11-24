import React from "react";
import styles from "./Home.module.scss";

import MovieList from "../../components/movie-components/MovieList/MovieList";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <h1 className={styles.title}>People are watching...</h1>
      <MovieList url="public-library" />
    </div>
  );
};

export default HomePage;
