import React, { useContext, useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import userContext from "../../../context/user-context";
import getNavigation from "../../../utils/nav-links";
import MobileNav from "../../MobileNav/MobileNav";
import Backdrop from "../../UI/Backdrop";
import Badge from "../../UI/Badge";
import UserBadge from "../../UI/UserBadge";
import styles from "./Header.module.scss";
import ToggleButton from "../../UI/toggle-button";

const Header = (props) => {
  const { isLoggedIn, watchlist, username, image } = useContext(userContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const links = getNavigation(isLoggedIn, username);
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
      {!showMobileNav && <ToggleButton toggleShowMobileNav={toggleShowMobileNav} />}
      <div className={styles["logo-container"]}></div>
      <MobileNav opened={showMobileNav} toggleShowMobileNav={toggleShowMobileNav} />
      {showMobileNav && <Backdrop onClose={toggleShowMobileNav} />}
      <nav className={styles["nav__links"]}>
        {links.map((el) => {
          let displayedLink = el.title;
          if (el.title === "Watchlist") {
            displayedLink = (
              <Fragment>
                {el.title}
                {watchlist ? <Badge count={watchlist.length} /> : null}
              </Fragment>
            );
          }

          if (el.title === "Profile") {
            displayedLink = <UserBadge image={image} />;
          }

          return (
            <NavLink
              title={el.title}
              onClick={() => toggleShowMobileNav}
              className={(navData) =>
                navData.isActive ? `${styles.active} ${styles.link}` : styles.link
              }
              key={el.title}
              to={el.link}
            >
              {displayedLink}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
