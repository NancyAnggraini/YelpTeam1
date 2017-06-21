import React from 'react';
import '../../style.css';
import { connect } from 'react-redux';
import Navbar from '../Navbar';

class Restaurant extends React.Component {

  render() {
    console.log(this.props);
    
    return (
      <div> 
        <Navbar />
        <h1> Restaurant view - coming soon... </h1>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Restaurant);