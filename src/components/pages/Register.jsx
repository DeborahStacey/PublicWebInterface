import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";

var regPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      confirmedPassword: '',
      firstName '',
      lastName '',
      city '',
      postalCode '',
      street '',
      unit '',
      isSubmitted: false
    };
  },

  mixins: [History],

  render: function(){
    console.log(this.state.loginID)
    console.log(this.state.password)
    console.log(this.state.confirmedPassword)
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.city)
    console.log(this.state.postalCode)
    console.log(this.state.street)
    console.log(this.state.unit)
    return(
        <div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../../common/images/flat-avatar1.png")} className="user-avatar" /> 
              <h1>WellCat<small> Join WellCat </small></h1> 
              <form role="form" onSubmit={this.handleRegister} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-md" onChange={this.setLoginID} placeholder="Email" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-md" onChange={this.setPassword} placeholder="Password" /> 
                  </div>
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-md" onChange={this.setConfirmedPassword} placeholder="Confirm password" /> 
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
                </div>
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Register</button> 
              </form> 
            </div> 
          </div> 
        </div>
      
    );
      
  },

  setLoginID: function(e) {

    this.setState({
      loginID: e.target.value,
      registerError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  setConfirmedPassword: function(e) {

    this.setState({
      confirmedPassword: e.target.value,
      registerError: ''
    });

  },

  setFirstName: function(e) {

    this.setState({
      firstName: e.target.value,
      registerError: ''
    });

  },

  setLastName: function(e) {

    this.setState({
      lastName: e.target.value,
      registerError: ''
    });

  },

  setStreet: function(e) {

    this.setState({
      street: e.target.value,
      registerError: ''
    });

  },

  setUnit: function(e) {

    this.setState({
      unit: e.target.value,
      registerError: ''
    });

  },

  setCity: function(e) {

    this.setState({
      city: e.target.value,
      registerError: ''
    });

  },

  setPostalCode: function(e) {

    this.setState({
      postalCode: e.target.value,
      registerError: ''
    });

  },

  handleRegister: function(e){

    // LOG THEM INTO THEIR NEW ACCOUNT AND ENTER INTO DATABASE
    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  }

});

export default regPage;