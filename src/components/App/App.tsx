import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Error } from '../Error/Error';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Error />
    </div>
  );
}

export default App;
