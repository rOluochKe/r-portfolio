import React, { Component } from 'react';

class GetInTouch extends Component {
  render() {
    return (
      <div className="row get-in-touch" id="get-in-touch">

        <div className="col-md-6">
          <h2 className="common-title">Get in Touch</h2>
          <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque nunc fames.</p>

          <p className="main-text">Magni dolores eos qui sed quia consequuntur ratione voluptatem sequi nesciunt permano Nence of the stars from which we spring muse about as a patch of light billions upon billions.</p>

          <p className="main-text">Energy hidden in matter a mote of lorem ipsum dust suspended in a sunbeam billions upon ratione voluptatem sequi nesciunt permano lorem ipsum.</p>

          <address>
            <strong>ADDRESS:</strong> Nairobi, Kenya<br/>
            <strong>EMAIL:</strong> rasholuoch@gmail.com<br/>
            <strong>WEBSITE:</strong> www.raymond-oluoch.net
          </address>
        </div>

        <div className="col-md-6">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" id="inputName" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" id="inputSubject" />
            </div>
            <div className="form-group">
              <textarea className="form-control" id="formControlTextarea" placeholder="Message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary contact-btn">SEND</button>
          </form>
        </div>
        
      </div>
    );
  }
}

export default GetInTouch;