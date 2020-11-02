import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Hero from './containers/Hero/Hero';
import About from './containers/About/About';
import AboutWork from './containers/AboutWork/AboutWork';
import Work from './containers/Work/Work';
import Contact from './containers/Contact/Contact';



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Hero />
          <About />
          <AboutWork />
          <Work />
          <Contact />
        </Layout>
      </div>
    );
  }
}

export default App;
