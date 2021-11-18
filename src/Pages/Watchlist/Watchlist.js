import React from "react";
import MovieList from "../../Components/MovieList/MovieList";
import styles from "./Watchlist.module.scss";

const Watchlist = (props) => {
  return (
    <div className={styles["watchlist-page"]}>
      <h1>Your watchlist</h1>
      <MovieList url="user/watchlist" withAuth watchlist />
    </div>
  );
};

export default Watchlist;
