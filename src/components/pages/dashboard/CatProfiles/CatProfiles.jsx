import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Button} from 'react-bootstrap';
import $ from 'jquery';


var CatProfiles = React.createClass({
  getInitialState: function(){
    
    return {
      personal: [],
      breeds: []
    };

  },
  


  componentWillMount: function() {
    var that = this;
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
          that.setPersonal(response.personal);

        }
        else{
          console.log("Cant Get Cats");
        };
      },
      error: function(response) {
        console.log(response);
        console.log("Server Error");
      }
    });   
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/animal/1/breeds',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          that.setBreeds(response.breeds);
        }
        else{
          console.log("Request Failed");
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
    var myData = {'name': 'Luigi', 'animalTypeID': 1, 'breed': 4, 'gender': 1, 'dateOfBirth': '2016-05-15', 'weight': 20.4, 'height': 6.2, 'length': 14.65, 'declawed': true, 'outdoor': false, 'fixed': true};

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
          console.log("Created Cat");

        }
        else{
          console.log("Cant Create Cat");
        };
      },
      error: function(response) {
        console.log(response);
        console.log("Server Error");
      }
    });
  },

  getBreeds:function(){
    var that = this;
    
  },


  render: function() {
    var that = this;
    return (
      <div className="" key=""> 
        <Link to="/dashboard/CatProfiles" onClick={this.func} className="pull-right btn btn-primary btn-outline btn-rounded">Create Cat</Link> 
        
        <h2>Cat Profiles</h2> 
        <Jumbotron className="col-lg-12">              
          <div className="col-lg-12 table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Breed</th>
                  <th>Owner</th>
                  <th>Last Edited</th>
                </tr>
              </thead>
              <tbody>
                {
                    this.state.personal.map(function(ub) {
                        return (
                          <tr key={ub.petid}>
                            <td>{ub.name}</td>
                            <td>{ub.gender==1 ? 'Male' : 'Female'}</td>
                            <td>{that.findBreed(ub.breed)}</td>
                            <td>{ub.firstname +" "+ub.lastname}</td>
                            <td>{ub.lastupdated}</td>
                            <td><Button onClick={that.viewCat(ub.petid)} bsStyle="success">View Profile</Button></td>
                          </tr>
                        )
                    })
                }
              </tbody>
            </table>
          </div>
        </Jumbotron>
      </div>
    );
  },

  viewCat: function(id){
    document.cookie='kitty='+id+';path=/dashboard/CatView;';
  },

  findBreed: function(breedID){
    for (var i = this.state.breeds.length - 1; i >= 0; i--) {
      if(this.state.breeds[i].id == breedID){
        return(this.state.breeds[i].name);
      }
    };
    return "Unknown";
  },

  setBreeds: function(e){
    this.setState({
      breeds: e,
      loginError: ''
    });
  },

  setPersonal: function(e) {
    this.setState({
      personal: e,
      loginError: ''
    });
  }

});

export default CatProfiles;
