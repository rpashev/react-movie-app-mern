import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import MovieCard from "../../Components/MovieCard/MovieCard";
import axios from "axios";

const DUMMY_DATA = [
  {
    movieID: "m1",
    title: "Batman 1",
    imgLink:
      "https://image.shutterstock.com/image-vector/vampire-horror-logo-icon-vector-260nw-1768794029.jpg",
  },
  {
    movieID: "m2",
    title: "Harry Potter",
    imgLink:
      "https://static.posters.cz/image/750/%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%BC%D0%B0%D1%81%D0%BE%D0%B2%D0%B0-%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-harry-potter-harry-ron-hermione-i69614.jpg",
  },
  {
    movieID: "m3",
    title: "The Lord Of The Rings",
    imgLink:
      "https://static.posters.cz/image/750/posters/lord-of-the-rings-fellowship-i11723.jpg",
  },
  {
    movieID: "m4",
    title: "Batman 1",
    imgLink:
      "https://image.shutterstock.com/image-vector/vampire-horror-logo-icon-vector-260nw-1768794029.jpg",
  },
  {
    movieID: "m5",
    title: "Harry Potter",
    imgLink:
      "https://static.posters.cz/image/750/%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%BC%D0%B0%D1%81%D0%BE%D0%B2%D0%B0-%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-harry-potter-harry-ron-hermione-i69614.jpg",
  },
  {
    movieID: "m6",
    title: "The Lord Of The Rings",
    imgLink:
      "https://static.posters.cz/image/750/posters/lord-of-the-rings-fellowship-i11723.jpg",
  },
];

const HomePage = (props) => {
  let [movies, setMovies] = useState([]);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    axios
      .get("http://localhost:5000/public-library")
      .then((data) => {
        setMovies(data.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
    // setIsLoading(false);
  }, []);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (!isLoading && movies.length > 0) {
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
  } else if (!isLoading && error) {
    content = <p>{error.message}</p>;
  }

  return (
    <div className={styles["home-page"]}>
      <h1 className={styles.title}>People are watching...</h1>
      {content}
    </div>
  );
};

export default HomePage;
