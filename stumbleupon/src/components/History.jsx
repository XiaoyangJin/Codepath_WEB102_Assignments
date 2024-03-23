import React from 'react';
import '../css/History.css';
import HistoryCard from './HistoryCard';

const History = ({ history }) => {
    return (
        <div className="history">
            <div className='history__title'>Check your history here: </div>
            {history.map((item, index) => (
                <HistoryCard key={index} imageInfo={item} />
            ))}
        </div>
    );
}

export default History;
