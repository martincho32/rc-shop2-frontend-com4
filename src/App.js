import React from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';
import Navbar from './components/Nabvar';
import Carrousel from './components/Carrousel';

function App() {
  return (
    <div>
      <Navbar/>
      <Carrousel/>
      <CardsContainer/>
    </div> 
);
}

export default App;
