import React from 'react';


const Card = (props) => {
    return (
        <div className="Card">
            {/* <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link> */}
            <h2 className="name">{props.name}</h2>
            <h3 className="speed">{"it's speed is " + props.speed}</h3>
        </div>
    )
}

export default Card