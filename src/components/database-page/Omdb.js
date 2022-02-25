import styles from "./Omdb.module.scss";

const OmdbPromo = () => {
  return (
    <div className={styles.omdb}>
      <h2>
        The movie database is powered by{" "}
        <a href="https://www.omdbapi.com/" target="blank">
          OMDB Api
        </a>
      </h2>
      <p>
        The OMDb API is a RESTful web service to obtain movie information, all
        content and images on the site are contributed and maintained by the
        users.
      </p>
      <h3>
        Get started with OMDB Api{" "}
        <a href="https://www.omdbapi.com/" target="blank">
          HERE
        </a>
      </h3>
    </div>
  );
};

export default OmdbPromo;
