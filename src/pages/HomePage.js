import React from 'react';
import ProductList from '../components/ProductList'; 
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import Nabvar from '../components/Nabvar';

export default function HomePage() {
    return (
        <>
         <Nabvar/>
         <Carrousel />
         <ProductList/>
         <Footer />  
        </>
    );
}