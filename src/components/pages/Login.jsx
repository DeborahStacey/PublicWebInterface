import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jquery";

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [History],

  render: function(){
    console.log(this.state.loginID)
    console.log(this.state.password)
    return(
        <div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../../common/images/flat-avatar1.png")} className="user-avatar" /> 
              <h1>WellCat<small> The Public Web Interface </small></h1> 
              <form role="form" onSubmit={this.handleLogin} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-lg" onChange={this.setLoginID} placeholder="Email" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-lg" onChange={this.setPassword} placeholder="Password" /> 
                  </div>
                  <div>
                    <a href="#ResetPassword" className="linking">Forget your password? Reset your password.</a>
                  </div>
                </div>
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Login</button> 
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
    var loginInfo ={
      "username:":this.state.loginID, 
      "password:":this.state.password
    }
    console.log("data is ",loginInfo);
    $.ajax({
      type: "POST",
      url: "https://cat.ddns.net/Backend/api.php/user/login", // URL of the Perl script
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      // send username and password as parameters to the Perl script
      data: JSON.stringify(loginInfo),
      // script call was *not* successful
      success: function(data, textStatus, jqXHR)
      {
          //data - response from server
          alert("Login Success");
          this.props.history.pushState(null, '/dashboard/overview');
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        $('div#loginResult').text("responseText: " + XMLHttpRequest.responseText 
          + ", textStatus: " + textStatus 
          + ", errorThrown: " + errorThrown);
        $('div#loginResult').addClass("error");
        alert("Login Fail");
      }
    });
    e.preventDefault();
    
    //this.transitionTo('dashboard');
    return false;
  }

});

export default LoginPage;