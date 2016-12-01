import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jquery";


var LoginPage = React.createClass({

  //variable initilization
  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [History],

  render: function(){
    //any code that has to be executed everytime the user changes anything in this component

    console.log(this.state.loginID)
    console.log(this.state.password)


    //Return HTML to be shown and rendered
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

  //Seters (sets field values to variables everytime the value is changed)
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

  //Downloads JSON file to show you if you are doing it right
  download:function(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
  },

  handleLogin: function(e){
    //var dataObject = {'email': this.state.loginID, 'password': this.state.password};
    //var data = JSON.stringify(dataObject, null, '\t');
    
    //Download function called here
    //this.download(data, 'JSON.txt', 'text/plain');

    var that = this;
    var email = this.state.loginID;
    var myData = {'email' : this.state.loginID, 'password' : this.state.password}

    $.ajax({
      "url": "https://cat.ddns.net/Backend/api.php/user/login",
      "method": "POST",
      "dataType": "json",
      "data": myData,
      "xhrFields": {
        "withCredentials" : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          console.log("Logged in");
          document.cookie='username=Logout;path=/;';
          document.cookie='email='+email+';path=/;';
          that.props.history.pushState(null, '/dashboard/overview');
        }
        else{

          console.log("Invalid Login");
        };
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        $('div#loginResult').text("responseText: " + XMLHttpRequest.responseText 
            + ", textStatus: " + textStatus 
            + ", errorThrown: " + errorThrown);
          $('div#loginResult').addClass("error");
        console.log("Server Error");
      }
    });

    e.preventDefault();
    
    //this.transitionTo('dashboard');
    return false;
  }

});


export default LoginPage;