import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/about';
import Services from './components/service';
import Portfolio from './components/portfolio';
import Experience from './components/experience';
import Skills from './components/skills';
import GetInTouch from  './components/get-in-touch';
import NotFound from './components/not-found/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main role="main" class="container-fluid">
            <Navbar />
            <Route exact path="/" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/get-in-touch" component={GetInTouch} />
            <Route exact path="/not-found" component={NotFound} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;