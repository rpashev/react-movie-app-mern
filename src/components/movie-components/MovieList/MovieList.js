import React, { useEffect, useState, useContext } from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "../../movie-components/MovieCard/MovieCard";
import Loader from "../../UI/Loader";
import { useAxios } from "../../../custom-hooks/use-axios";
import AuthContext from "../../../context/user-context";
import WatchlistMovieCard from "../../movie-components/WatchlistMovieCard/WatchlistMovieCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import WatchedMovieCard from "../WatchedMovieCard/WatchedMovieCard";

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { isLoading, error, sendRequest: loadList } = useAxios();

  const { token } = useContext(AuthContext);
  const [deletedMovieId, setDeletedMovieId] = useState(null);

  // initial load of movies
  useEffect(() => {
    const loadMovies = async () => {
      const response = await loadList({
        url: `/${props.url}`,
        headers: {
          Authorization: props.withAuth && token ? `Bearer ${token}` : null,
        },
      });

      if (response) {
        setMovies(response);
        setFilteredMovies(response);
      }
    };
    loadMovies();
  }, [props.url, token, props.withAuth, loadList]);

  //updating lists locally on deleted movie
  useEffect(() => {
    if (props.watchlist && movies && deletedMovieId !== null) {
      const updateMovies = movies.filter((movie) => movie.IMDBId !== deletedMovieId);

      setMovies(updateMovies);
      const updatedFilteredMovies = filteredMovies.filter(
        (movie) => movie.IMDBId !== deletedMovieId
      );
      setFilteredMovies(updatedFilteredMovies);
    }
  }, [deletedMovieId, props.watchlist]);

  //filtering movies by title on search input
  useEffect(() => {
    if (movies.length === 0) {
      return;
    }
    if (props.query === "" && movies) {
      setFilteredMovies(movies);
      console.log(filteredMovies);
      return;
    }

    const updatedMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(props.query.toLowerCase())
    );

    setFilteredMovies(updatedMovies || []);
  }, [props.query]);

  // indicates there is a movie deleted
  const onDeletedMovie = (movieId) => {
    setDeletedMovieId(movieId);
  };

  let movieList;
  if (props.watchlist && filteredMovies.length > 0 && !error) {
    movieList = (
      <TransitionGroup component={null}>
        {filteredMovies.map((movie) => {
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
  } else if (props.watched && filteredMovies.length > 0 && !error) {
    movieList = filteredMovies.map((movie) => {
      return (
        <WatchedMovieCard
          key={movie._id}
          title={movie.title}
          imgLink={movie.poster}
          movieID={movie.IMDBId}
          year={movie.year}
          runtime={movie.runtime}
          genre={movie.genre}
          actors={movie.actors}
        />
      );
    });
  } else if (!props.watchlist && !props.watched && filteredMovies.length > 0 && !error) {
    movieList = filteredMovies.map((movie) => {
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
  } else if (filteredMovies && filteredMovies.length > 0 && !error) {
    return (
      <div
        component="div"
        className={`${styles.list} ${props.watchlist ? styles.watchlist : ""} ${
          props.watched ? styles.seenlist : ""
        }`}
      >
        {movieList}
      </div>
    );
  } else if (error) {
    return <p className={styles.error}>{error}</p>;
  } else if (filteredMovies?.length === 0 && !error && movies.length > 0) {
    return <p>No movies found!</p>;
  } else if (movies.length === 0 && !error) {
    return <p>No movies in this list yet!</p>;
  } else {
    return null;
  }
};

export default MovieList;
