import React, { Component } from 'react';
import './style.css';
import RestaurantsList from '../RestaurantsList';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantsList/>
      </div>
    );
  }
}

export default Home;
