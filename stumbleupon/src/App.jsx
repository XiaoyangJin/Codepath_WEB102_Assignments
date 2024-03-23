import { useState } from 'react'
import './App.css'
import History from './components/History'
import Information from './components/Information'
import BanList from './components/BanList'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [artwork, setArtwork] = useState({});
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchArtwork = async () => {
    const url = `https://api.harvardartmuseums.org/object?apikey=${ACCESS_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArtwork(data.records[0]); // Assume the data you need is in records[0]
      setHistory([...history, data.records[0]]); // Add to history
    } catch (error) {
      console.error("Error fetching artwork: ", error);
    }
  };

  return (
    <div className='main'>
      <History />
      <Information />
      <BanList />
    </div>
  )
}

export default App
