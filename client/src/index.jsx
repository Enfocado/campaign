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
  font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 30px;
  font-weight: 300;
`;

const AboutSection = styled.div`
  float: left;
  width: 66.66%;
  padding-right: 18px;
  padding-left: 18px;
  box-sizing: border-box;
`;

const PledgesSection = styled.div`
  float: left;
  width: 33.33%;
  padding-right: 18px;
  padding-left: 18px;
  box-sizing: border-box;
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

ReactDOM.render(<App />, document.getElementById('campaign'));
