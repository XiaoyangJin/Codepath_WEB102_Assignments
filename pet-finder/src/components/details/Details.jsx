import React, { useEffect, useState } from "react";

import createAuthParams from "../../CreateAuthParams";

const privateKey = import.meta.env.VITE_APP_API_KEY;
const publicKey = '2b943fe91ca94a3fef6c7283b33827c8';

export const Details = ({ name }) => {
    const [price, setPrice] = useState();

    const { ts, hash } = createAuthParams(publicKey, privateKey);
    const baseUrl = 'http://gateway.marvel.com/v1/public/comics';
    const url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    useEffect(() => {
        const getCoinPrice = async () => {
            const response = await fetch(
                url
            );

            const json = await response.json();
            setPrice(json);
        };
        getCoinPrice().catch(console.error);
    }, [symbol]);

    return (
        <div>
        </div>
    )
}
