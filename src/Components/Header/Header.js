import React from "react";
import { NavLink } from 'react-router-dom'
import getNavigation from '../../Utils/nav-links'
import styles from './Header.module.css'

const Header = (props) => {
    const links = getNavigation(0);

  return (
    <header className={styles.header}>

    {
        links.map(el => {
            return (
                <NavLink exact activeClassName={styles.active} className={styles.link}
                    key={el.title}
                    to={el.link}
                >
                    {el.title}
                </NavLink>
            )
        })
    }

</header>
    )
};

export default Header;
