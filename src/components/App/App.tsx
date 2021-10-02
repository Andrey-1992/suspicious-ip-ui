import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Error } from '../Error/Error';
import { Home } from '../Home/Home';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Error />
      <Home />
    </div>
  );
}

export default App;
