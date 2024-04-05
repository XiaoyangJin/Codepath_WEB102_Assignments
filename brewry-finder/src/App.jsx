import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Filters from './components/Filters';

import './App.css';

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

  const [selectedType, setSelectedType] = useState('');
  const [selectedState, setSelectedState] = useState('');


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
    let results = breweries;

    if (searchTerm) {
      results = results.filter(brewery =>
        brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      results = results.filter(brewery => brewery.brewery_type === selectedType);
    }

    if (selectedState) {
      results = results.filter(brewery => brewery.state === selectedState);
    }

    setFilteredBreweries(results);
  }, [searchTerm, breweries, selectedType, selectedState]);


  return (
    <Router>
      <div className="container">
        <h1 className='title'>Find Brewery</h1>
        <Filters
          searchTerm={searchTerm}
          onSearchTermChange={(e) => setSearchTerm(e.target.value)}
          selectedType={selectedType}
          onTypeChange={(e) => setSelectedType(e.target.value)}
          selectedState={selectedState}
          onStateChange={(e) => setSelectedState(e.target.value)}
        />

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
    </Router>
  )
}

export default App
