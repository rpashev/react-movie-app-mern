import React, { useContext, useEffect } from "react";
import styles from "./Home.module.scss";

import MovieList from "../../Components/MovieList/MovieList";
import AuthContext from "../../Context/user-context";

const HomePage = () => {
  let { watchlist, seenlist } = useContext(AuthContext);
  const checkIfInList = () => {
    console.log(watchlist, seenlist);
  };
  useEffect(() => {
    checkIfInList();
  }, []);
  return (
    <div className={styles["home-page"]}>
      <h1 className={styles.title}>People are watching...</h1>
      <MovieList url="public-library" />
    </div>
  );
};

export default HomePage;
