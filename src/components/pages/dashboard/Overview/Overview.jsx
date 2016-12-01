import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Carousel} from 'react-bootstrap';

var Blank = React.createClass({

  render: function() {
    return (
      <div className="overview-page" key="overview"> 
        <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">About Us</Link> 
        <h2>Home</h2> 
        <Jumbotron>
          <h1>Welcome to WellCat!</h1> 
          The Public Web Interface
        </Jumbotron>

         <Carousel>
          <Carousel.Item>
            <img width={1500} height={500} alt="900x500" src="https://wallpprs.media/1500x500/hidden-cat-in-winter_wallpprs.cpm_.jpg"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={1500} height={500} alt="900x500" src="https://stormideaswus.blob.core.windows.net/headerjunction/2014/91/0d33a55e-b5f4-4234-ad37-8b6b44ba0f0b.jpg"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={1500} height={500} alt="900x500" src="http://www.kittycatter.com/wp-content/uploads/2016/05/cat-ready-to-eat-1500x500.jpeg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
});

export default Blank;