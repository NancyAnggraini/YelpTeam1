import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';

class ForgotPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  handleEmail = (e) => { this.setState({ email: e.currentTarget.value }); };
  
  render() {
    return (
      <div className="SignUp">
        <h3>Forgot your password?</h3>
        <p>Please enter your e-mail and you will receive an e-mail to reset your password.</p>
        <form className="EditForm">
          <TextField 
            floatingLabelText="Email" 
            floatingLabelFixed={true} 
            style={{ width: '500' }}
            onChange={ this.handleEmail }/><br /><br />
          <RaisedButton type="submit" label="Reset password" />
        </form>
      </div>
    );
  }
}

export default ForgotPassword;