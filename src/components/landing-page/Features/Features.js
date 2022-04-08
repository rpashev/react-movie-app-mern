import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.section}>
      <h2>Why choose our service?</h2>
      <ul className={styles.features}>
        <li className={styles.feature}>
          <ion-icon name="search-outline"></ion-icon>
          <h3>Large movie database</h3>
          <p>Use the OMDB database to find any movie or tv series that you can think of.</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="build-outline"></ion-icon>
          <h3>Build a watchlist</h3>
          <p>Build your own watchlist and keep track of movies you have watched.</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="eye-outline"></ion-icon>
          <h3>Movie details</h3>
          <p>Choose a movie and view its most important details including a plot summary.</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="people-outline"></ion-icon>
          <h3>See what's trending</h3>
          <p>Check out what our other users are watching in the "Explore" section.</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="person-circle-outline"></ion-icon>
          <h3>Customize your profile</h3>
          <p>Personalize your account with us by uploading your very own avatar.</p>
        </li>
        <li className={styles.feature}>
          <ion-icon name="phone-portrait-outline"></ion-icon>
          <h3>Full accessibility</h3>
          <p>Use the application from any device, be it desktop, tablet or mobile.</p>
        </li>
      </ul>
    </section>
  );
};

export default Features;
