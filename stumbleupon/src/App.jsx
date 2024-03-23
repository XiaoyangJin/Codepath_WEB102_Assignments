import { useState } from 'react'
import './App.css'
import History from './components/History'
import Information from './components/Information'
import BanList from './components/BanList'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <History />
      <Information />
      <BanList />
    </div>
  )
}

export default App
