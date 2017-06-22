import React, { Component } from 'react';
import './style.css';
import Navbar from '../Navbar';
import RestaurantsList from '../RestaurantsList';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RestaurantsList/>
      </div>
    );
  }
}

export default Home;
