import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import {connect} from 'react-redux';
import RestaurantsListItem from '../../Components/RestaurantsListItem';
import './style.css';
import './city.png';
import { fetchRestaurants } from '../../Store/actions.js';

const headerStyles = {
  fontWeight: 'bold',
  color: 'black'
};

class RestaurantsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRestaurants());
  }

  render() {
    return (
      <div className="CombineElements">
        <div className="Infobox">
          <h3 className="Title">Yelpdemo is the best way to find reviews on local restaurants.</h3>
          <p>Explore favourite diners, pastry shops, and eateries in your community.
            <br></br>
            Leave reviews and ratings for your fellow foodies.</p>
        </div>
        <div className="RestaurantsList">
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false} fixedHeader={true}>
              <TableRow className="ResataurantList-Header">
                <TableHeaderColumn style={headerStyles}>Name</TableHeaderColumn>
                <TableHeaderColumn style={headerStyles}>Address</TableHeaderColumn>
                <TableHeaderColumn style={headerStyles}>Phone</TableHeaderColumn>
                <TableHeaderColumn style={headerStyles}>Website</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.props.restaurants.map((restaurant) => {
                return (<RestaurantsListItem key={restaurant.id} restaurant={restaurant}/>)
              })}
            </TableBody>
          </Table>
        </div>
        <img className="RestaurantsList-Image" alt="cityLogo" src = {require('./city.png')}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    restaurants: state.restaurants
  }
);

export default connect(mapStateToProps)(RestaurantsList);
