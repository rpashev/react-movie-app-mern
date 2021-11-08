import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import Loader from "../../Components/Loader/Loader";
import { useAxios } from "../../Custom Hooks/use-axios";
import imdbIcon from "../../Assets/imdb2.png";
import Button from "../../Components/UI/Button";
import noPoster from "../../Assets/no-poster-available.jpg";

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
        console.log(response)
        setMovie(response.movie);
      }
    };
    loadMovie();
  }, [movieID, getMovie]);

  let ratings;
  if (movie && movie.Ratings) {
    ratings = movie.Ratings.map((el) => el.Value);
  }
  let imgLink;
  if (movie) {
    imgLink = movie.Poster === "N/A" ? noPoster : movie.Poster;
  }

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <p>{error}</p>;
  } else if (!error && !isLoading && movie) {
    return (
      <div className={styles.details}>
        <div className={styles.leftside}>
          <img src={imgLink} alt=""></img>
          <p>Genre: {movie.Genre}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Year: {movie.Year}</p>
        </div>

        <div className={styles.rightside}>
          <h1>{movie.Title}</h1>
          {ratings ? (
            <div className={styles.ratings}>
              <div className={styles.rating}>
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    title="View on IMDB"
                    className={styles.img}
                    alt="pic"
                    src={imdbIcon}
                  />
                </a>
                <p className={styles.imdb}>{ratings[0]}</p>
              </div>

              {ratings[1] && (
                <p className={styles.rating}>Rotten Tomatoes: {ratings[1]}</p>
              )}
              {ratings[2] && (
                <p className={styles.rating}>Metacritic: {ratings[2]}</p>
              )}
            </div>
          ) : null}
          <p>{movie.Plot}</p>
          <p>Director: {movie.Director}</p>
          <p>Writer: {movie.Writer}</p>
          <p>Stars: {movie.Actors}</p>
          <p>Boxoffice: {movie.BoxOffice}</p>
          <p>Country: {movie.Country}</p>
          <div className={styles.buttons}>
            <Button primary type="button">
              ADD TO WATCHLIST
            </Button>

            <Button dark type="button">
              ADD TO ALREADY WATCHED
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Details;
