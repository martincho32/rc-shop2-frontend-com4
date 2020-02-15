import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Nabvar from './components/Nabvar';
//* import ProductList from './components/ProductList'; */
//import Carrousel from './components/Carrousel';
/* import ProductList from './components/ProductList'; */
import Footer from './components/Footer';
import Cart from './components/Cart';
import {
  Switch,
  Route
} from "react-router-dom";
import PageDetail from './Pagedetail';
import Section from './pages/Section';

function App() {
  return (
    <div>

      <Nabvar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pagedetail/:id" component={PageDetail} />
        <Route exact path="/section/:category" component={Section} />
        {/* <Route path="/Details" component={Details} /> */}
        <Route path="/Cart" component={Cart} />
        {/* <Route component={Default} /> */}
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
