import styles from "./MobileNav.module.scss";
import getNavLinks from "../../utils/nav-links";
import { useContext } from "react";
import AuthContext from "../../context/user-context";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Fragment } from "react";
import Badge from "../UI/Badge";

const MobileNav = (props) => {
  const { isLoggedIn, watchlist, username } = useContext(AuthContext);
  const navLinks = getNavLinks(isLoggedIn, username);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.opened}
      timeout={300}
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
            const watchlistContent = (
              <Fragment>
                {link.title}
                {watchlist ? <Badge count={watchlist.length}/> : null}
              </Fragment>
            );

            return (
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? `${styles.active} ${styles["mobile-nav__item"]}`
                    : styles["mobile-nav__item"]
                }
                key={link.link}
                to={link.link}
              >
                {link.title === "Watchlist" ? watchlistContent : link.title}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </CSSTransition>
  );
};

export default MobileNav;
