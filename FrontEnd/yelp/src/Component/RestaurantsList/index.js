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

// creat a component from the TableRow in the end
// also as a functional component like this one

const RestaurantsList = ({restaurants}) => {
  console.log(restaurants);
  return (
    <Table>
      <TableHeader diplayRowCheckbox={false} displaySelectAll={false} adjustForCheckbox={false}>
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
            <TableRow key={restaurant.id}>
              <TableRowColumn>{restaurant.name}</TableRowColumn>
              <TableRowColumn>{restaurant.address}</TableRowColumn>
              <TableRowColumn>{restaurant.phone}</TableRowColumn>
              <TableRowColumn>
                <a href ={restaurant.web} target="_blank">{restaurant.web}</a>
              </TableRowColumn>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  );
};

const mapStateToProps = (state) => ({restaurants: state.restaurants});

export default connect(mapStateToProps)(RestaurantsList);
