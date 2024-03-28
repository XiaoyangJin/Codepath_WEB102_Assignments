import '../css/BanList.css';

const BanList = ({ banList, removeBan }) => {
    return (
        <div className="banList">
            <div className="banList__title">Ban List</div>
            <ul className="banList__description">
                {banList.map((item, index) => (
                    <li key={index} onClick={() => removeBan(item)}>
                        {item} (click to remove)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BanList;
