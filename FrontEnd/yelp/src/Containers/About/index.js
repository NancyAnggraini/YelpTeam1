import React, { Component } from 'react';
import Navbar from '../Navbar';
import './style.css';


class About extends Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>
        <div className="About">
          <p className="About-intro">
            {'Welcome to Yelpdemo'}
            </p>
            <p className="About-text">
            {'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
            </p>
        </div>
      </div>
    );
  }
}

export default About;
