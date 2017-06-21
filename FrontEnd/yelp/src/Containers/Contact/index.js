import React, { Component } from 'react';
import Navbar from '../Navbar';
import './style.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
          <div className="Contact">
            <p className="Contact-intro">
            {'We would love to hear from you!'}
            </p>
            <p className="Contact-email">
            Contact us at <a href= {'#'}>thisleadsnowehre@yelpexample.com</a>
            </p>
          </div>
      </div>
    );
  }
}

export default Contact;
