import React from "react";
import { useState } from "react";

const Card = (props) => {

    const [isFlip, setFlip] = useState(false);

    const flip = () => setFlip(!isFlip);

    return (
        <div className="card__grid__container">
            <div className={`card ${isFlip ? 'is-flipped' : ''} ${props.color}`} onClick={flip}>
                <div className="card__front">
                    <p className="level">{props.level}</p>
                    <h3 className="card__question">{props.question}</h3>
                </div>
                <div className="card__back">
                    <h3 className="card__answer">{props.answer}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card;