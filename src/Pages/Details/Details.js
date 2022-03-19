import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import Loader from "../../components/UI/Loader";
import { useAxios } from "../../custom-hooks/use-axios";
import AuthContext from "../../context/user-context";
import imdbIcon from "../../assets/imdb2.png";
import Button from "../../components/UI/Button";
import noPoster from "../../assets/no-poster-available.jpg";

const Details = () => {
  const params = useParams();
  const { movieID } = params;
  const [movie, setMovie] = useState();

  const { error, isLoading, sendRequest: getMovie } = useAxios();
  const { isLoggedIn, token, addToList, removeFromList } =
    useContext(AuthContext);

  useEffect(() => {
    const loadMovie = async () => {
      let response = await getMovie({
        url: `movies/${movieID}`,
        headers: {
          Authorization: token ? "Bearer " + token : null,
        },
      });

      if (response) {
        setMovie(response.movie);
      }
    };
    loadMovie();
  }, [movieID, getMovie, token]);

  let ratings;
  if (movie && movie.Ratings) {
    ratings = movie.Ratings.map((el) => el.Value);
  }

  let imgLink;
  if (movie) {
    imgLink = movie.Poster === "N/A" ? noPoster : movie.Poster;
  }

  const {
    error: errorListOperation,
    isLoading: isLoadingListOperation,
    sendRequest: listOperation,
  } = useAxios();

  const addToUserList = async (list) => {
    let response = await listOperation({
      url: `/user/${list}`,
      method: "POST",
      data: { IMDBId: movieID },
      headers: { Authorization: "Bearer " + token },
    });
    if (!response) {
      return;
    }
    if (list === "watchlist") {
      setMovie((prevState) => ({ ...prevState, isInWatchlist: true }));
    } else if (list === "seenlist") {
      setMovie((prevState) => ({ ...prevState, isInSeenList: true }));
    }
    addToList(movieID, list);
  };

  const removeFromUserList = async (list) => {
    let response = await listOperation({
      url: `/user/${list}/${movieID}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });
    if (!response) {
      return;
    }
    if (list === "watchlist") {
      setMovie((prevState) => ({ ...prevState, isInWatchlist: false }));
    } else if (list === "seenlist") {
      setMovie((prevState) => ({ ...prevState, isInSeenList: false }));
    }
    removeFromList(movieID, list);
  };

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <p className={styles.error}>{error}</p>;
  } else if (!error && !isLoading && movie) {
    return (
      <div className={styles.details}>
        <div className={styles.leftside}>
          <img src={imgLink} alt=""></img>
          <p>
            <span className={styles.subtitle}>Genre: </span>
            {movie.Genre}
          </p>
          <p>
            <span className={styles.subtitle}>Runtime: </span>
            {movie.Runtime}
          </p>
          <p>
            <span className={styles.subtitle}>Year: </span>
            {movie.Year}
          </p>
        </div>

        <div className={styles.rightside}>
          <h1>{movie.Title}</h1>
          {ratings ? (
            <div className={styles.ratings}>
              <div className={`${styles.rating} ${styles["imdb-container"]}`}>
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
            </div>
          ) : null}
          <p>{movie.Plot}</p>
          <p>
            <span className={styles.subtitle}>Director: </span>
            {movie.Director}
          </p>
          <p>
            <span className={styles.subtitle}>Writer: </span>
            {movie.Writer}
          </p>
          <p>
            <span className={styles.subtitle}>Stars: </span>
            {movie.Actors}
          </p>
          <p>
            <span className={styles.subtitle}>Boxoffice: </span>
            {movie.BoxOffice}
          </p>
          <p>
            <span className={styles.subtitle}>Country: </span>
            {movie.Country}
          </p>
          {isLoggedIn && (
            <div className={styles.buttons}>
              {!movie.isInWatchlist && (
                <Button
                  yellow
                  type="button"
                  onClick={addToUserList.bind(null, "watchlist")}
                >
                  ADD TO WATCHLIST
                </Button>
              )}
              {movie.isInWatchlist && (
                <Button
                  danger
                  type="button"
                  onClick={removeFromUserList.bind(null, "watchlist")}
                >
                  REMOVE FROM WATCHLIST
                </Button>
              )}

              {!movie.isInSeenList && (
                <Button
                  dark
                  type="button"
                  onClick={addToUserList.bind(null, "seenlist")}
                >
                  ADD TO ALREADY WATCHED
                </Button>
              )}
              {movie.isInSeenList && (
                <Button
                  danger
                  type="button"
                  onClick={removeFromUserList.bind(null, "seenlist")}
                >
                  REMOVE FROM WATCHED
                </Button>
              )}
            </div>
          )}
          {errorListOperation && (
            <p className={styles.error}>{errorListOperation}</p>
          )}
          {isLoadingListOperation && <p>Loading...</p>}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Details;
