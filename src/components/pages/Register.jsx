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
      locationID: '',
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
                  <input type="text" className="form-control input-underline input-md" onChange={this.setLoginID} value="AGontcharov@gmail.com" placeholder="Email" /> 
                </div> 
                <div className="form-group"> 
                  <input type="password" className="form-control input-underline input-md" onChange={this.setPassword} value="1234" placeholder="Password" /> 
                </div>
                <div className="form-group"> 
                  <input type="password" className="form-control input-underline input-md" onChange={this.setConfirmPassword} value="1234" placeholder="Confirm password" /> 
                </div>
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setFirstName} value="Alexander" placeholder="First name" /> 
                </div> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setLastName} value="Gontcharov" placeholder="Last name" /> 
                </div> 
                <div>
                  Address Information
                </div>
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setStreet} value="1055 Gordon Street" placeholder="Street & Street Number" /> 
                </div> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setUnit} value="9" placeholder="Unit" /> 
                </div> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setCity} value="Guelph" placeholder="City" /> 
                </div> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setPostalCode} value="N1G 4x9" placeholder="Postal code" /> 
                </div>
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-md" onChange={this.setLocationID} value="13" placeholder="LocationID" /> 
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
    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    // this.transitionTo('dashboard');
    return false;
  }
});

export default regPage;