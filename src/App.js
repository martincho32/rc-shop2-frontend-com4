import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Nabvar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ProductList} />
        {/* <Route path="/Details" component={Details} /> */}
        {/* <Route path="/Cart" component={Cart} /> */}
        {/* <Route component={Default} /> */}
      </Switch>
    </div>
  );
}

export default App;
