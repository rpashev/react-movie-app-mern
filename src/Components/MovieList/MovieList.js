import React, { useEffect, useState, useCallback, useContext } from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../Loader/Loader";
import { useAxios } from "../../Custom Hooks/use-axios";
import AuthContext from "../../Context/user-context";

const MovieList = (props) => {
  const [movies, setMovies] = useState();
  const { isLoading, error, sendRequest: loadList } = useAxios();

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await loadList({
        url: `/${props.url}`,
        headers: {
          Authorization: props.withAuth ? `Bearer ${token}` : null,
        },
      });
      setMovies(response);
    };
    loadMovies();
  }, [props.url]);

  if (isLoading) {
    return <Loader />;
  } else if (movies && movies.length > 0 && !error) {
    return (
      <div className={styles.list}>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie._id}
              title={movie.title}
              imgLink={movie.poster}
              movieID={movie.IMDBId}
            />
          );
        })}
      </div>
    );
  } else if (error && !movies) {
    return <p>{error}</p>;
  } else if (movies && movies.length === 0 && !error) {
    return <p>No movies in this list yet!</p>;
  } else {
    return null;
  }
};

export default MovieList;
