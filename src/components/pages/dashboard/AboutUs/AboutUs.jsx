import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="aboutus-page" key="aboutus"> 
        <Link to="/dashboard/faq" className="pull-right btn btn-primary btn-outline btn-rounded">FAQ</Link> 
        <h2>Home</h2> 
        <Jumbotron> 
          <h1>About WellCat</h1> 
          WellCat is a service for aquiring as much knowledge about cats and cat health as possible. It was created by a small
          group of students at the University of Guelph as a large semester long assignment. This website was created by 
          Ahmed El Shantaly, Alexander Gontcharov, Anila Hasaj, Christian Rei, and Jinhai Wang as a way for users to actually
          use the WellCat services. This site also displays to you the valuable cat data that we have stored in various databases
          to share the information with those who want to see it. Visit the FAQ for more answers about WellCat that you might 
          want to know.

          Visit our Facebook and Twitter to be up to date with the latest WellCat news!
          <br /><br /> 
        </Jumbotron> 
      </div>        // FB AND TWITTER LINK BUTTONS
    );
  }

});

export default Blank;
