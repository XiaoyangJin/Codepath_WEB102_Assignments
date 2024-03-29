import React, { useState } from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Pet Finder</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="a humburger button which can toggle nav bar menu"
                    onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><a href='#about'>Dashboard</a></li>
                    <li><a href='#experience'>Search</a></li>
                    <li><a href='#projects'>About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;