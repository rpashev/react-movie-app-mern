import styles from "./UserBadge.module.scss";

const UserBadge = (props) => {
  return (
    <div className={styles.userbadge}>
      <img src={props.image}></img>
    </div>
  );
};

export default UserBadge;
