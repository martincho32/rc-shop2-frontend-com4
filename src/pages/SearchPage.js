import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cards from '../components/Cards';
import { useLocation } from 'react-router-dom';

export default function SearchPage(props) {
    const [dbProducts, setDbProducts] = useState();
    const location = useLocation();
    console.log(location);

    //Hook version of componentDidMount()
    useEffect(() => {
        async function getProducts() {
            try {
                const res = await Axios.get(`/api/products/search${props.location.search}`);
                // console.log(props.location.query)
                setDbProducts(res.data)
            } catch (e) {
                console.error(e);
            }
        }

        getProducts();
    }, [props.location.search]);

    const products = dbProducts;
    let productsWithMap = [];

    //checks if its not null or undefined
    if (products) {
        productsWithMap = products.map(p => <Cards key={p._id} {...p} />)
    }

    return (
        <>
            <div className="container d-flex flex-wrap">
                {productsWithMap}
            </div>
        </>
    );
}
 