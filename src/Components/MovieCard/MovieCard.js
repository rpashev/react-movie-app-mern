import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
import noPoster from "../../Assets/no-poster-available.jpg";

const MovieCard = (props) => {
  let imgLink = props.imgLink;
  if (imgLink === "N/A") {
    imgLink = noPoster;
  }
  return (
    <div className={styles.card}>
      <Link to={`/details/${props.movieID}`}>
        {" "}
        <img
          alt="No poster available"
          className={styles.image}
          src={imgLink}
        ></img>
        <div className={styles.title}>
          <p>{props.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
