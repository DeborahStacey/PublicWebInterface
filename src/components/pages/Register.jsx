import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jquery";

var regPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      city: '',
      postalCode: '',
      street: '',
      unit: '',
      locationID: 0,
      isSubmitted: false
    };
  },

  mixins: [History],

  render: function() {
    console.log(this.state.loginID);
    console.log(this.state.password);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.city);
    console.log(this.state.postalCode);
    console.log(this.state.street);
    console.log(this.state.Unit);
    console.log(this.state.LocationID);
  
    return (
      <div className="login-page ng-scope ui-view"> 
        <div className="row"> 
          <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
            <img src={require("../../common/images/flat-avatar1.png")} className="user-avatar" /> 
            <h1>WellCat<small> Join WellCat </small></h1> 
            <form role="form" onSubmit={this.handleRegistration} className="ng-pristine ng-valid"> 
              <div className="form-content"> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setLoginID} placeholder="Email" /> 
                </div> 
                <div className="form-group"> 
                  <input type="password" className="form-control input-underline input-md" onChange={this.setPassword} placeholder="Password" /> 
                </div>
                <div className="form-group"> 
                  <input type="password" className="form-control input-underline input-md" onChange={this.setConfirmPassword} placeholder="Confirm password" /> 
                </div>
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setFirstName} placeholder="First name" /> 
                </div> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setLastName} placeholder="Last name" /> 
                </div> 
                <div>
                  Address Information
                </div>
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setStreet} placeholder="Street & Street Number" /> 
                </div> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setUnit} placeholder="Unit" /> 
                </div> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setCity} placeholder="City" /> 
                </div> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setPostalCode} placeholder="Postal code" /> 
                </div>
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setLocationID} placeholder="LocationID" /> 
                </div>
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Create Account</button> 
              </div>
            </form> 
          </div> 
        </div> 
      </div>
    );
  },

  setLoginID: function(e) {
    this.setState({
      loginID: e.target.value,
      //loginError: ''
    });
  },

  setPassword: function(e) {
    this.setState({
      password: e.target.value,
      //loginError: ''
    });
  },

  setConfirmPassword: function(e) {
    this.setState({
      confirmPassword: e.target.value,
      //loginError: ''
    });
  },

  setFirstName: function(e) {
    this.setState({
      firstName: e.target.value,
      //loginError: ''
    });
  },

  setLastName: function(e) {
    this.setState({
      lastName: e.target.value,
      //loginError: ''
    });
  },

  setStreet: function(e) {
    this.setState({
      street: e.target.value,
      //loginError: ''
    });
  },

  setUnit: function(e) {
    this.setState({
      password: e.target.value,
      //loginError: ''
    });
  },

  setCity: function(e) {
    this.setState({
      city: e.target.value,
      //loginError: ''
    });
  },

  setPostalCode: function(e) {
    this.setState({
      postalCode: e.target.value,
      //loginError: ''
    });
  },

  setLocationID: function(e) {
    this.setState({
      locationID: e.target.value,
      //loginError: ''
    });
  },

  handleRegistration: function(e){
    var addressInfo = {
      'street': this.state.street, 
      'unit': this.state.unit, 
      'city': this.state.city, 
      'postalCode': this.state.postalCode,
      'locationID': this.state.locationID
    }

    var registerInfo = {
      'email': this.state.loginID, 
      'password': this.state.password, 
      'firstName': this.state.firstName, 
      'lastName': this.state.lastName,
      'address': addressInfo
    }

    $.ajax({
      type: "POST",
      url: "https://cat.ddns.net/Backend/api.php/user/register",
      data: registerInfo
    })
    .done(function(data) {
      alert("Account created")
    })
    .fail(function(jqXhr) {
      console.log('Failed to register');
    });
  }
});

export default regPage;