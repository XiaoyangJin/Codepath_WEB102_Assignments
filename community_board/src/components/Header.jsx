import React from "react";

const Header = () => {
    return (
        <div className="Header">
            <header class="header">
                <div class="header__top">
                    <img src="src/images/BostonLogo.jpg" alt="A random cat come from placekitten as the logo" />
                    <h1 class="header__title">Boston Visit Strategy</h1>
                </div>
                <nav class="header__menu">
                    <ul class="header__menu__list">
                        <li class="header__menu__item"><a href="https://www.boston-discovery-guide.com/boston-map.html">Boston Map</a></li>
                        <li class="header__menu__item"><a href="/">All Places</a></li>
                        <li class="header__menu__item"><a href="https://www.nomadicmatt.com/travel-guides/united-states-travel-guide/boston/">More Info</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;