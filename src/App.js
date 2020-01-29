import React from 'react';
import logo from './images/react-logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} className="image" alt="sample-resource" />
      <h1 style={{ display: "inline" }}>THE PAGE DE TEAM'S ALDO</h1>
    </div>
  );
}

export default App;
