import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Error } from '../Error/Error';
import { Home } from '../Home/Home';
import { IpLocal } from '../IpLocal/IpLocal';
import { IpSearched } from '../IpSearched/IpSearched';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header /> 
      <main className="main-section">
        <Switch>
          <Route exact path="/suspicious-ip" render={() => <Home />}/>
          <Route exact path="/local-ip" render={() => <IpLocal />}/>
          <Route exact path="/searched-ip" render={() => <IpSearched />}/>
          <Route path="*" render={() => <Error />}/>
        </Switch>
      </main>
    </div>
  )
}

