import React, { useEffect, useState } from "react";
import styles from "../Pages/Home/Home.module.scss";
import MovieCard from "../Components/MovieCard/MovieCard";
import Loader from "../Components/Loader/Loader";
import { useAxios } from "./use-axios";


const useMovieList = (url) => {
  const [movies, setMovies] = useState(null);
  const { isLoading, error, sendRequest: loadList } = useAxios();

  useEffect(() => {
    const loadMovies = async () => {
      const response = await loadList(`/${url}`);
      setMovies(response);
    };
    loadMovies();
  }, [loadList]);

  let content;

  if (!isLoading && error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && Array.isArray(movies) && movies.length > 0) {
    content = (
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
  } else if (!isLoading && Array.isArray(movies) && movies.length === 0) {
    content = <p>No movies in list yet!</p>;
  }
  return { content };
};

export default useMovieList;
