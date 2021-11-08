import React from "react";
import MovieList from "../../Components/MovieList/MovieList";
import styles from "./Watchlist.module.scss"

const Watchlist = (props) => {
  return (
    <div>
      <h1>Your watchlist</h1>
      <MovieList url="user/watchlist" withAuth/>
    </div>
  );
};

export default Watchlist;
