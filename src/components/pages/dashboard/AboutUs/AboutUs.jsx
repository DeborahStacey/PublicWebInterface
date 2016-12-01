import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Thumbnail, Grid, Row, Col} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="aboutus-page" key="aboutus"> 
        <Link to="/dashboard/faq" className="pull-right btn btn-primary btn-outline btn-rounded">FAQ</Link> 
        <h2>About Us</h2> 
        <Jumbotron> 
          <h1>About WellCat</h1> 
          <br/>

          <p>WellCat is a service for aquiring as much knowledge about cats and cat health as possible. It was created by a small
          group of students at the University of Guelph as a large semester long assignment. This website was created by 
          Ahmed El Shantaly, Alexander Gontcharov, Anila Hasaj, Christian Rei, and Jinhai Wang as a way for users to actually
          use the WellCat services. This site also displays to you the valuable cat data that we have stored in various databases
          to share the information with those who want to see it. Visit the FAQ for more answers about WellCat that you might 
          want to know.</p>

          <br/><br/>
          <Grid>
            <Row>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="https://react-bootstrap.github.io/assets/thumbnail.png" />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="https://react-bootstrap.github.io/assets/thumbnail.png" />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="https://react-bootstrap.github.io/assets/thumbnail.png" />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="https://react-bootstrap.github.io/assets/thumbnail.png" />
              </Col>
            </Row>
          </Grid> 

          <p>Visit our Facebook and Twitter to be up to date with the latest WellCat news!</p>
        </Jumbotron> 
      </div>        // FB AND TWITTER LINK BUTTONS
    );
  }

});

export default Blank;
