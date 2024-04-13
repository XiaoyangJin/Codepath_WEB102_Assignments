import React from 'react';
import '../css/Home.css';

const Home = () => {
    return (
        <div className='home__content'>
            <h1 className='home__title'>Welcome to Crewmate Creator!</h1>
            <div className='home__intro'>Here is where you can create a set of crewmates</div>
            <img src='src/images/hero.jpg' alt='two yellow cartoon characters painting a wall' />
        </div>
    )
}

export default Home