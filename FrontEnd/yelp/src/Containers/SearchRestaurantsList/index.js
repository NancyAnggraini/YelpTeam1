import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import RestaurantsListItem from '../../Components/RestaurantsListItem'

const headerStyles = {
  fontWeight: 'bold',
  color: 'black'
};

class SearchRestaurantsList extends Component {
	render(){
		return(<div className="CombineElements">
			<Table>
	            <TableHeader displaySelectAll={false} adjustForCheckbox={false} fixedHeader={true}>
	              <TableRow className="ResataurantList-Header">
	                <TableHeaderColumn style={headerStyles}>Name</TableHeaderColumn>
	                <TableHeaderColumn style={headerStyles}>Address</TableHeaderColumn>
	                <TableHeaderColumn style={headerStyles}>Phone</TableHeaderColumn>
	                <TableHeaderColumn style={headerStyles}>Email</TableHeaderColumn>
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
			)
	}
}

const mapStateToProps = (state) => (
  {
    restaurants: state.restaurants
  }
);

export default connect(mapStateToProps)(SearchRestaurantsList);
