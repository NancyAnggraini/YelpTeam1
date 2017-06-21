import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import {connect} from 'react-redux';

class RestaurantsList extends Component {
  render() {
    console.log(this.props.restaurants);
    return (
      <div>
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
            <TableRow>
              <TableRowColumn>Ristorante Bindella</TableRowColumn>
              <TableRowColumn>In Gassen 6 8001 Zurich</TableRowColumn>
              <TableRowColumn>044 221 25 46</TableRowColumn>
              <TableRowColumn>{'http://www.bindella.ch/de/bindella-zuerich.html'}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({restaurants: state.restaurants});

export default connect(mapStateToProps)(RestaurantsList);
