/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import Pledges from './components/pledges';
import './index.css';

const App = () => (
  <div className="mainSection">
    <div className="aboutSection">
      <About />
      <h1>
        Risk and Challenges
      </h1>
    </div>
    <div className="pledgesSection">
      <Pledges />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
