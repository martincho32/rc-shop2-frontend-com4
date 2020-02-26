import React, { useEffect, useState } from 'react';
import Carrousel from '../components/Carrousel';
import Axios from 'axios';
import Cards from '../components/Cards';

export default function Section(props) {
    const [dbProducts, setDbProducts] = useState();

    useEffect(() => {

        async function getProducts() {
            try {
                const res = await Axios.get(`/api/products/search?category=${props.match.params.category}`);
                setDbProducts(res.data)
            } catch (e) {
                console.error(e);
            }
        }

        getProducts();
    }, [props.match.params.category]);



    function renderSection() {
        let productsWithMap = [];

        if (dbProducts) {
            productsWithMap = dbProducts.map(p => <Cards key={p._id} {...p} />)
        }
        return productsWithMap;
    }

    return (
        <>
            <Carrousel />
            <div className="container d-flex flex-wrap">
                {renderSection()}
            </div>
        </>
    );
}
