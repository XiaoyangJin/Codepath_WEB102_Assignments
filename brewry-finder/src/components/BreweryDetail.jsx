import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import React from 'react';

function BreweryDetail() {
    let { breweryId } = useParams();
    const [brewery, setBrewery] = useState(null);

    useEffect(() => {
        async function fetchBrewery() {
            const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${breweryId}`);
            const data = await response.json();
            setBrewery(data);
        }

        fetchBrewery();
    }, [breweryId]);

    if (!brewery) return <p>Loading brewery details...</p>;

    return (
        <div className="brewery-detail">
            <h2 className="brewery-name">{brewery.name}</h2>
            <p className="brewery-type"><strong>Type:</strong> {brewery.brewery_type}</p>
            <p className="brewery-address">
                <strong>Address:</strong> {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}, {brewery.country}
            </p>
            <p className="brewery-phone"><strong>Phone:</strong> {brewery.phone}</p>
            {brewery.website_url && (
                <p className="brewery-website">
                    <strong>Website:</strong> <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
                </p>
            )}
        </div>
    );
}

export default BreweryDetail;
