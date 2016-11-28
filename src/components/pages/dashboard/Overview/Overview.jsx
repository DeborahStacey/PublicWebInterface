import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  render: function() {
    return (
      <div className="overview-page" key="overview"> 
        <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">About Us</Link> 
        <h2>Home</h2> 
        <Jumbotron> 
          <h1>Welcome to WellCat!</h1> 
          The Public Web Interface
          <br /><br /> 
        </Jumbotron> 
      </div>
    );
  }
  /*setLoginID: function(e) {
    this.setState({
      loginID: e.target.value,
      loginError: ''
    });
  },
  handleLogin: function(e){
    var dataObject = {'email': this.state.loginID, 'password': this.state.password};
    var data = JSON.stringify(dataObject, null, '\t');
    
    //Download function called here
    //this.download(data, 'JSON.txt', 'text/plain');
    
    var form = new FormData();
    form.append("email", this.state.loginID);
    form.append("password", this.state.password);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cat.ddns.net/Backend/api.php/user/login",
      "method": "POST",
      "headers": {},
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {
      var resultsList = JSON.parse(response);
      if (resultsList["success"] == true) {
        console.log("Logged in");
        document.cookie='session=Logout;path=/;';
        
      }
      else{
        console.log("Invalid Login");
        //invalid credentials (invalid login)
        // display error
      };
    });

    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
  
    //this.transitionTo('dashboard');
    return false;
  }*/

});

export default Blank;
