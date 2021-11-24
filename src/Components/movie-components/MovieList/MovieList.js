import React, { useEffect, useState, useContext } from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "../../movie-components/MovieCard/MovieCard";
import Loader from "../../UI/Loader";
import { useAxios } from "../../../custom-hooks/use-axios";
import AuthContext from "../../../context/user-context";
import WatchlistMovieCard from "../../movie-components/WatchlistMovieCard/WatchlistMovieCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MovieList = (props) => {
  const [movies, setMovies] = useState();
  const { isLoading, error, sendRequest: loadList } = useAxios();

  const { token } = useContext(AuthContext);
  const [deletedMovieId, setDeletedMovieId] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await loadList({
        url: `/${props.url}`,
        headers: {
          Authorization: props.withAuth && token ? `Bearer ${token}` : null,
        },
      });
      setMovies(response);
    };
    loadMovies();
  }, [props.url, token, props.withAuth, loadList]);

  useEffect(() => {
    if (props.watchlist && movies && deletedMovieId !== null) {
      const updateMovies = movies.filter(
        (movie) => movie.IMDBId !== deletedMovieId
      );

      setMovies(updateMovies);
    }
  }, [deletedMovieId, props.watchlist]);

  const onDeletedMovie = (movieId) => {
    setDeletedMovieId(movieId);
  };

  let movieList;
  if (props.watchlist && movies && movies.length > 0 && !error) {
    movieList = (
      <TransitionGroup component={null}>
        {movies.map((movie) => {
          return (
            <CSSTransition
              key={movie._id}
              timeout={200}
              classNames={{
                enter: styles["slide-enter"],
                enterActive: styles["slide-enter-active"],
                exit: styles["slide-exit"],
                exitActive: styles["slide-exit-active"],
              }}
            >
              <WatchlistMovieCard
                // key={movie._id}
                title={movie.title}
                imgLink={movie.poster}
                movieID={movie.IMDBId}
                year={movie.year}
                runtime={movie.runtime}
                genre={movie.genre}
                actors={movie.actors}
                plot={movie.plot}
                onDeleted={onDeletedMovie}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  } else if (!props.watchlist && movies && movies.length > 0 && !error) {
    movieList = movies.map((movie) => {
      return (
        <MovieCard
          key={movie._id}
          title={movie.title}
          imgLink={movie.poster}
          movieID={movie.IMDBId}
        />
      );
    });
  }

  if (isLoading) {
    return <Loader />;
  } else if (movies && movies.length > 0 && !error) {
    return (
      <div
        component="div"
        className={`${styles.list} ${props.watchlist ? styles.watchlist : ""}`}
      >
        {movieList}
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
