import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination,ListGroup,ListGroupItem,ButtonGroup
,DropdownButton,MenuItem} from 'react-bootstrap';
var PieChart = require("react-chartjs").Pie;

var PublicStats = React.createClass({
  
  render: function() {
    var data1 = [ { value: 300, color:"#F7464A", highlight: "#FF5A5E", label: "Red" },
              { value: 50, color: "#46BFBD", highlight: "#5AD3D1", label: "Green" }, 
              { value: 100, color: "#FDB45C", highlight: "#FFC870", label: "Yellow" } ];

    var options1 = { segmentShowStroke : true,
                     segmentStrokeColor : "#fff",
                     segmentStrokeWidth : 2,
                     percentageInnerCutout : 0,
                     animationSteps : 100,
                     animationEasing : "easeOutBounce",
                     animateRotate : true,
                     animateScale : false };
    return (
      <div className="faq-page" key="faq"> 
      <div className="page-header">
        <h1>Cat Population Stats</h1>
      </div>
      <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> This page provides features for user 
      to view different statistic about cat. You can choose the question that interest you and specify the options to view 
      graph and chart. 
      </Well>
      
      <Panel className="clickablePanel" bsStyle="primary">
      <label className="control-label"><span>Step 1. Select A Statistic Topic</span></label>
      <div className="input-group">
        <input list="browsers" name="browser" className="form-control" placeholder="Select a topic"/>
        <datalist id="browsers">
          <option value="Internet Explorer" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">GO</button>
        </span>
      </div>
      </Panel>
      
      <Panel className="clickablePanel" bsStyle="primary">
        <label className="control-label"><span>Step 2. Specify Options</span></label>
        <ListGroup>
          <ListGroupItem>
              <span>Region: </span>
              <select id="region" name="region">
              <option value="region0"></option>
                <option value="region1">Canada</option>
                <option value="region2">United States</option>
              </select>
          </ListGroupItem>
          <ListGroupItem>
            <span>Cat Breed: </span>
              <select id="catBreed" name="catBreed">
              <option value="catBreed0"></option>
                <option value="catBreed1">British Shorthair</option>
                <option value="catBreed2">Siamese Cat</option>
                <option value="catBreed3">Persian Cat</option>
                <option value="catBreed4">Maine Coon</option>
              </select>
          </ListGroupItem>
          <ListGroupItem>
            <span>Age (Human Years): </span>
              <select id="age" name="age">
              <option value="age0"></option>
                <option value="age1">Less than 1 years</option>
                <option value="age2">1-2 years</option>
                <option value="age3">3-6 years</option>
                <option value="age4">6+ years</option>
              </select>
          </ListGroupItem>
          <ListGroupItem>
            <span>Weight (Pounds): </span>
              <select id="weight" name="weight">
              <option value="weight0"></option>
                <option value="weight1">Less than 2 lb</option>
                <option value="weight2">3-4 lb</option>
                <option value="weight3">5-10 lb</option>
                <option value="weight4">10+ lb</option>
              </select>
          </ListGroupItem>
          <ListGroupItem>
            <span>Gender: </span>
              <select id="gender" name="gender">
              <option value="gender0"></option>
                <option value="gender1">Male</option>
                <option value="gender2">Female</option>
                <option value="gender3">Other</option>
              </select>
            
          </ListGroupItem>
          <ListGroupItem>
            <span>Height (cm): </span>
              <select id="height" name="height">
              <option value="height0"></option>
                <option value="height1">1-10 cm</option>
                <option value="height2">11-20 cm</option>
                <option value="height3">21-30 cm</option>
                <option value="height4">30+ cm</option>
              </select>
          </ListGroupItem>
        </ListGroup>
        <Row style={{textAlign:"center"}}>
          <Col md={6} ><Button value="Submit" bsStyle="success" >Generate</Button></Col>
          <Col md={6} ><Button value="Cancel" bsStyle="default" >Reset</Button></Col>
        </Row>
      </Panel>

      <Panel className="clickablePanel" bsStyle="primary">
        <label className="control-label"><span>Result</span></label>
        <br />
        <div style={{margin:"auto",textAlign:"center"}}>
          <PieChart data={data1} options={options1}  width="600" height="400"/>
        </div>
      </Panel>

      </div>
    );
  }

});

export default PublicStats;
