import React, { useState } from "react";
import MovieList from "../../components/movie-components/MovieList/MovieList";
import SearchInput from "../../components/UI/Search";
import styles from "./Seenlist.module.scss";

const Seenlist = (props) => {
  const [searchQuery, setSearchQuery] = useState();

  const getQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles["seenlist-page"]}>
      <h1>Movies you've watched</h1>
      <SearchInput forwardQuery={getQuery} />
      <div className={styles.list}>
        <MovieList url="user/seenlist" query={searchQuery} withAuth watched />
      </div>
    </div>
  );
};

export default Seenlist;
