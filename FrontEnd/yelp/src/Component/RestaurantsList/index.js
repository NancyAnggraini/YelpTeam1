import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import {connect} from 'react-redux';
import RestaurantsListItem from '../RestaurantsListItem'


const RestaurantsList = ({restaurants}) => {
  console.log("restaurant: ", restaurants);
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Address</TableHeaderColumn>
          <TableHeaderColumn>Phone</TableHeaderColumn>
          <TableHeaderColumn>Website</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantsListItem key={restaurant.id} restaurant={restaurant}/>
          )
        })}
      </TableBody>
    </Table>
  );
};

const mapStateToProps = (state) => ({restaurants: state.restaurants});

export default connect(mapStateToProps)(RestaurantsList);
