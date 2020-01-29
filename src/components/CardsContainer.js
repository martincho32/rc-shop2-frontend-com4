import React from 'react';
import Cards from './Cards';

//Cards Parent
export default function CardsContainer() {
    return (
        //maps each array item using the card component design
        <div className="container d-flex flex-wrap">
            {Products.map(p => <Cards key={p.id + "-" + p.title} {...p} />)}
        </div>
    );
}

//test array until db is working
const Products = [
    {
        id: 1,
        title: "iPhone",
        description: "1920x180 - '10 - Octacore - Gorilla Glass, 40MP",
        img: "https://http2.mlstatic.com/D_NQ_NP_803543-MLA32324233222_092019-W.webp",
        price: "10000",
        sale: {
            hasDiscount: true,
            discount: "15%"
        }
    },
    {
        id: 2,
        title: "S10",
        description: "1920x180 - '10 - Octacore - Gorilla Glass, 40MP",
        img: "https://http2.mlstatic.com/D_NQ_NP_803543-MLA32324233222_092019-W.webp",
        price: "10000",
        sale: {
            hasDiscount: true,
            discount: "20%"
        }
    },
    {
        id: 3,
        title: "S10",
        description: "1920x180 - '10 - Octacore - Gorilla Glass, 40MP",
        img: "https://http2.mlstatic.com/D_NQ_NP_803543-MLA32324233222_092019-W.webp",
        price: "10000",
        sale: {
            hasDiscount: false,
            discount: "20%"
        }
    },
    {
        id: 4,
        title: "S10",
        description: "1920x180 - '10 - Octacore - Gorilla Glass, 40MP",
        img: "https://http2.mlstatic.com/D_NQ_NP_803543-MLA32324233222_092019-W.webp",
        price: "10000",
        sale: {
            hasDiscount: true,
            discount: "20%"
        }
    },
    {
        id: 5,
        title: "S10",
        description: "1920x180 - '10 - Octacore - Gorilla Glass, 40MP",
        img: "https://http2.mlstatic.com/D_NQ_NP_803543-MLA32324233222_092019-W.webp",
        price: "10000",
        sale: {
            hasDiscount: false,
            discount: "20%"
        }
    },
    {
        id: 6,
        title: "S10",
        description: "1920x180 - '10 - Octacore - Gorilla Glass, 40MP",
        img: "https://http2.mlstatic.com/D_NQ_NP_803543-MLA32324233222_092019-W.webp",
        price: "10000",
        sale: {
            hasDiscount: false,
            discount: "20%"
        }
    },
    {
        id: 7,
        title: "S10",
        description: "1920x180 - '10 - Octacore - Gorilla Glass, 40MP",
        img: "https://http2.mlstatic.com/D_NQ_NP_803543-MLA32324233222_092019-W.webp",
        price: "10000",
        sale: {
            hasDiscount: false,
            discount: "20%"
        }
    }
];
