import React from 'react';

import '../css/Card.css';
import { Link } from 'react-router-dom';


const Card = (props) => {

    const cardStyle = {
        borderColor: props.color, // Use the color prop for the border
        borderWidth: '2px',
        borderStyle: 'solid'
    };

    return (
        <div className="Card" style={cardStyle}>
            <Link className='edit__button' to={'edit/' + props.id}>Edit</Link>
            <h2 className="name">{props.name}</h2>
            <h3 className="speed">{"it's speed is " + props.speed}</h3>
        </div>
    )
}

export default Card