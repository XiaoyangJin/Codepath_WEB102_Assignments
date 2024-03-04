import React from "react";

const Header = () => {
    return (
        <div className="Header">
            <div className="header">
                <div className="header__top">
                    <img src="src/images/leetcode_logo.png" alt="the leetcode logo"></img>
                    <h1 className="header__title">Leetcode Quiz Challenge</h1>
                </div>
                <div className="header__menu">
                    <ul className="header__menu__list">
                        <li className="header__menu__item">Algorithm</li>
                        <li className="header__menu__item">Data Structure</li>
                        <li className="header__menu__item">System Design</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;