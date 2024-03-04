import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <body>
        <Header />
        <Main />
      </body>
    </div>
  )
}

export default App
