import { useState, useEffect } from "react";
import Loader from "../../components/UI/Loader";
import MovieCard from "../../components/movie-components/MovieCard/MovieCard";
import OmdbPromo from "../../components/database-page/Omdb";
import { useAxios } from "../../custom-hooks/use-axios";
import styles from "./Database.module.scss";

const Database = (props) => {
  const [movies, setMovies] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const searchQueryHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const { error: hasError, isLoading, sendRequest: getMovies } = useAxios();
  const [error, setError] = useState(hasError);

  const loadMovies = async () => {
    setError(null);

    const response = await getMovies({
      url: `http://www.omdbapi.com/?apikey=6b7999b9&s=${searchQuery}`,
    });
    if (!response) {
      setError("Could not connect to database!");
      return;
    }
    if (response.Error === "Too many results.") {
      setError(response.Error + " Please enter a more specific keyword!");
      return;
    } else if (response.Error === "Movie not found!") {
      setError(response.Error);
    } else if (!response.Error) {
      setError(null);
    }
    let resultMovies = await response.Search;
    setMovies(resultMovies);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    const timer = setTimeout(() => loadMovies(), 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className={styles["database-page"]}>
      <h1>Database</h1>
      <div className={styles["search-container"]}>
        <input
          onChange={searchQueryHandler}
          placeholder="Search movie database..."
          value={searchQuery}
        ></input>
      </div>
      {isLoading && <Loader />}
      {!isLoading && error && <p className={styles.error}>{error}</p>}
      {!isLoading && !error && movies && movies.length > 0 && (
        <div className={styles.list}>
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                imgLink={movie.Poster}
                movieID={movie.imdbID}
              />
            );
          })}
        </div>
      )}
      {!isLoading && !movies && !error && <OmdbPromo />}
    </div>
  );
};

export default Database;
