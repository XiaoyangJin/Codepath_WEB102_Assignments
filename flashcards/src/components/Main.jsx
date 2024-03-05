import React from "react";
import { useState } from "react";
import Card from "./Card";
import '../css/DirecBtn.css';

const Main = () => {
    const allCards = [
        {
            id: 1, color: 'easy', level: 'easy',
            question: "What is Merge Sort",
            answer: "Merge Sort divides the array into two halves, recursively sorts them, and then merges the sorted halves.",
            answer_src: "src/images/merge-sort.png",
            answer_alt: "A picture that can illustrate what is merge sort"
        },
        {
            id: 2, color: 'medium', level: 'medium',
            question: "What is Stability in Sorting Algorithms?",
            answer: "Stability in sorting algorithms refers to the preservation of the original order of records with equal keys (values).",
            answer_src: "src/images/stable-sort.png",
            answer_alt: "A table that list in-place or stable for all sort"
        },
        {
            id: 3, color: 'hard', level: 'hard',
            question: "Why is Insertion Sort preferred over Quick Sort for small arrays?",
            answer: "Efficiency for Small Arrays, Adaptive Nature, In-Place and Stable",
            answer_src: "src/images/quick-sort.png",
            answer_alt: "A picture that can illustrate what is quick sort"
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
            <Card
                key={allCards[activeCardIndex].id}
                color={allCards[activeCardIndex].color}
                level={allCards[activeCardIndex].level}
                question={allCards[activeCardIndex].question}
                answer={allCards[activeCardIndex].answer}
                question_src={allCards[activeCardIndex].question_src}
                question_alt={allCards[activeCardIndex].question_alt}
                answer_src={allCards[activeCardIndex].answer_src}
                answer_alt={allCards[activeCardIndex].answer_alt}

            />

            <button className="icon-button" onClick={prevCard}>
                <i className="gg-arrow-left"></i>
            </button>
            <button className="icon-button" onClick={nextCard}>
                <i className="gg-arrow-right"></i>
            </button>
        </div>
    );
}

export default Main;
