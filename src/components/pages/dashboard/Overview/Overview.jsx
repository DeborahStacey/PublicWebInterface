import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
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

});

export default Blank;
