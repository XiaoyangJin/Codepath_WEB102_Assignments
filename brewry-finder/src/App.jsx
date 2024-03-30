import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [breweries, setBreweries] = useState([]);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const fetchAllBreweryData = async () => {
      try {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
        const data = await response.json();
        setBreweries(data); // Assuming the API returns an array of breweries
      } catch (error) {
        console.error("Failed to fetch breweries:", error);
      }
    };

    fetchAllBreweryData();
  }, []);

  return (
    <div className="container">
      <h1 className='title'>Find Brewery</h1>
      <ul className='list'>
        {breweries.map((brewery) => (
          <li key={brewery.id} className='list__item'>
            {brewery.name} - {brewery.brewery_type} - {brewery.city}, {brewery.state}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
