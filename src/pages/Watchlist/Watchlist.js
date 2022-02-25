import React, { useState } from "react";
import MovieList from "../../components/movie-components/MovieList/MovieList";
import SearchInput from "../../components/UI/Search";
import styles from "./Watchlist.module.scss";

const Watchlist = (props) => {
  const [searchQuery, setSearchQuery] = useState();

  const getQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles["watchlist-page"]}>
      <h1>Your watchlist</h1>
      <SearchInput forwardQuery={getQuery} />
      <MovieList url="user/watchlist" query={searchQuery} withAuth watchlist />
    </div>
  );
};

export default Watchlist;
