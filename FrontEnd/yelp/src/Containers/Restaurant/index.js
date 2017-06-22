import React from 'react';
import '../../style.css';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import ReviewsList from '../../Components/ReviewsList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import HalfStar from 'material-ui/svg-icons/toggle/star-half';
import Star from 'material-ui/svg-icons/toggle/star';

class Restaurant extends React.Component {

  averageCalculator = (reviews) => {
    // calculates average
    let totalReviews = 0;
    for (let i=0; i<reviews.length; i++) { 
        totalReviews += reviews[i].rate; 
      } 
    const average = totalReviews / reviews.length;
    return average;
  }

  averageStarsRender = (average) => {
  // stars render
    let stars=[];
    console.log('holaaaaaa')
    for (let i=1; i<=5; i++) {
      if (i <= average) { 
        stars.push(<Star color="yellow" />) 
      } else if (i - average === 0.5) {
        stars.push(<HalfStar color="yellow" />) 
      } else {
        stars.push(<StarBorder color="grey" />)  
      }
    }
    return <div>{stars}</div>;
  }

  render() {
    // extra variables
    const restaurant = this.props.restaurants[1];
    const reviews = this.props.restaurants[1].reviews;
    const srcText = "http://maps.google.com/maps/api/staticmap?center="+restaurant.address+
    "&maptype=roadmap&zoom=14&size=500x350&sensor=false&maptype=HYBRID&markers=color:red|label:"+restaurant.address+"|"+restaurant.address;   

    return (
      <div> 
        <Navbar />
        <div className="RestaurantColumns">

          <div className="RestaurantInfo">
            <img  className="RestaurantLogo" src="http://www.echorestaurant.ch/wp-content/uploads/sites/9/2015/10/logo-echo.png" style={{"backgroundColor":"black"}}/>
            <h3>{ restaurant.name }</h3>
            <p> {this.averageStarsRender(this.averageCalculator(reviews))} </p>
            <p> {reviews.length} Reviews </p>
            <p><b>Address:</b> {restaurant.address} </p>
            <p><b>Phone: </b> {restaurant.phone} </p>
            <p><b>Website: </b> <a href={restaurant.web} target="_blank" >{restaurant.web}</a></p>
            <button> Write a review </button>
            <br/><br/>
            <div className="crop">
              <img src={srcText} alt={restaurant.name} />
            </div>
          </div>

          <div className="ReviewsList">
            <ReviewsList reviews={reviews} />
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