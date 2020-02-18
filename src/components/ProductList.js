import React, { 
    useEffect, 
    useState 
} from 'react';
import Axios from 'axios';
import Cards from './Cards';


export default function ProductList() {
    const [dbProducts, setDbProducts] = useState();
    let productsWithMap = [];

    async function getProducts() {
        try {
            const res = await Axios.get('/api/products');
            setDbProducts(res.data)
        } catch (e) {
            console.error(e);
        }
    }

    //Hook version of componentDidMount()
    useEffect(() => {
        getProducts();
    }, []);

    if (dbProducts) {
        productsWithMap = dbProducts.map(p => <Cards key={p._id } {...p} />)
    }

    return (
        <>
            <div className="container d-flex flex-wrap p-2">
                {productsWithMap}
            </div>
        </>
    );
}
 