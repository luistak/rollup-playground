import React from 'react';
import logo from './logo.svg';
import './App.css';

import BLA from '@rollup-playground/ts-library';
import { Bla } from '@rollup-playground/ts-react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mudei { BLA(12) }
        </p>
        <Bla name="Testing" age={23} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
