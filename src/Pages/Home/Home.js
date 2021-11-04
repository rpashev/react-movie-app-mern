import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Loader from "../../Components/Loader/Loader";
import { useAxios } from "../../Custom Hooks/use-http";

const HomePage = (props) => {
  const {
    response: movies,
    isLoading,
    error,
    sendRequest: loadPublicList,
  } = useAxios();

  useEffect(() => {
    loadPublicList("/public-library");
  }, [loadPublicList]);

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
    content = <p>No movies in public list yet!</p>;
  }

  return (
    <div className={styles["home-page"]}>
      <h1 className={styles.title}>People are watching...</h1>
      {content}
    </div>
  );
};

export default HomePage;
