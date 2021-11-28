import React from "react";
import styles from "./Explore.module.scss";

import MovieList from "../../components/movie-components/MovieList/MovieList";

const ExplorePage = () => {
  return (
    <div className={styles["explore-page"]}>
      <h1 className={styles.title}>What our users are watching...</h1>
      <MovieList url="public-library" />
    </div>
  );
};

export default ExplorePage;
