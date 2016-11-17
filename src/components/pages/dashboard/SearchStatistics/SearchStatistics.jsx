import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var searchStatisticsPage = React.createClass({
  render: function() {
    return (
      <div className="searchstatistics-page" key="searchstatistics"> 
        <Link to="/dashboard/faq" className="pull-right btn btn-primary btn-outline btn-rounded">FAQ</Link>
        <h2>Home</h2> 
        <Jumbotron> 
          <h1>Welcome to WellCat!</h1> 
          Search for cat statistics using the fields below!
           <br /><br /> 
          <div className="form-group"> 
            <input type="text" placeholder="Keywords      " /> 
            <button type="submit" className="btn btn-red btn-outline btn-lg btn-rounded" onClick={this.handleSearch}>Search</button> 
            <button class='button button-blue button-rounded'>
              <b>
                OK!
              </b>
            </button>
          </div> 
          <br /><br /> 
        </Jumbotron> 
      </div>
    );
  },

  handleSearch: function(e){
    
    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/Searchstatistics');
      
      // this.transitionTo('dashboard');

    return false;
  }


});

export default searchStatisticsPage;
