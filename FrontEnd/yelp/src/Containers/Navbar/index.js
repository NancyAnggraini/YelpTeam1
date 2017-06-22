import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import logo from './logo.png';
import './style.css';
import {Link} from 'react-router-dom';

const labelStyles = {
  textTransform: 'capitalize'
};

export default class Navbar extends React.Component {

  render() {
    return (
      <div>
        <Toolbar className="Navbar">

          <ToolbarGroup firstChild={true}>
            <Link to="/">
              <img src={logo} className="Yelp-logo" alt="logo"/>
            </Link>
            <div className="ContactButtons">
              <Link to="/about">
                <FlatButton label="About" className="redBackground" labelStyle={labelStyles}/>
              </Link>
              <Link to="/contact">
                <FlatButton label="Contact" className="redBackground" labelStyle={labelStyles}/>
              </Link>
            </div>
            <form>
              <input placeholder="Type a restaurant name"/>
              <RaisedButton label="Search" className="searchButton" labelStyle={labelStyles} style={{
                'height': 24
              }}/>
            </form>
          </ToolbarGroup>

          <ToolbarGroup >
            <div className="SignButtons">
              <FlatButton label="Sign In" primary={true} className="redBackground" labelStyle={labelStyles}/>
              <FlatButton label="Sign Up" secondary={true} className="redBackground" labelStyle={labelStyles}/>
            </div>
          </ToolbarGroup>

        </Toolbar>
        {this.props.children}
      </div>
    );
  }
}
