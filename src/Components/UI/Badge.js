import styles from "./Badge.module.scss";


const Badge = (props) => {
  return (
    <span className={`${styles.badge} ${props.mobile ? styles.mobile : ""}`}>
      {props.count}
    </span>
  );
};

export default Badge;
