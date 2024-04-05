function Statistics({ totalBreweries, breweriesByType, topStates }) {
    return (
        <div className="statistics-container">
            <div className="stat-card">
                <h2>Total Breweries</h2>
                <p>{totalBreweries}</p>
            </div>
            {/* Repeat for other statistics */}
        </div>
    );
}
export default Statistics;