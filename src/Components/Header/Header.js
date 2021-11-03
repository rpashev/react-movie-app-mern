import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../../Context/user-context";
import getNavigation from "../../Utils/nav-links";
import styles from "./Header.module.scss";
// import logo from "../../Assets/logo.png";

const Header = (props) => {
  const { user } = useContext(userContext);
  const links = getNavigation(user);

  return (
    <header className={styles.header}>
      <div className={styles["logo-container"]}></div>
      <div className={styles["nav__links"]}>
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
      </div>
    </header>
  );
};

export default Header;
