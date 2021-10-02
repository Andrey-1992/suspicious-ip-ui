import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Error } from '../Error/Error';
import { Home } from '../Home/Home';
import { IpLocal } from '../IpLocal/IpLocal';
import { IpSearched } from '../IpSearched/IpSearched';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Error />
      <Home />
      <IpLocal />
      <IpSearched />
    </div>
  );
}

export default App;
