import { Link } from "react-router-dom";
import styles from "./MovieCardWatchlist.module.scss";
import noPoster from "../../Assets/no-poster-available.jpg";

const MovieCardWatchlist = (props) => {
  let imgLink = props.imgLink;
  if (imgLink === "N/A") {
    imgLink = noPoster;
  }
  return (
    <div className={styles.card}>
      <Link to={`/details/${props.movieID}`}>
        <div className={styles["img-container"]}>
          <img
            alt="No poster available"
            className={styles.image}
            src={imgLink}
          ></img>
        </div>
        <div className={styles["movie-info"]}>
          <p className={styles.title}>
            {props.title}
          </p>
          <div>
            <span>{props.year}  |  </span>
            <span>{props.runtime}  |  </span>
            <span>{props.genre}</span>
          </div>
          <p>{props.actors}</p>
          <p>{props.plot}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCardWatchlist;
