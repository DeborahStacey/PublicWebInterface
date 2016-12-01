import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Button, Modal, Form, FormGroup, FormControl, HelpBlock, ButtonToolbar, DropdownButton, MenuItem, ButtonGroup} from 'react-bootstrap';
import $ from "jquery";
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

var myProfile = React.createClass({

	getInitialState: function(){
    return {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      street: '',
      city: '',
      unit: '',
      locationID: 1,
      postalCode: '',
      phoneNumberEdit: '',
      streetEdit: '',
      cityEdit: '',
      unitEdit: '',
      locationIDEdit: 1,
      postalCodeEdit: '',
      password: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      countries: [],
      countriesOriginal: [],
      selectValue: 'Country',
      showModal: false,
      showModal2: false
    };
  },

  componentWillMount:function() {
    var that = this;
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/user/view',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          that.setEmail(response.userinfo.email);  
          that.setFirstName(response.userinfo.firstname);
          that.setLastName(response.userinfo.lastname);
          that.setPhoneNumber(response.userinfo.phonenumber);
          that.setStreet(response.userinfo.street);
          that.setCity(response.userinfo.city);
          that.setUnit(response.userinfo.unit);
          that.setLocationID(response.userinfo.locationid);
          that.setPostalCode(response.userinfo.postalcode);
          console.log("Got User Info");
        }
        else{
          console.log("Cant Get User Info");
        };
      },
      error: function(response) {
        console.log("Server Error");
      }
    });
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
    this.getCountries();
    this.setState({selectValue: this.state.countriesOriginal[this.state.locationID-1].name});
  },

  close2: function() {
    this.setState({ showModal2: false });
  },

  open2: function() {
    this.setState({ showModal2: true });
  },

  _onSelect (option) {
    console.log('You selected ', option.label)
    this.setState({selectValue: option.label})
  },

	render: function() {
    const defaultOption = this.state.selectValue;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-8 ">
            <div className="panel panel-default">
              <div className="panel-heading">  <h4>My Profile</h4></div>
              <div className="panel-body">
                <div className="box box-info">
                  <div className="box-body">
                    <div className="col-sm-6">
                      <div align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive" /> 
                        <input id="profile-image-upload" className="hidden" type="file" />
                        <div style={{color: '#999'}}>click here to change profile image</div>
                        {/*Upload Image Js And Css*/}
                      </div>
                      <br />
                      {/* /input-group */}
                    </div>
                    <div className="col-sm-6">
                      <h4 style={{color: '#00b1b1'}}>{this.state.firstName} {this.state.lastName}</h4>
                      <span><p>Cat Owner</p></span>            
                    </div>
                    <div className="clearfix" />
                    <hr style={{margin: '5px 0 5px 0'}} />
                    <div className="col-sm-5 col-xs-6 tital ">First Name:</div><div className="col-sm-7 col-xs-6 ">{this.state.firstName}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Last Name:</div><div className="col-sm-7">{this.state.lastName}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Phone Number:</div><div className="col-sm-7">{this.state.phoneNumber}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Street:</div><div className="col-sm-7">{this.state.street}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Unit:</div><div className="col-sm-7">{this.state.unit}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">City:</div><div className="col-sm-7">{this.state.city}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Location ID:</div><div className="col-sm-7">{this.state.locationID}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Postal Code:</div><div className="col-sm-7">{this.state.postalCode}</div>
                    <br />
                    <br />
                    <div className="hello" style={wellStyles}>
                    	<Button bsStyle="primary" style={wellStyles} bsSize="medium" onClick={this.open}>Edit Profile</Button>
                    	{'       '}
                    	<Button bsStyle="primary" style={wellStyles} bsSize="medium" onClick={this.open2}>Change Password</Button>
                    </div>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                </div>
              </div> 
            </div>
          </div>  
        </div>
        <div className="row">
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Account Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Change the fields you would like edited and press edit</h4>
              <form>
			    <FormGroup
		          controlId="formBasicText"
		        >
		        <label for="phoneNumber">Phone Number</label>
		          <FormControl
		            type="text"
		            defaultValue={this.state.phoneNumber}
		            placeholder="Enter phone number"
		            onChange={this.setEditedPhoneNumber}
		          />
		          <br />
		          <label for="street">Street</label>
		          <FormControl
		            type="text"
		            defaultValue={this.state.street}
		            placeholder="Enter street"
		            onChange={this.setEditedStreet}
		          />
		          <br />
		          <label for="unit">Unit</label>
		          <FormControl
		            type="text"
		            defaultValue={this.state.unit}
		            placeholder="Enter unit"
		            onChange={this.setEditedUnit}
		          />
		          <br />
		          <label for="city">City</label>
		          <FormControl
		            type="text"
		            defaultValue={this.state.city}
		            placeholder="Enter city"
		            onChange={this.setEditedCity}
		          />
		          <br />
		          <label for="Location">Location</label>
		          <Dropdown options={this.state.countries} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
		          <br />
		          <br />
		          <label for="postalcode">Postal Code</label>
		          <FormControl
		            type="text"
		            defaultValue={this.state.postalCode}
		            placeholder="Enter postal code"
		            onChange={this.setEditedPostalCode}
		          />
		          <FormControl.Feedback />
		          <HelpBlock>Enter your password to confirm changes.</HelpBlock>
		          <FormControl
		            type="password"
		            placeholder="Enter password"
		            onChange={this.setPassword}
		          />
		        </FormGroup>
			   </form>
              </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleEdit}>Edit</Button>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="row">
          <Modal show={this.state.showModal2} onHide={this.close2}>
            <Modal.Header closeButton>
              <Modal.Title>Change Your Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>The two new password fields must match</h4>
              <form>
			    <FormGroup
		          controlId="formBasicText"
		        >
		        <label for="currentPassword">Enter Current Password:</label>
		          <FormControl
		            type="password"
		            placeholder="Current Password"
		            onChange={this.setCurrentPassword}
		          />
		          <br />
		        <label for="newPassword">Enter New Password:</label>
		          <FormControl
		            type="password"
		            placeholder="New password"
		            onChange={this.setNewPassword}
		          />
		          <br />
		          <label for="confirmPassword">Confirm Password:</label>
		          <FormControl
		            type="password"
		            placeholder="Confirm password"
		            onChange={this.setConfirmedPassword}
		          />
		          <br />
		        </FormGroup>
			   </form>
              </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleChange}>Change</Button>
              <Button onClick={this.close2}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  },

  getCountries: function() {
  	var that = this;
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/address/countries',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          that.setCountries(response.countries);
        }
        else{
          console.log("Request Failed");
        };
      },
      error: function(response) {
        console.log("Server Error");
      }
    });
  },

  handleChange: function() {
  	
  	if (this.state.newPassword != this.state.confirmedPassword) {
  		alert("The passwords do not match");
  	} 
  	else 
  	{
	    var updateInfo = {
	      'currentPassword': this.state.currentPassword,
	      'newPassword': this.state.confirmedPassword
	    }
	    console.log(updateInfo);
	    $.ajax({
	      type: "PUT",
	      url: "https://cat.ddns.net/Backend/api.php/user/changePassword",
	      dataType: "json",
	      data: updateInfo,
	      xhrFields: {
	        withCredentials : true
	      }
	    })
	    .done(function(data) {
	      alert("Password Changed")
	    })
	    .fail(function(jqXhr) {
	    	console.log(jqXhr);
	      console.log('Failed to change password');
	    });
	}
  },

  setCountries: function(e){
    var list = [];
    for (var i = e.length - 1; i >= 0; i--) {
      list[i] = e[i].name;
    };
    this.setState({
      countriesOriginal: e,
      countries : list,
      //loginError: ''
    });
  },

  setEmail: function(e) {
    this.setState({
      email: e,
      loginError: ''
    });

  },

  setFirstName: function(e) {
    this.setState({
      firstName: e,
      loginError: ''
    });

  },

  setLastName: function(e) {
    this.setState({
      lastName: e,
      loginError: ''
    });

  },

  setStreet: function(e) {
    this.setState({
      street: e,
      loginError: ''
    });

  },

  setCity: function(e) {
    this.setState({
      city: e,
      loginError: ''
    });

  },

  setUnit: function(e) {
    this.setState({
      unit: e,
      loginError: ''
    });

  },

  setPhoneNumber: function(e) {
    this.setState({
      phoneNumber: e,
      loginError: ''
    });

  },

  setPostalCode: function(e) {
    this.setState({
      postalCode: e,
      loginError: ''
    });

  },

  setLocationID: function(e) {
    this.setState({
      locationID: e,
      loginError: ''
    });

  },

  setPassword: function(e) {
    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  setNewPassword: function(e) {
    this.setState({
      newPassword: e.target.value,
      loginError: ''
    });

  },

  setConfirmedPassword: function(e) {
    this.setState({
      confirmedPassword: e.target.value,
      loginError: ''
    });

  },

  setCurrentPassword: function(e) {
    this.setState({
      currentPassword: e.target.value,
      loginError: ''
    });

  },

  setEditedStreet: function(e) {
    this.setState({
      streetEdit: e.target.value,
      loginError: ''
    });

  },

  setEditedCity: function(e) {
    this.setState({
      cityEdit: e.target.value,
      loginError: ''
    });

  },

  setEditedUnit: function(e) {
    this.setState({
      unitEdit: e.target.value,
      loginError: ''
    });

  },

  setEditedPhoneNumber: function(e) {
    this.setState({
      phoneNumberEdit: e.target.value,
      loginError: ''
    });

  },

  setEditedPostalCode: function(e) {
    this.setState({
      postalCodeEdit: e.target.value,
      loginError: ''
    });

  },

  setEditedLocationID: function(e) {
    this.setState({
      locationIDEdit: e.target.value,
      loginError: ''
    });

  },

  handleEdit: function(e){
    var location = 0;
    var that = this;
    for (var i = this.state.countriesOriginal.length - 1; i >= 0; i--) {
      if(this.state.countriesOriginal[i].name == this.state.selectValue){
        location = this.state.countriesOriginal[i].id;
      }
    };

  	if(this.state.streetEdit == '') {
  		this.state.streetEdit = this.state.street;
  	}
  	if(this.state.unitEdit == '') {
  		this.state.unitEdit = this.state.unit;
  	}
  	if(this.state.cityEdit == '') {
  		this.state.cityEdit = this.state.city;
  	}
  	if(this.state.postalCodeEdit == '') {
  		this.state.postalCodeEdit = this.state.postalCode;
  	}
  	if(this.state.streetEdit == '') {
  		this.state.streetEdit = this.state.street;
  	}
  	if(this.state.phoneNumberEdit == '') {
  		this.state.phoneNumberEdit = this.state.phoneNumber;
  	}
  	if(this.state.password == '') {
  		//error message
  	}

    var addressInfo = {
      'street': this.state.streetEdit, 
      'unit': this.state.unitEdit, 
      'city': this.state.cityEdit, 
      'postalCode': this.state.postalCodeEdit,
      'locationID': location
    }

    var updateInfo = {
      'password': this.state.password,
      'phoneNumber': this.state.phoneNumberEdit,
      'address': addressInfo
    }
    console.log(updateInfo);
    $.ajax({
      type: "PUT",
      url: "https://cat.ddns.net/Backend/api.php/user/update",
      dataType: "json",
      data: updateInfo,
      xhrFields: {
        withCredentials : true
      }
    })
    .done(function(data) {
      alert("Information Updated")
    })
    .fail(function(jqXhr) {
    	console.log(jqXhr);
      console.log('Failed to update');
    });
  }

});


export default myProfile;