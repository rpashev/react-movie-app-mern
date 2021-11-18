import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
import noPoster from "../../Assets/no-poster-available.jpg";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../Context/user-context";
import { CSSTransition } from "react-transition-group";

const MovieCard = (props) => {
  let imgLink = props.imgLink;
  if (imgLink === "N/A") {
    imgLink = noPoster;
  }
  const { isLoggedIn, watchlist, seenlist } = useContext(AuthContext);
  const [showActions, setShowActions] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isInSeenlist, setIsInSeenlist] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      if (watchlist.includes(props.movieID)) {
        setIsInWatchlist(true);
      }
      if (seenlist.includes(props.movieID)) {
        setIsInSeenlist(true);
      }
    }
  }, [watchlist, seenlist, props.movieID, isLoggedIn]);

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
          {!isInWatchlist && (
            <div className={styles["watchlist-icon"]} title="Add to watchlist">
              <span>+</span>
            </div>
          )}
          {!isInSeenlist && (
            <div
              className={styles["seenlist-icon"]}
              title="Mark as watched"
            ></div>
          )}
          {isInWatchlist && <div className={styles["watchlist-icon-checked"]} title="This movie is in your watchlist!">✓</div>}
          {isInSeenlist && <div className={styles["seenlist-icon-checked"]} title="This movie is marked as watched!"></div>}

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
