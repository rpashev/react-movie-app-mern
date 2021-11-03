import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

const MovieCard = (props) => {
  return (
    <div className={styles.card}>
      <Link to={`/details/${props.movieID}`}>
        {" "}
        <img
          alt="No poster available"
          className={styles.image}
          src={props.imgLink}
        ></img>
        <div className={styles.title}>
          <p>{props.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
