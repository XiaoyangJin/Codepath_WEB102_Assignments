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
                    <p className="card__question">{props.question}</p>
                    <img src={props.question_src} alt={props.question_alt} />
                </div>
                <div className="card__back">
                    <p className="card__answer">{props.answer}</p>
                    <img src={props.answer_src} alt={props.answer_alt} />
                </div>
            </div>
        </div>
    )
}

export default Card;