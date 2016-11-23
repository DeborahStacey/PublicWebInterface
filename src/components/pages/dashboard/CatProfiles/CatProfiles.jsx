import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import $ from 'jQuery';

var Blank = React.createClass({
  componentWillMount: function() {
    /*var form = new FormData();
    form.append("email", this.state.loginID);
    form.append("password", this.state.password);
    form.append("name", "Fluffy");
    form.append("animalTypeID", 1);
    form.append("breed", 1);
    form.append("gender", 1);
    form.append("dateOfBirth", "2016-10-23");
    form.append("weight", 15.2);
    form.append("height", 5.12);
    form.append("length", 13.56);
    form.append("declawed", "true");
    form.append("outdoor", "false");
    form.append("fixed", "true");
    */
    var username = "1@mymail.com";
    var password = "Test123";  

    function make_base_auth(user, password) {
      var tok = user + ':' + password;
      var hash = btoa(tok);
      return "Basic " + hash; 
    }
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cat.ddns.net/Backend/api.php/pet/pets",
      "method": "GET",
      withCredentials: true,
      headers: {}
    }
    window.$ = $;
    $.ajax(settings).done(function (response) {
      debugger;
      console.log(response.data);
    })
  },

  componentDidMount: function() {
    
  },

  componentWillUnmount: function(){
    $(window).unbind('resize',this.adjustResize);
  },

  getInitialState: function(){
    
    return {
      loginString: ''
    };

  },

  render: function() {
    return (
      <div className="" key=""> 
        <Link to="/dashboard/catProfiles" className="pull-right btn btn-primary btn-outline btn-rounded">{this.props.name}</Link> 
        
        <h2>Cat Profiles</h2> 
          <Jumbotron className="col-lg-12">              
            <div className="col-md-4">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <img className="profile-pic" src="https://pbs.twimg.com/profile_images/711000557742395396/jzm8hqwW.jpg"></img>
                  <h2 className="hvr-underline-from-center">Rod<span>Digital / Design Consultant</span></h2>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <a href="http://www.twitter.com/mike_youngg"><i className="fa fa-edit fa-2x"></i></a>
                  <a href="mailto:michael_y@live.co.uk"><i className="fa fa-trash-o fa-2x"></i></a>
                </div>
              </div>
            </div>
            
           <div className="col-md-4">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <img className="profile-pic" src="https://pbs.twimg.com/profile_images/711000557742395396/jzm8hqwW.jpg"></img>
                  <h2 className="hvr-underline-from-center">Rod<span>Digital / Design Consultant</span></h2>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <a href="http://www.twitter.com/mike_youngg"><i className="fa fa-edit fa-2x"></i></a>
                  <a href="mailto:michael_y@live.co.uk"><i className="fa fa-trash-o fa-2x"></i></a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <img className="profile-pic" src="https://pbs.twimg.com/profile_images/711000557742395396/jzm8hqwW.jpg"></img>
                  <h2 className="hvr-underline-from-center">Rod<span>Digital / Design Consultant</span></h2>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <a href="http://www.twitter.com/mike_youngg"><i className="fa fa-edit fa-2x"></i></a>
                  <a href="mailto:michael_y@live.co.uk"><i className="fa fa-trash-o fa-2x"></i></a>
                </div>
              </div>
            </div>

          </Jumbotron>
      </div>
    );
  }

});

export default Blank;
