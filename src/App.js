import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
/* import Navbar from './components/Nabvar';
import Carrousel from './components/Carrousel';
 *//* import ProductList from './components/ProductList'; */
//import Footer from './components/Footer';
import Cart from './components/Cart';
import {
  Switch,
  Route
} from "react-router-dom";
import PageDetail from './Pagedetail';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pagedetail/:id" component={PageDetail} />
        {/* <Route path="/Details" component={Details} /> */}
        <Route path="/Cart" component={Cart} />
        {/* <Route component={Default} /> */}
      </Switch>
    </div>
  );
}

export default App;
