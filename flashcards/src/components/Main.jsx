import React from "react";
import { useState } from "react";
import Card from "./Card";
import '../css/DirecBtn.css'

const Main = () => {
    const allCards = [
        {
            id: 1, question: "What is Merge Sort",
            answer: "Merge Sort divides the array into two halves, recursively sorts them, and then merges the sorted halves."
        },
        {
            id: 2, question: "What is Stability in Sorting Algorithms?",
            answer: "Stability in sorting algorithms refers to the preservation of the original order of records with equal keys (values)."
        },
        {
            id: 3, question: "Why is Insertion Sort preferred over Quick Sort for small arrays?",
            answer: "Efficiency for Small Arrays, Adaptive Nature, In-Place and Stable"
        }
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