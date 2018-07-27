/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import About from './components/about';
import Pledges from './components/pledges';

const MainComponent = styled.div`
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutSection = styled.div`
  float: left;
  width: 66.66%;
`;

const PledgesSection = styled.div`
  float: left;
  width: 33.33%;
`;

const App = () => (
  <MainComponent>
    <AboutSection>
      <About />
      <h1>
        Risk and Challenges
      </h1>
    </AboutSection>
    <PledgesSection>
      <Pledges />
    </PledgesSection>
  </MainComponent>
);

ReactDOM.render(<App />, document.getElementById('app'));
