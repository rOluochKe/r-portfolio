import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="row about-me" id="about-me">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" id="about-text">
          <h3 className="sub-title">Hello. My name is</h3>
          <h1 className="branding">Raymond Oluoch</h1>
          <p className="text-one">Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. Choose from .navbar-light for use with light background colors, or .navbar-dark for dark background colors.</p>
          <p><Link to="/" className="about-social">Linkedin</Link>  <Link to="/" className="about-social">GitHub</Link>  <Link to="/" className="about-social">AngelList</Link></p> 
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-image"></div>
      </div>
    );
  }
}

export default About;