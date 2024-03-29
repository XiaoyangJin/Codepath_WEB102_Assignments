import { useState } from 'react'
import styles from './App.module.css'
import { Details } from './components/details/Details'
import Navbar from './components/navbar/Navbar'
import { ResultList } from './components/resule-list/ResultList'
import { Search } from './components/search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Navbar />
      <Search />
      <ResultList />
      <Details />
    </div>
  )
}

export default App
