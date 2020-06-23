import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="row about-me" id="about-me">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" id="about-text">
          <h3 className="sub-title">Hello. My name is</h3>
          <h1 className="branding">Raymond Oluoch</h1>
          <p className="text-one">A Software Developer. I spend my whole day, practically every day, experimenting with JS, Ruby, and Python. I build web applications that delight and inform. I do it well.</p>
          <p><Link to="https://www.linkedin.com/in/raymondoluochke/" className="about-social" target="_blank">Linkedin</Link>  <Link to="https://github.com/rOluochKe" className="about-social" target="_blank">GitHub</Link>  <Link to="https://angel.co/u/raymond-oluoch" className="about-social" target="_blank">AngelList</Link></p> 
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-image"></div>
      </div>
    );
  }target="_blank"
}

export default About;