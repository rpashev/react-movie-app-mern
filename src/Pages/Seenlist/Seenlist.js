import React from "react";
import MovieList from "../../Components/MovieList/MovieList";
import styles from "./Seenlist.module.scss"

const Seenlist = (props) => {
  return (
    <div className={styles["seenlist-page"]}>
      <h1>Movies you've watched</h1>
      <div className={styles.list}>
        <MovieList url="user/seenlist" withAuth />
      </div>
    </div>
  );
};

export default Seenlist;
