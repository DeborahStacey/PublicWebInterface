import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Panel, Input, Button, DropdownButton, MenuItem, ButtonGroup} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jquery";
import Dropdown from 'react-dropdown';

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
      countries: [],
      countriesOriginal: [],
      selectValue: 'Country',
      isSubmitted: false
    };
  },

  componentWillMount: function() {
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
        console.log(response);
        console.log("Server Error");
      }
    });
  },

  mixins: [History],

  _onSelect (option) {
    console.log('You selected ', option.label)
    this.setState({selectValue: option.label})
  },

  render: function() {
    const defaultOption = this.state.selectValue;
    var that = this;
  
    return (
      <div className="login-page ng-scope ui-view"> 
        <div className="row"> 
          <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
            <img src={require("../../common/images/flat-avatar1.png")} className="user-avatar" /> 
            <h1>WellCat<small><br/>Join Us</small></h1> 
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
                  <Dropdown options={this.state.countries} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
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
      unit: e.target.value,
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
      //locationID: e.target.value,
      //loginError: ''
    });
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

  handleRegistration: function(e){
    var location = 0;
    var that = this;
    for (var i = this.state.countriesOriginal.length - 1; i >= 0; i--) {
      if(this.state.countriesOriginal[i].name == this.state.selectValue){
        location = this.state.countriesOriginal[i].id;
      }
    };

    var addressInfo = {
      'street': this.state.street, 
      'unit': this.state.unit, 
      'city': this.state.city, 
      'postalCode': this.state.postalCode,
      'locationID': location
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
      alert("Account created");
      that.props.history.pushState(null, '/dashboard/overview');
    })
    .fail(function(jqXhr) {
      alert("Failed to register");
    });
  } 

});

export default regPage;