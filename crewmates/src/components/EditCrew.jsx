import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

import '../css/EditCrew.css';

const EditCrew = ({ data }) => {

    const { id } = useParams();
    const [crew, setCrew] = useState({ id: null, name: "", speed: "" });

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
            .update({ name: crew.name, speed: crew.speed })
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
                <lable className='edit__form-lable' for='crewname'>Crew Name: </lable><br />
                <input className='edit__form-input' type='text' id='crewname' name='crewname' onChange={handleChange} /><br />

                <lable className='edit__form-lable' for='speed'>Speed(mph): </lable><br />
                <input className='edit__form-input' type='text' id='speed' name='speed' onChange={handleChange} /><br />

                <input className='submit__form-button' type="submit" value="Submit" onClick={updateCrew} />
                <button className='delete__form-button' onClick={deleteCrew}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrew