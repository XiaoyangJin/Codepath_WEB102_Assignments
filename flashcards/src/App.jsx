import { useState } from 'react'
import './App.css'
import DirectBtn from './components/DirecBtn'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <body>
        <Header />
        <Main />
        <DirectBtn />
      </body>
    </div>
  )
}

export default App
