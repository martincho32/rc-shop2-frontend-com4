import React from 'react';
import './App.css';
import Nabvar from './components/Nabvar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import {
  Switch,
  Route
} from "react-router-dom";
import PageDetail from './pages/Pagedetail';
import Section from './pages/Section';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div>

      <Nabvar />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pagedetail/:id" component={PageDetail} />
        <Route exact path="/section/:category" component={Section} />
        {/* <Route path="/Details" component={Details} /> */}
        <Route exact path="/Cart" component={Cart} />
        {/* <Route component={Default} /> */}
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
