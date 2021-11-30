import React, { useContext, useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import userContext from "../../../context/user-context";
import getNavigation from "../../../utils/nav-links";
import MobileNav from "../../MobileNav/MobileNav";
import Backdrop from "../../UI/Backdrop";
import Badge from "../../UI/Badge";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { isLoggedIn, watchlist } = useContext(userContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const links = getNavigation(isLoggedIn);
  const location = useLocation();

  useEffect(() => {
    if (!showMobileNav) {
      return;
    }
    setShowMobileNav(false);
  }, [location.key]);

  const toggleShowMobileNav = (e) => {
    setShowMobileNav((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      {!showMobileNav && (
        <button
          className={styles["toggle-button"]}
          onClick={toggleShowMobileNav}
        >
          <span className={styles["toggle-button__bar"]}></span>
          <span className={styles["toggle-button__bar"]}></span>
          <span className={styles["toggle-button__bar"]}></span>
        </button>
      )}
      <div className={styles["logo-container"]}></div>
      <MobileNav opened={showMobileNav} />
      {showMobileNav && <Backdrop onClose={toggleShowMobileNav} />}
      <nav className={styles["nav__links"]}>
        {links.map((el) => {
          
          const watchlistContent = (
            <Fragment>
              {el.title}
              {watchlist ? <Badge count={watchlist.length} /> : null}
            </Fragment>
          );
          return (
            <NavLink
              onClick={() => toggleShowMobileNav}
              exact
              activeClassName={styles.active}
              className={styles.link}
              key={el.title}
              to={el.link}
            >
              {el.title === "Watchlist" ? watchlistContent : el.title}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
