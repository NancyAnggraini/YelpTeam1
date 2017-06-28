import React from 'react';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const  RestaurantsListItem = (props) => {
  return (
          <TableRow>
            <TableRowColumn>{props.restaurant.name}</TableRowColumn>
            <TableRowColumn>{props.restaurant.address}</TableRowColumn>
            <TableRowColumn>{props.restaurant.phone}</TableRowColumn>
            <TableRowColumn>{props.restaurant.email}</TableRowColumn>
            <TableRowColumn>
              <a href ={props.restaurant.url} rel="noopener noreferrer" target="_blank" >{props.restaurant.url}</a>
            </TableRowColumn>
          </TableRow>
          )
};


export default RestaurantsListItem;
