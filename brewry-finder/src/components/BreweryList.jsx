import { Link } from "react-router-dom";

function BreweryList({ breweries }) {
    return (
        <ul className='list'>
            {breweries.map((brewery) => (
                <li key={brewery.id} className='list__item'>
                    <Link to={`/brewery/${brewery.id}`}>
                        {brewery.name} - {brewery.brewery_type} - {brewery.city}, {brewery.state}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
export default BreweryList;