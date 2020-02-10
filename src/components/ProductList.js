import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cards from './Cards';

export default function ProductList() {
    const [dbProducts, setDbProducts] = useState();

    //Hook version of componentDidMount()
    useEffect(() => {
        async function getProducts() {
            try {
                const res = await Axios.get('/api/products');
                setDbProducts(res.data)
            } catch (e) {
                console.error(e);
            }
        }

        getProducts();
    }, []);

    const products = dbProducts;
    let productsWithMap = [];

    //checks if its not null or undefined
    if (products) {
        productsWithMap = products.map(p => <Cards key={p.id} {...p} />)
    }

    return (
        <>
            <div className="container d-flex flex-wrap">
                {productsWithMap}
            </div>
        </>
    );
}
