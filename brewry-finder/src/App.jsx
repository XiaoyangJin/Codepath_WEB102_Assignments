import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [breweries, setBreweries] = useState([]);

  // Calculate summary statistics
  const totalBreweries = breweries.length;
  const breweriesByType = breweries.reduce((acc, brewery) => {
    acc[brewery.brewery_type] = (acc[brewery.brewery_type] || 0) + 1;
    return acc;
  }, {});
  const breweriesByState = breweries.reduce((acc, brewery) => {
    acc[brewery.state] = (acc[brewery.state] || 0) + 1;
    return acc;
  }, {});

  // Convert the object into an array, sort it by count, and take the top 5
  const topStates = Object.entries(breweriesByState)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBreweries, setFilteredBreweries] = useState([]);

  useEffect(() => {
    const fetchAllBreweryData = async () => {
      try {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
        const data = await response.json();
        setBreweries(data);
        setFilteredBreweries(data);
      } catch (error) {
        console.error("Failed to fetch breweries:", error);
      }
    };

    fetchAllBreweryData();
  }, []);

  useEffect(() => {
    // Filter breweries whenever the search term changes
    const results = breweries.filter(brewery =>
      brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Search Term:', searchTerm);
    console.log('Filtered Results:', results);
    setFilteredBreweries(results);
  }, [searchTerm, breweries]);

  return (
    <div className="container">
      <h1 className='title'>Find Brewery</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
      <ul className='list'>
        {filteredBreweries.map((brewery) => (
          <li key={brewery.id} className='list__item'>
            {brewery.name} - {brewery.brewery_type} - {brewery.city}, {brewery.state}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
