import styles from "./MobileNav.module.scss";
import getNavLinks from "../../Utils/nav-links";
import { useContext } from "react";
import AuthContext from "../../Context/user-context";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const MobileNav = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navLinks = getNavLinks(isLoggedIn);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.opened}
      timeout={200}
      classNames={{
        enter: styles["slide-enter"],
        enterActive: styles["slide-enter-active"],
        exit: styles["slide-exit"],
        exitActive: styles["slide-exit-active"],
      }}
    >
      <nav className={styles["mobile-nav"]}>
        <div className={styles["mobile-nav__items"]}>
          {navLinks.map((link) => {
            return (
              <NavLink
                exact
                activeClassName={styles.active}
                className={styles["mobile-nav__item"]}
                key={link.title}
                to={link.link}
              >
                {link.title}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </CSSTransition>
  );
};

export default MobileNav;
