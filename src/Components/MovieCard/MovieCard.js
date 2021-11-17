import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
import noPoster from "../../Assets/no-poster-available.jpg";
import { useContext, useState } from "react";
import AuthContext from "../../Context/user-context";
import { CSSTransition } from "react-transition-group";

const MovieCard = (props) => {
  let imgLink = props.imgLink;
  if (imgLink === "N/A") {
    imgLink = noPoster;
  }
  const { isLoggedIn } = useContext(AuthContext);
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <CSSTransition
        in={isLoggedIn && showActions}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={{
          enter: styles["slide-enter"],
          enterActive: styles["slide-enter-active"],
          exit: styles["slide-exit"],
          exitActive: styles["slide-exit-active"],
        }}
      >
        <div className={styles.actions}>
          <div className={styles["watchlist-icon"]} title="Add to watchlist">
            <span>+</span>
          </div>
          <div
            className={styles["seenlist-icon"]}
            title="Mark as watched"
          ></div>
        </div>
      </CSSTransition>

      <Link to={`/details/${props.movieID}`}>
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
