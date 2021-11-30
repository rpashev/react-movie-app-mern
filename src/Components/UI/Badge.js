import styles from "./Badge.module.scss";

const Badge = (props) => {
  return <span className={styles.badge}>{props.count}</span>;
};

export default Badge;
