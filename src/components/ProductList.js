import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cards from './Cards';

export default function CardsContainer() {
    const [dbProducts, setDbProducts] = useState();

    useEffect(async () => {
        try {
            const res = await Axios.get('/api/products');
            setDbProducts(res.data)
        } catch (e) {
            console.error(e);
        }
    }, []);

    const products = dbProducts;
    let productsWithMap = [];

    if (products) {
        productsWithMap = products.map(p => <Cards key={p.brand + p.model} {...p} />)
    }

    return (
        <>
            <div className="container d-flex flex-wrap">
                {productsWithMap}
            </div>
        </>
    );
}
