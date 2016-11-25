import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import $ from 'jQuery';

var Blank = React.createClass({
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
    //form.append("fixed", "true");s

    
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
        <Link to="/dashboard/catProfiles" className="pull-right btn btn-primary btn-outline btn-rounded">LOLL</Link> 
        
        <h2>Cat Profiles</h2> 
          <Jumbotron className="col-lg-12">              
            <div className="col-md-4">
              <div className="profile-card text-center">
                <div className="profile-info">
                  //<img className="profile-pic" src="../../../common/images/catHighFive.jpeg"></img>
                  <h2 className="hvr-underline-from-center">Luigi<span>Breed</span></h2>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <a href="#edit"><i className="fa fa-edit fa-2x"></i></a>
                  <a href="#delete"><i className="fa fa-trash-o fa-2x"></i></a>
                </div>
              </div>
            </div>
          </Jumbotron>
      </div>
    );
  }

});

export default CatProfiles;
