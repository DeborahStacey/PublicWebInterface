import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";

var PasswordPage = React.createClass({

  getInitialState: function(){
    return {
      password: '',
      confirmPassword: '',
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
              <h1>WellCat<small> Reset Your Password </small></h1> 
              <form role="form" className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-lg" onChange={this.setPassword} placeholder="New Password" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-lg" onChange={this.setConfirmPassword} placeholder="Confirm Password" /> 
                  </div> 
                </div>
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded" onClick={this.handleReset}>Confirm</button>
                <button type="cancel" className="btn btn-white btn-outline btn-lg btn-rounded" onClick={this.handleCancel}>Cancel</button>  
              </form> 
            </div> 
          </div> 
        </div>
      
    );
      

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      resetError: ''
    });

  },

  setConfirmPassword: function(e) {

    this.setState({
      confirmPassword: e.target.value,
      resetError: ''
    });

  },

  handleReset: function(e){

    if(password != confirmPassword && password != "") {
      //Display error
      return false;
    }
    // Change password in database
    e.preventDefault();
    this.props.history.pushState(null, '/login');
    
    // this.transitionTo('dashboard');

    return false;

  },

  handleCancel: function(e){

    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  }

});

export default PasswordPage;
