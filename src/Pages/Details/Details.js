import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import Loader from "../../Components/Loader/Loader";
import { useAxios } from "../../Custom Hooks/use-axios";
import imdbIcon from "../../Assets/imdb2.png"

const Details = () => {
  const params = useParams();
  const { movieID } = params;
  const [movie, setMovie] = useState();
  const { error, isLoading, sendRequest: getMovie } = useAxios();

  useEffect(() => {
    const loadMovie = async () => {
      let response = await getMovie(`movies/${movieID}`);
      console.log(response);
      if (response) {
        setMovie(response.movie);
      }
    };
    loadMovie();
  }, [movieID, getMovie,]);

  let ratings;
  if (movie && movie.Ratings) {
    ratings = movie.Ratings.map((el) => el.Value);
  }

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <p>{error}</p>;
  } else if (!error && !isLoading && movie) {
    return (
      <div className={styles.details}>
        <div className={styles.leftside}>
          <img src={movie.Poster} alt=""></img>
          <p>Genre: {movie.Genre}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Year: {movie.Year}</p>
        </div>

        <div className={styles.rightside}>
          <h1>{movie.Title}</h1>
          {ratings ? (
            <div className={styles.ratings}>
              <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">
                <img
                  title="View on IMDB"
                  className={styles.img}
                  alt="pic"
                  src={imdbIcon}
                />
              </a>
              <p className={`${styles.rating} ${styles.imdb}`}>{ratings[0]}</p>
              <p className={styles.rating}>Rotten Tomatoes: {ratings[1]}</p>
              <p className={styles.rating}>Metacritic: {ratings[2]}</p>
            </div>
          ) : null}
          <p>{movie.Plot}</p>
          <p>Director: {movie.Director}</p>
          <p>Writer: {movie.Writer}</p>
          <p>Stars: {movie.Actors}</p>
          <p>Boxoffice: {movie.BoxOffice}</p>
          <p>Country: {movie.Country}</p>
          <div className={styles.buttons}>
            <button className={styles.addButtonWatch}>ADD TO WATCHLIST</button>

            <button className={styles.addButtonSeen}>
              ADD TO ALREADY WATCHED
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Details;
