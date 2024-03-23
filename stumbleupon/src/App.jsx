import { useState } from 'react'
import './App.css'
import History from './components/History'
import Information from './components/Information'
import BanList from './components/BanList'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [history, setHistory] = useState([]);

  const addToHistory = (imageInfo) => {
    setHistory(prevHistory => {
      const newHistory = [...prevHistory, imageInfo];
      console.log(newHistory); // Log to see if history is correctly updated
      return newHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]); // Set history to an empty array, effectively clearing it
  };

  return (
    <div className='main'>
      <History history={history} clearHistory={clearHistory} />
      <Information addToHistory={addToHistory} />
      <BanList />
    </div>
  )
}

export default App
