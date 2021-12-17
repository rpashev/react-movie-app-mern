import styles from "./Search.module.scss";

const SearchInput = (props) => {

  const searchQueryHandler = (event) => {
    props.forwardQuery(event.target.value);
  };

  return (
    <div className={styles["search-container"]}>
      <input
        onChange={searchQueryHandler}
        placeholder="Search for movies..."
      ></input>
    </div>
  );
};

export default SearchInput;
