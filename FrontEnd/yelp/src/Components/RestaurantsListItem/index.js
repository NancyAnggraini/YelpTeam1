import React from 'react';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Link } from 'react-router-dom';

const  RestaurantsListItem = (props) => {
  return (
          <TableRow>
            <TableRowColumn>
              <Link to={ 'restaurant/' + props.restaurant.id }>{ props.restaurant.name }</Link>
            </TableRowColumn>
            <TableRowColumn>{ props.restaurant.address }</TableRowColumn>
            <TableRowColumn>{ props.restaurant.phone }</TableRowColumn>
            <TableRowColumn>{ props.restaurant.email }</TableRowColumn>
            <TableRowColumn>
              <a
                href ={ props.restaurant.url }
                rel="noopener noreferrer"
                target="_blank" >{ props.restaurant.url }</a>
            </TableRowColumn>
          </TableRow>
          )
};


export default RestaurantsListItem;
