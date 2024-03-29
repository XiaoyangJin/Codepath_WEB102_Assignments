import { useState, useEffect } from 'react'
import styles from './App.module.css'
import { Details } from './components/details/Details'
import Navbar from './components/navbar/Navbar'
import { ResultList } from './components/resule-list/ResultList'
import { Search } from './components/search/Search'
import createAuthParams from './CreateAuthParams'

const privateKey = import.meta.env.VITE_APP_API_KEY;
const publicKey = '2b943fe91ca94a3fef6c7283b33827c8';

function App() {
  const [list, setList] = useState();

  const [comics, setComics] = useState([]);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };

  const { ts, hash } = createAuthParams(publicKey, privateKey);
  const baseUrl = 'http://gateway.marvel.com/v1/public/comics';
  const url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(url
      );
      const json = await response.json();
      setList(json);
    }
    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <div className="whole-page">
        <h1>My Crypto List</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(inputString) => searchItems(inputString.target.value)}
        />
        <ul className='coin__list'>
          <div className={styles.container}>
            {comics.map(comic => (
              <div key={comic.id}>{comic.title}</div>
            ))}
          </div>
          {/* {searchInput.length > 0
            ? filteredResults.map((coin) =>
              list.Data[coin].PlatformType === "blockchain" ?
                <Details
                  name={list.Data[coin].title}
                />
                : null
            )
            : list && Object.entries(list.Data).map(([coin]) =>
              list.Data[coin].PlatformType === "blockchain" ?
                <Details
                  name={list.Data[coin].title}
                />
                : null
            )} */}
        </ul>
      </div>
      <Details />
    </div>
  )
}

export default App
