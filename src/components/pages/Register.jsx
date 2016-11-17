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
  
    return(
        <div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../../common/images/flat-avatar1.png")} className="user-avatar" /> 
              <h1>WellCat<small> Join WellCat </small></h1> 
              <form role="form" onSubmit={this.handleLogin} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-md" placeholder="Email" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-md" placeholder="Password" /> 
                  </div>
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-md" placeholder="Confirm password" /> 
                  </div>
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-md" placeholder="First name" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-md" placeholder="Last name" /> 
                  </div> 
                  <div>
                    Address Information
                  </div>
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-md" placeholder="Street & Street Number" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-md" placeholder="Unit" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-md" placeholder="City" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-md" placeholder="Postal code" /> 
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
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){

    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  }

});

export default regPage;