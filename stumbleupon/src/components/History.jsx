import '../css/History.css';
import HistoryCard from './HistoryCard';

const History = () => {
    return (
        <div className="history">
            <div className='history__title'>Check your history here: </div>
            <HistoryCard />
        </div>
    )
}

export default History;
