import styles from "./Badge.module.scss";
import { CSSTransition } from "react-transition-group";

const Badge = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.count}
      timeout={300}
      classNames={{
        enter: styles["bump-enter"],
        enterActive: styles["bump-enter-active"],
      }}
    >
      <span className={`${styles.badge} ${props.mobile ? styles.mobile : ""}`}>
        {props.count}
      </span>
    </CSSTransition>
  );
};

export default Badge;
