function BreweryList({ breweries }) {
    return (
        <ul className='list'>
            {breweries.map(brewery => (
                <li key={brewery.id} className='list__item'>
                    {brewery.name} - {brewery.brewery_type} - {brewery.city}, {brewery.state}
                </li>
            ))}
        </ul>
    );
}
export default BreweryList;