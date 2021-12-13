import { Fragment } from "react/cjs/react.production.min";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <Fragment>
      <h2 className={styles.title}>Why choose our service?</h2>
      <ul className={styles.features}>
        <li className={styles.feature}>
          <ion-icon name="search-outline"></ion-icon>
          <p>Use the OMDB database to find any movie or tv series</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="build-outline"></ion-icon>
          <p>
            Build your own watchlist and keep track of movies you've watched
          </p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="eye-outline"></ion-icon>
          <p>Choose a movie and view its most important details</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="people-outline"></ion-icon>
          <p>See what other users are watching in the "Explore" section</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="person-circle-outline"></ion-icon>
          <p>Customize your profile by uploading your own avatar</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="phone-portrait-outline"></ion-icon>
          <p>Use the app from any device: desktop, tablet or mobile</p>
        </li>
      </ul>
    </Fragment>
  );
};

export default Features;
