import React from "react";
import styles from "./Home.module.scss";
import MovieCard from "../../Components/MovieCard/MovieCard"

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
  return (
    <div className={styles["home-page"]}>
      <h1 className={styles.title}>People are watching...</h1>
      <div className={styles.list}>
        {DUMMY_DATA.map((movie) => {
          return (
            <MovieCard
              key={movie.movieID}
              title={movie.title}
              imgLink={movie.imgLink}
              movieID={movie.movieID}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
