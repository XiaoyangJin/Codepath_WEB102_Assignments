import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Filters from './components/Filters';
import Statistics from './components/Statistics';
import BreweryList from './components/BreweryList';
import BreweryDetail from './components/BreweryDetail';

import './App.css';
import BreweriesCountByStateChart from './components/BreweryTypeDistributionChart';

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

        <Statistics
          totalBreweries={totalBreweries}
          breweriesByType={breweriesByType}
          topStates={topStates}
        />

        <BreweriesCountByStateChart />

        <Routes>
          <Route path="/" element={<BreweryList breweries={filteredBreweries} />} />
          <Route path="/brewery/:breweryId" element={<BreweryDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
