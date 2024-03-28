import React from 'react';
import '../css/History.css';
import HistoryCard from './HistoryCard';

// In History.jsx
const History = ({ history, clearHistory }) => {
    return (
        <div className="history">
            <div className='history__title'>Check your history here: </div>

            {history.length > 0 && (
                <button onClick={clearHistory} className="clear-history-btn">
                    Clear History
                </button>
            )}

            {history.map((item, index) => (
                <HistoryCard key={index} imageInfo={item} />
            ))}
        </div>
    );
}


export default History;
