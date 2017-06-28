import React from 'react';
import '../../style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewsList from '../../Components/ReviewsList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import HalfStar from 'material-ui/svg-icons/toggle/star-half';
import Star from 'material-ui/svg-icons/toggle/star';
import Map from '../../Components/GoogleMaps';
import { fetchRestaurant } from '../../Store/actions.js';

class Restaurant extends React.Component {

  averageCalculator = (reviews) => {
    let totalReviews = 0;
    for (let i=0; i<reviews.length; i++) {
        totalReviews += reviews[i].rating;
      }
    const average = totalReviews / reviews.length;
    return average;
  }

  averageStarsRender = (average) => {
    let stars=[];
    for (let i=1; i<=5; i++) {
      if (i <= average) {
        stars.push(<Star key={i} color="yellow" />)
      } else if (i - average > 0.01 && i - average < 0.99) {
        stars.push(<HalfStar key={i} color="yellow" />)
      } else {
        stars.push(<StarBorder key={i} color="grey" />)
      }
    }
    return <p>{stars}</p>;
  }

  componentDidMount() {
    this.props.dispatch(fetchRestaurant(this.props.params));
  }

  render() {
    if (this.props.restaurant === undefined) return null;

    const restaurantId = this.props.params;
    console.log(typeof(this.props.params));

    // looks for restaurant info
    // let selectedRestaurant;
    // for (let i = 0; i < this.props.restaurant.length; i++) {
    //   if (this.props.restaurant[i].id === restaurantId * 1) {
    //     selectedRestaurant = this.props.restaurant[i];
    //     break;
    //   }
    // }

    // extra variables
    const reviews = this.props.restaurant.reviews;
    // const srcText = `http://maps.google.com/maps/api/staticmap?center=${this.props.restaurant.address}&maptype=roadmap&zoom=14&size=500x350&sensor=false&maptype=HYBRID&markers=color:red|label:${this.props.restaurant.address}|${this.props.restaurant.address}`;
    const linkText = `/restaurant/${restaurantId}/reviews/new`;

    return (
      <div>
        <div className="RestaurantColumns">
          <div className="RestaurantInfo">
            <img
              className="RestaurantLogo"
              src={ this.props.restaurant.logo }
              alt="Restaurant Logo"
              style={{"backgroundColor":"black"}}/>
            <h3>{ this.props.restaurant.name }</h3>
            <div> { this.averageStarsRender(this.averageCalculator(reviews)) } </div>
            <p> { this.props.restaurant.reviews.length } Reviews </p>
            <p><b>Address:</b> { this.props.restaurant.address } </p>
            <p><b>Phone: </b> { this.props.restaurant.phone } </p>
            <p><b>Website: </b> <a href={ this.props.restaurant.url } target="_blank" >{ this.props.restaurant.url }</a></p>
            <Link to={ linkText }><button> Write a review </button></Link>
            <br/><br/>
            <Map address={ this.props.restaurant.address } name={ this.props.restaurant.name }/>
          </div>

          <div className="ReviewsList">
            <ReviewsList reviews={ reviews } />
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => (
  {
    restaurant: state.restaurants[0]
  }
);

export default connect(mapStateToProps)(Restaurant);
