import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import '../css/Gallery.css';
import { supabase } from '../client';
import Card from './Card';

const Gallery = (props) => {

    const [crews, setCrews] = useState([]);

    useEffect(() => {
        const fetchCrews = async () => {
            const { data } = await supabase
                .from('Detail')
                .select();

            setCrews(data);
        }
        fetchCrews();
    }, [props]);

    return (
        <div className='gallery__content'>
            <img src='src/images/crew.jpg' alt='a yellow character standing on desk' />
            {
                crews && crews.length > 0 ?
                    crews.map((crew) => <Card id={crew.id} name={crew.name} speed={crew.speed} />) :
                    <h2 className='gallery__empty'>{'No Crewmate Yet!'}</h2>
            }
        </div>
    )
}

export default Gallery