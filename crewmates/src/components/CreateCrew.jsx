import React, { useState } from 'react';
import '../css/CreateCrew.css';
import { supabase } from '../client';

const CreateCrew = () => {

    const [crew, setCrew] = useState({ crewname: '', speed: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrew((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const createCrew = async (e) => {
        e.preventDefault();
        await supabase
            .from('Detail')
            .insert({ name: crew.crewname, speed: crew.speed })
            .select();
        window.location = "/";
    }

    return (
        <div className='create__content'>
            <h1 className='title'>Create a New Crewmate</h1>
            <img src='src/images/crewmates.jpg' alt='a set of yellow cartoon characters stand in a line' />
            <form className='create__form'>
                <label className='create__form-lable' htmlFor='crewname'>Crew Name: </label><br />
                <input className='create__form-input' type='text' id='crewname' name='crewname' onChange={handleChange} /><br />

                <label className='create__form-lable' htmlFor='speed'>Speed(mph): </label><br />
                <input className='create__form-input' type='text' id='speed' name='speed' onChange={handleChange} /><br />

                <input className='create__form-button' type="submit" value="Submit" onClick={createCrew} />
            </form>
        </div>
    )
}

export default CreateCrew