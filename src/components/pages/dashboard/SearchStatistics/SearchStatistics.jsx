import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="searchstatistics-page" key="searchstatistics"> 
        <Link to="/dashboard/faq" className="pull-right btn btn-primary btn-outline btn-rounded">FAQ</Link>
        <h2>Home</h2> 
        <Jumbotron> 
          <h1>Welcome to WellCat!</h1> 
          Search stats.
          <br /><br /> 
        </Jumbotron> 
      </div>
    );
  }

});

export default Blank;
