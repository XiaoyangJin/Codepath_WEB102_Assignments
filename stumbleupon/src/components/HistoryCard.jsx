const HistoryCard = ({ imageInfo }) => {
    return (
        <div className="history-card">
            <img src={imageInfo.primaryimageurl} alt={imageInfo.title} style={{ maxWidth: "100px", height: "auto" }} />
            <div className="description">
                <strong>{imageInfo.title}</strong><br />
                {imageInfo.artist}<br />
                {imageInfo.date}<br />
                {imageInfo.culture}
            </div>
        </div>
    );
}

export default HistoryCard;
