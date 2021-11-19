import { Link } from "react-router-dom";
import { useState, useContext } from "react";

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
  const { token, removeFromList } = useContext(AuthContext);

  const {
    error: errorRemoving,
    isLoading: isLoadingRemoving,
    sendRequest: removeFromWatchlist,
  } = useAxios();

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
      {errorRemoving && showButton && (
        <p className={styles.error}>{errorRemoving}</p>
      )}

      <button
        className={styles["remove-button-mobile"]}
        title="Remove from watchlist"
        onClick={removeFromUserList}
      >
        Remove from watchlist
      </button>

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
        <button
          className={styles["remove-button"]}
          title="Remove from watchlist"
          onClick={removeFromUserList}
        >
          Remove
        </button>
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
