import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function BreweriesCountByStateChart() {
    const [breweries, setBreweries] = useState([]);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchBreweries = async () => {
            const response = await fetch('https://api.openbrewerydb.org/breweries');
            const data = await response.json();
            setBreweries(data);

            // Process data for chart
            const dataByState = data.reduce((acc, brewery) => {
                acc[brewery.state] = (acc[brewery.state] || 0) + 1;
                return acc;
            }, {});

            const processedChartData = Object.entries(dataByState).map(([name, value]) => ({ name, value }));
            setChartData(processedChartData);
        };

        fetchBreweries();
    }, []);

    // Render chart with processed data
    return (
        <BarChart
            width={730}
            height={250}
            data={chartData}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" name="Breweries" />
        </BarChart>
    );
}

export default BreweriesCountByStateChart;
