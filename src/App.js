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
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div>

      <Nabvar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/pagedetail/:id" component={PageDetail} />
        <Route path="/Cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
