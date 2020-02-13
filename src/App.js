import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Nabvar';
import {
  Switch,
  Route
} from "react-router-dom";
import PageDetail from './pages/Pagedetail';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pagedetail/:id" component={PageDetail} />
        {/* <Route path="/Details" component={Details} /> */}
        {/* <Route path="/Cart" component={Cart} /> */}
        {/* <Route component={Default} /> */}
      </Switch>
    </div>
  );
}

export default App;
