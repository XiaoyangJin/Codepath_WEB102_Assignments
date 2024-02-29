import './App.css';
import CardBoard from './components/CardBoard';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {

  return (
    <div className="App">
      <body>
        <Header />
        <CardBoard />
        <Footer />
      </body>

    </div>
  )
}

export default App