import React, { useEffect, useState } from 'react';
import createAuthParams from '../../CreateAuthParams';

import styles from "./ResultList.module.css";


export function ResultList() {
    const privateKey = import.meta.env.VITE_APP_API_KEY;
    const publicKey = '2b943fe91ca94a3fef6c7283b33827c8';

    const [list, setList] = useState();

    const [comics, setComics] = useState([]);

    useEffect(() => {
        const { ts, hash } = createAuthParams(publicKey, privateKey);
        const baseUrl = 'http://gateway.marvel.com/v1/public/comics';
        const url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

        const fetchAllMarvalData = async () => {
            const response = await fetch(
                url
            );
            const json = await response.json();
            setList(json);
        }

        fetchAllMarvalData().catch(console.error);
    }, []);

    return (
        <div className={styles.container}>
            {comics.map(comic => (
                <div key={comic.id}>{comic.title}</div>
            ))}
        </div>
    );
}
