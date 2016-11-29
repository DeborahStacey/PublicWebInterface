import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import $ from 'jquery';




var MyProfile = React.createClass({
  getInitialState: function(){
    
    return {
      name: ''
      "email": '',
      "firstname": '',
      "lastname": '',
      "phonenumber": null,
      "street": '',
      "city": '',
      "unit": '',
      "locationid": '',
      "postalcode": ' '
    };

  },
  componentWillMount: function() {


    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/user/view',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          console.log("Got User");

        }
        else{
          console.log("Cant Get User");
        };
      },
      error: function(response) {
        console.log("Server Error");
      }
    });


    
  },

  componentDidMount: function() {
    
  },

  componentWillUnmount: function(){
    $(window).unbind('resize',this.adjustResize);
  },

  deactivate: function(){

  },

  render: function() {
    return (
      <div className="" key=""> 
        <Link to="/dashboard/MyProfiles" onClick={this.deactivate} className="pull-right btn btn-primary btn-outline btn-rounded">Deactivate</Link> 
        
        <h2>My Profile</h2> 
        <Jumbotron className="col-lg-12">
          <div className="container">
            <div className="row">
              <div className="col-md-5  toppad  pull-right col-md-offset-3 ">
               
                <br />
                <p className=" text-info">May 05,2014,03:00 pm </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Sheena Shrestha</h3>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png" className="img-circle img-responsive" /> </div>
                      <div className=" col-md-9 col-lg-9 "> 
                        <table className="table table-user-information">
                          <tbody>
                            <tr>
                              <td>Phonenumber:</td>
                              <td>6476476478</td>
                            </tr>
                            <tr>
                            </tr><tr>
                              <td>Gender</td>
                              <td>Female</td>
                            </tr>
                            <tr>
                              <td>Street</td>
                              <td>Kathmandu</td>
                            </tr>
                             <tr>
                              <td>Postal Code</td>
                              <td>L5B3G2</td>
                            </tr>
                             <tr>
                              <td>City</td>
                              <td>Nepal</td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td><a href="mailto:info@support.com">info@support.com</a></td>
                            </tr>
                            <tr><td>Phone Number</td>
                              <td>123-4567-8908<br /><br />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#" className="btn btn-primary">Edit My Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }

});



export default MyProfile;
