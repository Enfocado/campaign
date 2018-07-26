/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import Pledges from './components/pledges';

const App = () => (
  <div>
    <div>
    <About />
      <h1>
        Risk and Challenges
      </h1>
    </div>
    <div>
      <Pledges />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
