import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Navbar from '../Navbar';
import RestaurantsList from '../../Component/RestaurantsList';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RestaurantsList />
      </div>
    );
  }
}

export default Home;
