import React from 'react';
import ProductList from '../components/ProductList'; 
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
         <Carrousel />
         <ProductList/>
         <Footer />  
        </>
    );
}