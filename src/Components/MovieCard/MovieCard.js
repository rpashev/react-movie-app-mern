import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
import noPoster from "../../Assets/no-poster-available.jpg";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../Context/user-context";
import { CSSTransition } from "react-transition-group";
import { useAxios } from "../../Custom Hooks/use-axios";

const MovieCard = (props) => {
  let imgLink = props.imgLink;
  if (imgLink === "N/A") {
    imgLink = noPoster;
  }
  const { isLoggedIn, watchlist, seenlist, addToList, token } =
    useContext(AuthContext);
  const [showActions, setShowActions] = useState(false);
  const [movieWasAdded, setMovieWasAdded] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isInSeenlist, setIsInSeenlist] = useState(false);

  useEffect(() => {
    if (isLoggedIn && watchlist) {
      if (watchlist.includes(props.movieID)) {
        setIsInWatchlist(true);
      }
      if (seenlist.includes(props.movieID)) {
        setIsInSeenlist(true);
      }
    }
  }, [watchlist, seenlist, props.movieID, isLoggedIn]);

  const {
    error: errorListOperation,
    isLoading: isLoadingListOperation,
    sendRequest: add,
  } = useAxios();

  const addToUserList = async (list) => {
    let response = await add({
      url: `/user/${list}`,
      method: "POST",
      data: { IMDBId: props.movieID },
      headers: { Authorization: "Bearer " + token },
    });
    if (!response) {
      return;
    }
    if (list === "watchlist") {
      setIsInWatchlist(true);
    } else if (list === "seenlist") {
      setIsInSeenlist(true);
    }
    addToList(props.movieID, list);
    setMovieWasAdded(true);
    setTimeout(() => setMovieWasAdded(false), 1200);
  };

  return (
    <div
      className={styles.card}
      onMouseOver={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {errorListOperation && showActions && (
        <p className={styles.error}>{errorListOperation}</p>
      )}
      <CSSTransition
        in={movieWasAdded}
        mountOnEnter
        unmountOnExit
        timeout={400}
        classNames={{
          exitActive: styles["fade-exit-active"],
        }}
      >
        <p className={styles.success}>The movie was added!</p>
      </CSSTransition>

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
            <div
              className={styles["watchlist-icon"]}
              title="Add to watchlist"
              onClick={addToUserList.bind(null, "watchlist")}
            >
              <span>+</span>
            </div>
          )}
          {!isInSeenlist && (
            <div
              className={styles["seenlist-icon"]}
              title="Mark as watched"
              onClick={addToUserList.bind(null, "seenlist")}
            ></div>
          )}
          {isInWatchlist && (
            <div
              className={styles["watchlist-icon-checked"]}
              title="This movie is in your watchlist!"
            >
              ✓
            </div>
          )}
          {isInSeenlist && (
            <div
              className={styles["seenlist-icon-checked"]}
              title="This movie is marked as watched!"
            ></div>
          )}
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
