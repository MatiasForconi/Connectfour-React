import '.style.css';
import React from 'react';
import logo from '../../../assets/logo.svg'

function game () {
    return (
        <div className="Game">
        <header className="game-header">
          <img src={logo} className="game-logo" alt="logo" />
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
        </header>
      </div>
    );
}

export default game