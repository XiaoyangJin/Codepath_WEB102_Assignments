import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

import '../css/EditCrew.css';

const EditCrew = ({ data }) => {

    const { id } = useParams();
    const [crew, setCrew] = useState({ id: null, name: "", speed: "", color: "" });
    const [colors, setColors] = useState(['Red', 'Blue', 'Yellow', 'Black', 'Green', 'White']);

    useEffect(() => {
        const fetchCrew = async () => {
            const { data, error } = await supabase
                .from('Detail')
                .select('name, speed, color')
                .eq('id', id)
                .single(); // Fetch the single record based on the ID

            if (error) {
                console.error('Error fetching crew:', error);
            } else {
                setCrew(data); // Set the crew state with the fetched data
            }
        };

        fetchCrew();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrew((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const updateCrew = async (e) => {
        e.preventDefault();
        await supabase
            .from('Detail')
            .update({ name: crew.name, speed: crew.speed, color: crew.color })
            .eq('id', id);

        window.location = '/';
    }

    const deleteCrew = async (e) => {
        e.preventDefault();
        await supabase
            .from('Detail')
            .delete()
            .eq('id', id);

        window.location = 'http://localhost:5173/';
    }

    return (
        <div>
            <form className='edit__form'>
                <label className='edit__form-lable' htmlFor='crewname'>Crew Name: </label><br />
                <input className='edit__form-input' type='text' id='crewname' name='name' value={crew.name} onChange={handleChange} /><br />

                <label className='edit__form-lable' htmlFor='speed'>Speed(mph): </label><br />
                <input className='edit__form-input' type='text' id='speed' name='speed' value={crew.speed} onChange={handleChange} /><br />

                <label className='edit__form-lable' htmlFor='color'>Color: </label><br />
                <select className='edit__form-select' name='color' onChange={handleChange} value={crew.color || ''}>
                    <option value="">Select a Color</option>
                    {colors.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select><br />

                <input className='submit__form-button' type="submit" value="Submit" onClick={updateCrew} />
                <button className='delete__form-button' onClick={deleteCrew}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrew