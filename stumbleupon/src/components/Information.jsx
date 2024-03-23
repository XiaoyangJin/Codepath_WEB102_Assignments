import React, { useState } from 'react';
import '../css/Information.css';
import ImageInfo from "./ImageInfo";

const Information = () => {
    const [fetchTrigger, setFetchTrigger] = useState(false);

    const randomImage = () => {
        setFetchTrigger(prev => !prev); // Toggle to trigger useEffect in ImageInfo
    };

    return (
        <div className="information">
            <h1 className="title">Welcome to Harvard Gallery!</h1>
            <div className="subtitle">Discover some amazing master pieces here!</div>
            <div className="emoji">🎨 🖼️ 📷 🗿 🗺️ 🧑‍🎨 🌌 🧩</div>
            <ImageInfo triggerFetch={fetchTrigger} />
            <button className="discover__btn" onClick={randomImage}>🔄 Discover</button>
        </div>
    );
}

export default Information;
