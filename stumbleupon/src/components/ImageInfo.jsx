import React, { useEffect, useState } from 'react';
import '../css/Information.css';

const ImageInfo = ({ triggerFetch, addToHistory, addBan }) => {
    const [imageData, setImageData] = useState(null);
    const apiKey = import.meta.env.VITE_APP_ACCESS_KEY;
    const handleBanClick = (attributeLabel, attributeValue) => {
        // Example of creating a string representation of what you want to ban
        const banEntry = `${attributeLabel}: ${attributeValue}`;
        addBan(banEntry);
    };


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
            <div onClick={() => handleBanClick('Title', imageData.title)} className="clickable-attribute">
                {imageData.title}
            </div>
            {imageData.people?.length > 0 && (
                <div onClick={() => handleBanClick('Artist', imageData.people.map(person => person.name).join(', '))} className="clickable-attribute">
                    {imageData.people.map(person => person.name).join(', ') || 'Unknown Artist'}
                </div>
            )}
            <div onClick={() => handleBanClick('Date', imageData.dated)} className="clickable-attribute">
                {imageData.dated || 'Unknown Date'}
            </div>
            <div onClick={() => handleBanClick('Culture', imageData.culture)} className="clickable-attribute">
                {imageData.culture || 'Unknown Culture'}
            </div>
            {/* Display the image */}
            {imageData.primaryimageurl && (
                <img src={`${imageData.primaryimageurl}?height=300&width=300`} alt="Artwork" />
            )}
        </div>

    );
};

export default ImageInfo;
