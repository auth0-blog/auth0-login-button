import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'auth0-login-button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <auth0-login domain="YOUR_DOMAIN" clientid="YOUR_CLIENT_ID"></auth0-login>
      </header>
    </div>
  );
}

export default App;
