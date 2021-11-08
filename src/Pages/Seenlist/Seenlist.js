import React from "react";
import MovieList from "../../Components/MovieList/MovieList";
import styles from "./Seenlist.module.scss"

const Seenlist = (props) => {
  return (
    <div>
      <h1>Movies you've watched</h1>
      <MovieList url="user/seenlist" withAuth/>
    </div>
  );
};

export default Seenlist;
