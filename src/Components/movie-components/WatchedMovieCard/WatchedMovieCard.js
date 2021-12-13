import { Link } from "react-router-dom";
import styles from "./WatchedMovieCard.module.scss";

const WatchedMovieCard = (props) => {
  return (
    <Link to={`/details/${props.movieID}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.card}>
        <img src={props.imgLink} />
        <div className={styles.info}>
          <h4>{props.title}</h4>
          <div>
            <span>{props.year} | </span>
            <span>{props.runtime} | </span>
            <span>{props.genre}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WatchedMovieCard;
