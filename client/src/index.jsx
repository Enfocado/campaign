/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';

const App = () => (
  <div>
    <About />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
