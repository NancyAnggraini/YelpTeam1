import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchRestaurantsList from '../../Containers/SearchRestaurantsList';


class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      restaurants: {},
    };
  }
  componentDidMount(){

  }
  render(){
    return(
      // <RestaurantsList restaurants={this.state.restaurants}/>
      <SearchRestaurantsList/>
    );
  }
}


export default connect()(Search);
