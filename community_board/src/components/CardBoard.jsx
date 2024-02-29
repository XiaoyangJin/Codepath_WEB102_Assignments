import React from "react";

const CardBoard = () => {
    return (
        <div className="CardBoard">
            <body>
                <main class="main">
                    <h2 class="main__title">Cats in the News</h2>
                    <div class="cards">
                        <div class="card">
                            <img src="https://placekitten.com/g/200/100" alt="A random cat come from placekitten" />
                            <h3 class="card_title">Cat Using iPad</h3>
                            <p class="card__text">Forget iPad kids, because iPad cats are the new concern among internet users who
                                have recently witnessed a pet using the touchscreen device.</p>
                            <a class="card__link" href="https://www.newsweek.com/owner-shocked-find-cat-ipad-1864964">Read More</a>
                        </div>
                        <div class="card">
                            <img src="http://placekitten.com/g/200/100" alt="A random cat come from placekitten" />
                            <h3 class="card_title">Therapy Cat</h3>
                            <p class="card__text">Who says that only dogs can go out for walks? This one-eared cat would certainly
                                disagree, as he loves nothing more than heading out for a stroll with his owner and meeting new
                                people. As Kat Curtis takes Uno out for a walk around three to five times a week, he rarely misses
                                an
                                opportunity to say hello and make new friends, as she told Newsweek that he just "loves attention"
                                from everyone.</p>
                            <a class="card__link"
                                href="https://www.newsweek.com/therapy-cat-befriends-toddler-during-walk-1863570">Read More</a>
                        </div>
                        <div class="card">
                            <img src="http://placekitten.com/g/200/100" alt="A random cat come from placekitten" />
                            <h3 class="card_title">Thermal Pictures of Cat</h3>
                            <p class="card__text">Acat owner who recently got a new thermal camera decided there was only one
                                perfect model to test it out on—his cat.</p>
                            <a class="card__link"
                                href="https://www.newsweek.com/man-uses-thermal-camera-takes-cat-pictures-1862881">Read More</a>
                        </div>
                        <div class="card">
                            <img src="http://placekitten.com/g/200/100" alt="A random cat come from placekitten" />
                            <h3 class="card_title">Thermal Pictures of Cat</h3>
                            <p class="card__text">Acat owner who recently got a new thermal camera decided there was only one
                                perfect model to test it out on—his cat.</p>
                            <a class="card__link"
                                href="https://www.newsweek.com/man-uses-thermal-camera-takes-cat-pictures-1862881">Read More</a>
                        </div>
                    </div>
                </main>
            </body>
        </div>
    )
}

export default CardBoard;