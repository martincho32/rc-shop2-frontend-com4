import React from 'react';
import './App.css';
import Nabvar from './components/Nabvar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import PageDetail from './pages/Pagedetail';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>

      <Nabvar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pagedetail/:id" component={PageDetail} />
        <Route path="/Cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
