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
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div>

      <Nabvar />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pagedetail/:id" component={PageDetail} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
