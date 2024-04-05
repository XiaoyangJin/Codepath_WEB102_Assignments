function Filters({ searchTerm, onSearchTermChange, selectedType, onTypeChange, selectedState, onStateChange }) {
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={onSearchTermChange}
            />

            <select
                value={selectedType}
                onChange={onTypeChange}
            >
                <option value="">Select Type</option>
                <option value="micro">Micro</option>
                <option value="regional">Regional</option>
                <option value="brewpub">Brewpub</option>
            </select>

            <select
                value={selectedState}
                onChange={onStateChange}
            >
                <option value="">Select State</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Texas">Texas</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Nevada">Nevada</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Laois">Laois</option>
                <option value="Idaho">Idaho</option>
            </select>
        </div>
    );
}
export default Filters;