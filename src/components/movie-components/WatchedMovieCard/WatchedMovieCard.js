import { Link } from "react-router-dom";
import styles from "./WatchedMovieCard.module.scss";

const WatchedMovieCard = (props) => {
  return (
    <div className={styles.card}>
      <Link
        to={`/details/${props.movieID}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={props.imgLink} alt="poster" />
        <div className={styles.info}>
          <h4>{props.title}</h4>
          <div>
            <span>{props.year} | </span>
            <span>{props.runtime} | </span>
            <span>{props.genre}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WatchedMovieCard;
