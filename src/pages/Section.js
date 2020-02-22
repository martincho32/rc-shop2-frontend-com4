import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cards from '../components/Cards';

export default function Section(props) {
    const [dbProducts, setDbProducts] = useState();
    

    //Hook version of componentDidMount()
    useEffect(() => {
        async function getProducts() {
            try {
                const res = await Axios.get(`/api/products/search?category=${props.match.params.category}`);
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
    // console.log(products);
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
 