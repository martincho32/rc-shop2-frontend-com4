import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} className="image" alt="sample-resource" />
      <h1 style={{ display: "inline" }}>Hello World!</h1>
    </div>
  );
}

export default App;
