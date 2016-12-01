import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Button, Modal} from 'react-bootstrap';
import $ from "jquery";
import ReactDOM from 'react-dom';

var myProfile = React.createClass({

	getInitialState: function(){
    return {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      street: '',
      city: '',
      unit: '',
      locationID: '',
      postalCode: ''
    };
  },

  componentWillMount:function() {
    var that = this;
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/user/view',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          that.setEmail(response.userinfo.email);  
          that.setFirstName(response.userinfo.firstname);
          that.setLastName(response.userinfo.lastname);
          that.setPhoneNumber(response.userinfo.phonenumber);
          that.setStreet(response.userinfo.street);
          that.setCity(response.userinfo.city);
          that.setUnit(response.userinfo.unit);
          that.setLocationID(response.userinfo.locationid);
          that.setPostalCode(response.userinfo.postalcode);
          console.log("Got User Info");
        }
        else{
          console.log("Cant Get User Info");
        };
      },
      error: function(response) {
        console.log("Server Error");
      }
    });
  },

	render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-8 ">
            <div className="panel panel-default">
              <div className="panel-heading">  <h4>My Profile</h4></div>
              <div className="panel-body">
                <div className="box box-info">
                  <div className="box-body">
                    <div className="col-sm-6">
                      <div align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive" /> 
                        <input id="profile-image-upload" className="hidden" type="file" />
                        <div style={{color: '#999'}}>click here to change profile image</div>
                        {/*Upload Image Js And Css*/}
                      </div>
                      <br />
                      {/* /input-group */}
                    </div>
                    <div className="col-sm-6">
                      <h4 style={{color: '#00b1b1'}}>{this.state.firstName} {this.state.lastName}</h4>
                      <span><p>Cat Owner</p></span>            
                    </div>
                    <div className="clearfix" />
                    <hr style={{margin: '5px 0 5px 0'}} />
                    <div className="col-sm-5 col-xs-6 tital ">First Name:</div><div className="col-sm-7 col-xs-6 ">{this.state.firstName}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Last Name:</div><div className="col-sm-7">{this.state.lastName}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Phone Number:</div><div className="col-sm-7">{this.state.phoneNumber}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Street:</div><div className="col-sm-7">{this.state.street}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Unit:</div><div className="col-sm-7">{this.state.unit}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">City:</div><div className="col-sm-7">{this.state.city}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Location ID:</div><div className="col-sm-7">{this.state.locationID}</div>
                    <div className="clearfix" />
                    <div className="bot-border" />
                    <div className="col-sm-5 col-xs-6 tital ">Postal Code:</div><div className="col-sm-7">{this.state.postalCode}</div>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                </div>
              </div> 
            </div>
          </div>  
        </div>
      </div>
    );
  },

  setEmail: function(e) {
    this.setState({
      email: e,
      loginError: ''
    });

  },

  setFirstName: function(e) {
    this.setState({
      firstName: e,
      loginError: ''
    });

  },

  setLastName: function(e) {
    this.setState({
      lastName: e,
      loginError: ''
    });

  },

  setStreet: function(e) {
    this.setState({
      street: e,
      loginError: ''
    });

  },

  setCity: function(e) {
    this.setState({
      city: e,
      loginError: ''
    });

  },

  setUnit: function(e) {
    this.setState({
      unit: e,
      loginError: ''
    });

  },

  setPhoneNumber: function(e) {
    this.setState({
      phoneNumber: e,
      loginError: ''
    });

  },

  setPostalCode: function(e) {
    this.setState({
      postalCode: e,
      loginError: ''
    });

  },

  setLocationID: function(e) {
    this.setState({
      locationID: e,
      loginError: ''
    });

  }

});


export default myProfile;