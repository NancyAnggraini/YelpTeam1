import React from 'react';
import '../../style.css';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import ReviewsList from '../../Components/ReviewsList';

class Restaurant extends React.Component {

  render() {
    const restaurant = this.props.restaurants[1];
    console.log('restaurant props', restaurant.name);
    const reviews = this.props.restaurants[1].reviews;
    const srcText = "http://maps.google.com/maps/api/staticmap?center="+restaurant.address+
    "&maptype=roadmap&zoom=14&size=500x350&sensor=false&maptype=HYBRID&markers=color:red|label:"+restaurant.address+"|"+restaurant.address;   

    return (
      <div> 
        <Navbar />
        <div className="RestaurantColumns">

          <div className="RestaurantInfo">
            <img  className="RestaurantLogo" src="#" />
            <h3>{ restaurant.name }</h3>
            <p> Stars Average </p>
            <p> {reviews.length} Reviews </p>
            <p><b>Address:</b> {restaurant.address} </p>
            <p><b>Phone: </b> {restaurant.phone} </p>
            <p><b>Website: </b> <a href={restaurant.web} >{restaurant.web}</a></p>
            <button> Write a review </button>
            <br/><br/>
            <div className="crop">
              <img height="300" width="400" border="5" src="http://maps.google.com/maps/api/staticmap?center={Neumühlequai 42, 8006 Zürich, Schweiz}    
              &maptype=roadmap&zoom=14&size=500x350&sensor=false&maptype=HYBRID&markers=color:red|
              label:Neumühlequai 42, 8006 Zürich, Schweiz|Neumühlequai 42, 8006 Zürich, Schweiz" alt={restaurant.name}/>
            </div>
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