import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Nabvar';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import {
  Switch,
  Route
} from "react-router-dom";
import PageDetail from './Pagedetail';

function App() {
  return (
    <div>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/Details" component={Details} /> */}
           <Route path="/Cart" component={Cart} /> 
          {/* <Route component={Default} /> */}
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
