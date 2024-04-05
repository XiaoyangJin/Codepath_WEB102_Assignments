function Statistics({ totalBreweries, breweriesByType, topStates }) {
    return (
        <div className="statistics-container">
            {/* Total Number of Breweries */}
            <div className="stat-card">
                <h2>Total Breweries</h2>
                <p>{totalBreweries}</p>
            </div>

            {/* Breweries by Type */}
            <div className="stat-card">
                <h2>Breweries by Type</h2>
                <ul>
                    {Object.entries(breweriesByType).map(([type, count]) => (
                        <li key={type}>{type}: {count}</li>
                    ))}
                </ul>
            </div>

            {/* Top 5 States */}
            <div className="stat-card">
                <h2>Top 5 States</h2>
                <ul>
                    {topStates.map(([state, count]) => (
                        <li key={state}>{state}: {count}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Statistics;