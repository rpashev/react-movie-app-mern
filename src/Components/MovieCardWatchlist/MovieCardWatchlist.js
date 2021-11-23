import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import styles from "./MovieCardWatchlist.module.scss";
import noPoster from "../../Assets/no-poster-available.jpg";
import { CSSTransition } from "react-transition-group";
import { useAxios } from "../../Custom Hooks/use-axios";
import AuthContext from "../../Context/user-context";

const MovieCardWatchlist = (props) => {
  let imgLink = props.imgLink;
  if (imgLink === "N/A") {
    imgLink = noPoster;
  }
  const [showButton, setShowButton] = useState(false);
  const { token, removeFromList, seenlist, addToList } =
    useContext(AuthContext);
  const [isInSeenlist, setIsInSeenlist] = useState(false);

  useEffect(() => {
    if (props.movieID) {
      if (seenlist.includes(props.movieID)) {
        setIsInSeenlist(true);
      }
    }
  }, [seenlist, props.movieID]);

  const {
    error: errorRemoving,
    isLoading: isLoadingRemoving,
    sendRequest: removeFromWatchlist,
  } = useAxios();

  const {
    error: errorAdding,
    isLoading: isLoadingAdding,
    sendRequest: addToUserlist,
  } = useAxios();

  const addToSeenList = async () => {
    console.log("here");
    let response = await addToUserlist({
      url: `/user/seenlist`,
      method: "POST",
      data: { IMDBId: props.movieID },
      headers: { Authorization: "Bearer " + token },
    });
    if (!response) {
      return;
    }

    setIsInSeenlist(true);
    addToList(props.movieID, "seenlist");
  };

  const removeFromUserList = async () => {
    console.log("here");
    let response = await removeFromWatchlist({
      url: `/user/watchlist/${props.movieID}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });
    if (!response) {
      return;
    }
    removeFromList(props.movieID, "watchlist");
    props.onDeleted(props.movieID);
  };

  return (
    <div
      className={styles.card}
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      {errorRemoving && <p className={styles.error}>{errorRemoving}</p>}
      {errorAdding && <p className={styles.error}>{errorAdding}</p>}
      <div className={styles["actions-mobile"]}>
        <button
          className={styles["remove-button-mobile"]}
          title="Remove from watchlist"
          onClick={removeFromUserList}
        >
          Remove from watchlist
        </button>
        {!isInSeenlist && (
          <button
            className={styles["seenlist-button-mobile"]}
            title="Mark as watched"
            onClick={addToSeenList}
          >
            Mark as watched
          </button>
        )}
        {isInSeenlist && (
          <button
            className={styles["seenlist-button-mobile-checked"]}
            title="Movie is marked as watched"
          >
            Movie is marked as watched!
          </button>
        )}
      </div>

      <CSSTransition
        in={showButton}
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
        <div className={styles["action-icons"]}>
          <div
            className={styles["remove-icon"]}
            title="Remove from watchlist"
            onClick={removeFromUserList}
          ></div>
          {isInSeenlist && (
            <div
              className={styles["seenlist-icon-checked"]}
              title="This movie is marked as watched!"
            ></div>
          )}
          {!isInSeenlist && (
            <div
              className={styles["seenlist-icon"]}
              title="Mark as watched"
              onClick={addToSeenList}
            ></div>
          )}
        </div>
      </CSSTransition>
      <Link to={`/details/${props.movieID}`}>
        <div className={styles["img-container"]}>
          <img
            alt="No poster available"
            className={styles.image}
            src={imgLink}
          ></img>
        </div>
        <div className={styles["movie-info"]}>
          <p className={styles.title}>{props.title}</p>
          <div>
            <span>{props.year} | </span>
            <span>{props.runtime} | </span>
            <span>{props.genre}</span>
          </div>
          <p>{props.actors}</p>
          <p className={styles.plot}>{props.plot}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCardWatchlist;
