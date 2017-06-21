import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <p className="Contact-intro">
          {'We would love to hear from you!'}
        </p>
        <p className="Contact-email">
          Contact us at <a href= {'#'}>thisleadsnowehre@yelpexample.com</a>
        </p>
      </div>
    );
  }
}

export default Contact;
