import React from "react";

const Card = (props) => {
    return (
        <div className="card__grid__container">
            <div className="card">
                <div className="card__left"></div>
                <div className="card__front">
                    <h3 className="card__question">{props.question}</h3>
                </div>
                <div className="card__back">
                    <h3 className="card__answer">{props.answer}</h3>
                </div>
                <div className="card__right"></div>
            </div>
        </div>
    )
}

export default Card;