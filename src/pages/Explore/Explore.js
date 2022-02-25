import React, { useState } from "react";
import styles from "./Explore.module.scss";

import MovieList from "../../components/movie-components/MovieList/MovieList";
import SearchInput from "../../components/UI/Search";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState();

  const getQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles["explore-page"]}>
      <h1 className={styles.title}>What our users are watching...</h1>
      <SearchInput forwardQuery={getQuery} />
      <MovieList url="public-library" query={searchQuery} />
    </div>
  );
};

export default ExplorePage;
