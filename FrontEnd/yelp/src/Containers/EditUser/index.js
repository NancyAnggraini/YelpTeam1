import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';

class EditUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      newPassword: '',
      passwordRepeat: '',
      currentPassword: '',
    }
  }

  handleFirstName = (e) => { this.setState({ firstaName: e.currentTarget.value }); };
  handleLastName = (e) => { this.setState({ lastaName: e.currentTarget.value }); };
  handleEmail = (e) => { this.setState({ email: e.currentTarget.value }); };
  handleNewPassword = (e) => { this.setState({ newPassword: e.currentTarget.value }); };
  handlePasswordRepeat = (e) => { this.setState({ passwordRepeat: e.currentTarget.value }); };
  handleCurrentPassword = (e) => { this.setState({ currentPassword: e.currentTarget.value }); };
  
  render() {
    return (
      <div className="SignUp">
        <h3>Edit your profile</h3>
        <form className="EditForm">
          <TextField
            floatingLabelText="First Name" 
            floatingLabelFixed={true} 
            style={{ width: '500' }}
            onChange={ this.handleLastName }/><br />
          <TextField 
            floatingLabelText="Last Name" 
            floatingLabelFixed={true} 
            style={{ width: '500' }}
            onChange={ this.handleLastName }/><br />
          <TextField 
            floatingLabelText="Email" 
            floatingLabelFixed={true} 
            style={{ width: '500' }}
            onChange={ this.handleEmail }/><br />
          <TextField 
            type="password" 
            floatingLabelText="New Password (LEFT IT BLANK IF DO NOT WANT TO CHANGE IT)" 
            style={{ width: '500' }}
            floatingLabelFixed={true} 
            onChange={this.handleNewPassword }/><br />
          <TextField 
            type="password" 
            floatingLabelText="First Name" 
            style={{ width: '500' }}
            floatingLabelFixed={true} 
            onChange={this.handlePasswordRepeat }/><br />
          <TextField 
            type="password" 
            floatingLabelText="Current Password" 
            style={{ width: '500' }}
            floatingLabelFixed={true} 
            onChange={this.handleCurrentPassword }/><br /><br />
          
          <RaisedButton type="submit" label="Update" />
        </form>
      </div>
    );
  }
}

export default EditUser;