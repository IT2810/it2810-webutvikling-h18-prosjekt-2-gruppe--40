import React, { Component } from 'react';
import logo from './logo.svg';



import './App.css';

import Tabs from './Tabs';
import ArtSection from "./ArtSection";
require('./App.css');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Strong As Bull</h1>
        </header>
          <div>
              <Tabs>
                  <div label="Animals">
                      <ArtSection category="animals"/>
                  </div>
                  <div label="Drake">
                      <ArtSection category="drake"/>
                  </div>
                  <div label="Fruits">
                      <ArtSection category="fruits"/>
                  </div>
              </Tabs>
          </div>
      </div>
    );
  }
}

export default App;
