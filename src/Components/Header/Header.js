import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../../Context/user-context";
import getNavigation from "../../Utils/nav-links";
import styles from "./Header.module.css";

const Header = (props) => {
  const { user } = useContext(userContext);
  const links = getNavigation(user);

  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
