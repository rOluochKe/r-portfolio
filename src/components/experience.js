import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className="row experience" id="experience">
        <div className="col-md-6">
          <h2 className="common-title">Experience</h2>
          <p className="main-text">
            <strong>University of the People</strong> <br />
            <small>Bachelor of Science in Computer Science</small><br />
            <small>2020 - 2023</small>
          </p>

          <p className="main-text">
            <strong>OpenClassrooms</strong> <br />
            <small>Diploma In Full-Stack Software Development</small><br />
            <small>Feb 2020 - Feb 2021</small>
          </p>

          <p className="main-text">
            <strong>Microverse</strong> <br />
            <small>Certificate In Full-Stack Software Development</small><br />
            <small>Aug 2019 - Aug 2020</small>
          </p>

          <hr />

          <p className="main-text">
            <strong>Technical Support Engineer</strong> <br />
            <small>Microverse</small><br />
            <small>Jan 2021 - Present</small>
          </p>

          <p className="main-text">
            <strong>Web Application Developer</strong> <br />
            <small>Legibra</small><br />
            <small>Sep 2016 - Aug 2018</small>
          </p>
        </div>

        <div className="col-md-6">
          <h2 className="common-title">Cover Letter</h2>
          <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque nunc fames.</p>

          <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet. Mauris egestas nulla arcu, ut vestibulum diam vulputate non. Ut massa mauris, condimentum ut tincidunt eu, mattis euismod dolor.</p>

          <p className="main-text">Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus sed condimentum aliquet mi, nec lobortis neque gravida tempor.</p>

          <p className="main-text">Phasellus non dui sed eros scelerisque gravida eu lobortis magna. Sed vulputate, lacus blandit posuere aliquet, enim purus dignissim nunc, at efficitur nulla lacus id quam. Morbi feugiat neque a quam.</p>          
        </div>
      </div>
    );
  }
}

export default Experience;