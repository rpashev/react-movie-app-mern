import styles from "./MobileNav.module.scss";
import getNavLinks from "../../Utils/nav-links";
import { useContext } from "react";
import AuthContext from "../../Context/user-context";
import { NavLink } from "react-router-dom";

const MobileNav = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navLinks = getNavLinks(isLoggedIn);

  return (
    <nav className={styles["mobile-nav"]}>
      <div className={styles["mobile-nav__items"]}>
        {navLinks.map((link) => {
          return (<NavLink
            exact
            activeClassName={styles.active}
            className={styles["mobile-nav__item"]}
            key={link.title}
            to={link.link}
          >
            {link.title}
          </NavLink>);
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
