import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../../Context/user-context";
import getNavigation from "../../Utils/nav-links";
import MobileNav from "../MobileNav/MobileNav";
import styles from "./Header.module.scss";
// import logo from "../../Assets/logo.png";

const Header = (props) => {
  const { isLoggedIn } = useContext(userContext);
  const links = getNavigation(isLoggedIn);

  return (
    <header className={styles.header}>
      <button className={styles["toggle-button"]}>
        <span className={styles["toggle-button__bar"]}></span>
        <span className={styles["toggle-button__bar"]}></span>
        <span className={styles["toggle-button__bar"]}></span>
      </button>
      <div className={styles["logo-container"]}></div>
      <nav className={styles["nav__links"]}>
        {links.map((el) => {
          return (
            <NavLink
              exact
              activeClassName={styles.active}
              className={styles.link}
              key={el.title}
              to={el.link}
            >
              {el.title}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
