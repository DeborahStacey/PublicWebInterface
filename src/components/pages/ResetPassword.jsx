import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jquery";

var ResetPage = React.createClass({

  getInitialState: function(){
    return {
      email: '',
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
              <form role="form" onSubmit={this.handleLogin} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-lg" placeholder="Email" /> 
                  </div> 
                </div>
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Send Email</button>
                <button type="cancel" className="btn btn-white btn-outline btn-lg btn-rounded">Cancel</button>  
              </form> 
            </div> 
          </div> 
        </div>
      
    );
      

  },

  setLoginID: function(e) {

    this.setState({
      email: e.target.value,
      resetError: ''
    });

  },

  handleReset: function(e){

    // SEND EMAIL HERE
    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  }

});

export default ResetPage;