import React, { useEffect, useState } from 'react';

const ImageInfo = ({ triggerFetch, addToHistory }) => {
    const [imageData, setImageData] = useState(null);
    const apiKey = import.meta.env.VITE_APP_ACCESS_KEY;

    useEffect(() => {
        const fetchRandomImage = async () => {
            const randomPage = Math.floor(Math.random() * 22412) + 1;
            const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=1&page=${randomPage}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.records && data.records.length > 0) {
                    setImageData(data.records[0]);
                    addToHistory(data.records[0]);
                    console.log(data.records[0]);
                }
            } catch (error) {
                console.error("Failed to fetch image: ", error);
            }
        };

        fetchRandomImage();

    }, [triggerFetch]);

    if (!imageData) {
        return <div>Loading...</div>;
    }

    // Display basic information and image using primaryimageurl or baseimageurl
    return (
        <div className="image__info">
            <div className="image__name">{imageData.title}</div>
            <div className="image__detail">
                <div className="image__detail-person">{imageData.people?.map(person => person.name).join(', ') || 'Unknown Artist'}</div>
                <div className="image__detail-date">{imageData.dated || 'Unknown Date'}</div>
                <div className="image__detail-culture">{imageData.culture || 'Unknown Culture'}</div>
            </div>
            {imageData.primaryimageurl ? (
                <img src={`${imageData.primaryimageurl}?height=300&width=300`} alt={imageData.title} />
            ) : (
                <div>No image available</div>
            )}
        </div>

    );
};

export default ImageInfo;
