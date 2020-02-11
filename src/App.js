import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Nabvar';
import {
  Switch,
  Route
} from "react-router-dom";
import PageDetail from './Pagedetail';
import Section from './pages/Section';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pagedetail/:id" component={PageDetail} />
        <Route exact path= "/section/:category" component={Section}/>
        {/* <Route path="/Details" component={Details} /> */}
        {/* <Route path="/Cart" component={Cart} /> */}
        {/* <Route component={Default} /> */}
      </Switch>
    </div>
  );
}

export default App;
