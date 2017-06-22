import React from 'react';
import '../../style.css';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import ReviewsList from '../../Components/ReviewsList';

class Restaurant extends React.Component {

  render() {
    const restaurant = this.props.restaurants[0];
    //console.log('restaurant props', this.props.restaurants[0]);
    const reviews = this.props.restaurants[0].reviews;
    
    return (
      <div> 
        <Navbar />
        <div className="TwoColumns">

          <div className="RestaurantInfo">
            <img  className="RestaurantLogo" src="#" />
            <h3>{ restaurant.name }</h3>
            <p> Stars Average </p>
            <p> {reviews.length} Reviews </p>
            <p><b>Address:</b> {restaurant.address} </p>
            <p><b>Phone: </b> {restaurant.phone} </p>
            <p><b>Website: </b> {restaurant.web} </p>
            <button> Write a reviews </button>
            <p> Google Map </p>
          </div>

          <div className="ReviewsList">
            <ReviewsList reviews={ reviews} />
          </div>
          
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Restaurant);