import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

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

    return (
        <div>
            <form className='edit__form'>
                <lable className='edit__form-lable' for='crewname'>Crew Name: </lable><br />
                <input className='edit__form-input' type='text' id='crewname' name='crewname' onChange={handleChange} /><br />

                <lable className='edit__form-lable' for='speed'>Speed(mph): </lable><br />
                <input className='edit__form-input' type='text' id='speed' name='speed' onChange={handleChange} /><br />

                <input className='submit__form-button' type="submit" value="Submit" />
                <button className='delete__form-button'>Delete</button>
            </form>
        </div>
    )
}

export default EditCrew