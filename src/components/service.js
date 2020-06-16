import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
  render() {
    return (
      <div className="row services" id="services">
        <div className="col-md-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <i className="fas fa-camera fa-5x"></i>	
                <div className="card-body">
                  <h2 className="common-title">Design</h2>
                  <p className="main-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <i className="fas fa-camera fa-5x"></i>	
                <div className="card-body">
                  <h2 className="common-title">Develop</h2>
                  <p className="main-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row" >
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <i className="fas fa-camera fa-5x"></i>	
                <div className="card-body">
                  <h2 className="common-title">Test</h2>
                  <p className="main-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <i className="fas fa-camera fa-5x"></i>	
                <div className="card-body">
                  <h2 className="common-title">Deploy</h2>
                  <p className="main-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h2 className="common-title">Services</h2>
          <p className="main-text-one">Theming the navbar has never been easier thanks to the combination of theming class and background-color utilities. Choose from .navbar-light for use with light background colors, or .navbar-dark for dark background colors.</p>

          <p className="main-text">Theming the navbar has never been easier thanks to the combination of theming class and background-color utilities. Choose from .navbar-light for use with light background colors, or .navbar-dark for dark background colors. Theming the navbar has never been easier thanks to the combination of theming class and background-color utilities.</p>

          <p className="main-text">Theming the navbar has never been easier thanks to the combination of theming class and background-color utilities. Choose from .navbar-light for use with light background colors, or .navbar-dark for dark background colors. Theming the navbar has never been easier thanks to the combination of theming class and background-color utilities. Choose from .navbar-light for use with light background colors</p>
          <p><Link to="/" className="btn btn-primary">View my GitHub</Link></p>
          <p><Link to="/" className="btn btn-primary">View my Linkedin</Link></p>
        </div>
      </div>
    );
  }
}

export default Services;