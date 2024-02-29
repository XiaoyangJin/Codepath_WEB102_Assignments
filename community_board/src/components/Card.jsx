import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img_source} alt="A representative picture to this place" />
            <h3 class="card_title">{props.title}</h3>
            <p class="card__text">{props.desc}</p>
            <a class="card__link" href={props.link}>Read More</a>
        </div>
    )
}

export default Card;