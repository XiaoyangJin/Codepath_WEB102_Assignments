import React from "react";
import { useState } from "react";
import Card from "./Card";

const Main = () => {
    const allCards = [
        { id: 1, question: "question1", answer: "answer1" },
        { id: 2, question: "question2", answer: "answer2" },
        { id: 3, question: "question3", answer: "answer3" }
    ];

    const [activeCardIndex, setActiveCardIndex] = useState(0);

    // Function to go to the previous card
    const prevCard = () => {
        setActiveCardIndex((prevIndex) => (prevIndex - 1 + allCards.length) % allCards.length);
    };

    // Function to go to the next card
    const nextCard = () => {
        setActiveCardIndex((prevIndex) => (prevIndex + 1) % allCards.length);
    };

    return (
        <div className="main">
            <Card question={allCards[activeCardIndex].question} answer={allCards[activeCardIndex].answer} />

            <button class="icon-button" onClick={prevCard}>
                <i class="gg-arrow-left"></i>
            </button>
            <button class="icon-button" onClick={nextCard}>
                <i class="gg-arrow-right"></i>
            </button>
        </div>
    )
}

export default Main;