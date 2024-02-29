import './App.css';
import CardBoard from './components/CardBoard';

const App = () => {

  return (
    <div className="App">
      <body>
        <header class="header">
          <div class="header__top">
            <img src="http://placekitten.com/50/50" alt="A random cat come from placekitten as the logo" />
            <h1 class="header__title">Cats on the Internet</h1>
          </div>
          <nav class="header__menu">
            <ul class="header__menu__list">
              <li class="header__menu__item"><a href="/">Feline Fun Facts</a></li>
              <li class="header__menu__item"><a href="/">Cat Video Gallery</a></li>
              <li class="header__menu__item"><a href="/">Cat Care Tips</a></li>
            </ul>
          </nav>
        </header>
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