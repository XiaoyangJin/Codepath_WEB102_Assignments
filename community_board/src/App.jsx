import './App.css';
import CardBoard from './components/CardBoard';
import Header from './components/Header';

const App = () => {

  return (
    <div className="App">
      <body>
        <Header />
        <CardBoard />
        <footer class="footer">
          <nav class="footer__menu">
            <ul class="footer__menu__list">
              <li class="footer__menu__item"><a href="/">About Us</a></li>
              <li class="footer__menu__item"><a href="/">Contact</a></li>
              <li class="footer__menu__item"><a href="/">Privacy Policy</a></li>
            </ul>
          </nav>
        </footer>
      </body>

    </div>
  )
}

export default App