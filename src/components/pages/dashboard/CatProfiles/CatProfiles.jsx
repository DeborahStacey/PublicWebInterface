import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import $ from 'jquery';

var CatProfiles = React.createClass({
  getInitialState: function(){
    
    return {
      name: '',
      animalTypeID: '',
      breed: '',
      gender: '',
      dateOfBirth: '',
      weight: '',
      height: '',
      length: '',
      declawed: true,
      outdoor: false,
      fixed: true,
      extra: false
    };

  },
  componentWillMount: function() {
    //var form = new FormData();
    //form.append("email", this.state.loginID);
    //form.append("password", this.state.password);
    //form.append("name", "Fluffy");
    //form.append("animalTypeID", 1);
    //form.append("breed", 1);
    //form.append("gender", 1);
    //form.append("dateOfBirth", "2016-10-23");
    //form.append("weight", 15.2);
    //form.append("height", 5.12);
    //form.append("length", 13.56);
    //form.append("declawed", "true");
    //form.append("outdoor", "false");
    //form.append("fixed", "true");
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/pet/pets',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          console.log("Got Cats");

        }
        else{
          console.log("Cant Get Cats");
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

  func: function(){
    var myData = {"name": "Chevy", "animalTypeID": 2, "breed": 12, "gender": 1, "dateOfBirth": "2016-10-23", "weight": 15.2, "height": 5.12, "length": 13.56};

    $.ajax({
      "method": "POST",
      "dataType": "json",
      "data": myData,
      url: 'https://cat.ddns.net/Backend/api.php/pet/create',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          console.log("Created Cats");
        }
        else{
          console.log("Cant Create Cats");
        };
      },
      error: function(response) {
        console.log("Server Error");
      }
    });
  },


  render: function() {
    return (
      <div className="" key=""> 
        <Link to="/dashboard/CatProfiles" onClick={this.func} className="pull-right btn btn-primary btn-outline btn-rounded">Create Cat</Link> 
        
        <h2>Cat Profiles</h2> 
          <Jumbotron className="col-lg-12">              
            <div className="col-md-4">
              <div className="profile-card text-center">
                <div className="profile-info">

                  <img className="profile-pic" src={require("../../../../common/images/catHighFive.jpeg")}></img>
                  <br></br>
                  <h2 className="hvr-underline-from-center">Luigi<span>Bengal cat</span></h2>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
                  <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                </div>
              </div>
          </div>
          <Link to="/dashboard/CatProfiles/CatEdit" className="pull-right btn btn-primary btn-outline btn-rounded">Cat Edit</Link> 

        </Jumbotron>
      </div>
    );
  }

});

export default CatProfiles;
