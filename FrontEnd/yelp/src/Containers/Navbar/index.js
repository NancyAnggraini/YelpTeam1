import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import logo from './logo.png';
import './style.css';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar style= {{ 'backgroundColor': '#B70C03' }} >

        <ToolbarGroup firstChild={true}>
          <img src={logo} className="Yelp-logo" alt="logo" />
          <FlatButton label="About" style= {{ 'backgroundColor': '#B70C03', 'color':'white' }} labelStyle={{ 'textTransform': 'capitalize' }} />
          <FlatButton label="Contact" style= {{ 'backgroundColor': '#B70C03', 'color':'white' }} labelStyle={{ 'textTransform': 'capitalize' }} />
        </ToolbarGroup>

        <ToolbarGroup className="SignInUp">
          <FlatButton label="Sign In" style= {{ 'backgroundColor': '#B70C03', 'color':'white' }} labelStyle={{ 'textTransform': 'capitalize' }}  />
          <FlatButton label="Sign Up" style= {{ 'backgroundColor': '#B70C03', 'color':'white' }} labelStyle={{ 'textTransform': 'capitalize' }}  />
        </ToolbarGroup>

      </Toolbar>
    );
  }
}
