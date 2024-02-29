import React from "react";

const Header = () => {
    return (
        <div className="Header">
            <header class="header">
                <div class="header__top">
                    <img src="http://placekitten.com/50/50" alt="A random cat come from placekitten as the logo" />
                    <h1 class="header__title">Cats on the Internet</h1>
                </div>
                <nav class="header__menu">
                    <ul class="header__menu__list">
                        <li class="header__menu__item"><a href="/">Feline Fun Facts</a></li>
                        <li class="header__menu__item"><a href="/">Cat Video Gallery</a></li>
                        <li class="header__menu__item"><a href="/">Cat Care Tips</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;