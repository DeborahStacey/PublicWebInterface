import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination,ListGroup,ListGroupItem,ButtonGroup
,DropdownButton,MenuItem} from 'react-bootstrap';
import searchOptions from './PublicStatsEngine.js';
var PieChart = require("react-chartjs").Pie;

var PublicStats = React.createClass({

  //handle submit topic event
  handleTopicSubmit: function(e){
    e.preventDefault();
    alert("Submit Question!");
    //post topic to server and get response
    //clear graph panel
    //populate options

  },

  //populate options for user to choose
  populateOptions: function(){

  },
  
  //handle graph generation event
  handleOptionsSubmit: function(e){
    e.preventDefault();
    console.log("handleSubmit");
    console.log(e.target.region.value);
    console.log(e.target.region);
    
  },
  //handle reset 
  handleReset: function(e){
    e.preventDefault();
    console.log("handleReset");
    e.target.region.value="";
    e.target.catBreed.value="";
    e.target.age.value="";
    e.target.gender.value="";
    e.target.weight.value="";
    e.target.height.value="";
    //reset graph data
  },
  //clear feild
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

        <form onSubmit={this.handleTopicSubmit}>
          <Panel className="clickablePanel" bsStyle="primary">
            <label className="control-label"><span>Step 1. Select A Statistic Topic</span></label>
            <div className="input-group">
              <input list="topics" name="topics" className="form-control" placeholder="Select a topic"/>
              <datalist id="topics">
                <option value="Internet Explorer" />
                <option value="Firefox" />
                <option value="Chrome" />
                <option value="Opera" />
                <option value="Safari" />
              </datalist>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit">GO</button>
              </span>
            </div>
          </Panel>
        </form>

        <form onSubmit={this.handleOptionsSubmit} onReset={this.handleReset} name="optionForm">
          <Panel className="clickablePanel" bsStyle="primary">
            
              <label className="control-label"><span>Step 2. Specify Options</span></label>
              <ListGroup>
                <ListGroupItem>
                    <span>Region: </span>
                    <select id="region" name="region">
                      <option value=""></option>
                      <option value="Canada">Canada</option>
                      <option value="United States">United States</option>
                    </select>
                </ListGroupItem>
                <ListGroupItem>
                  <span>Cat Breed: </span>
                    <select id="catBreed" name="catBreed">
                      <option value=""></option>
                      <option value="British Shorthair">British Shorthair</option>
                      <option value="Siamese Cat">Siamese Cat</option>
                      <option value="Persian Cat">Persian Cat</option>
                      <option value="Maine Coon">Maine Coon</option>
                    </select>
                </ListGroupItem>
                <ListGroupItem>
                  <span>Age (Human Years): </span>
                    <select id="age" name="age">
                      <option value=""></option>
                      <option value="Less than 1 years">Less than 1 years</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="3-6 years">3-6 years</option>
                      <option value="6+ years">6+ years</option>
                    </select>
                </ListGroupItem>
                <ListGroupItem>
                  <span>Gender: </span>
                    <select id="gender" name="gender">
                      <option value=""></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  
                </ListGroupItem>
                <ListGroupItem>
                  <span>Weight (Pounds): </span>
                    <select id="weight" name="weight">
                      <option value=""></option>
                      <option value="Less than 2 lb">Less than 2 lb</option>
                      <option value="3-4 lb">3-4 lb</option>
                      <option value="5-10 lb">5-10 lb</option>
                      <option value="10+ lb">10+ lb</option>
                    </select>
                </ListGroupItem>
                <ListGroupItem>
                  <span>Height (cm): </span>
                    <select id="height" name="height">
                      <option value=""></option>
                      <option value="1-10 cm">1-10 cm</option>
                      <option value="11-20 cm">11-20 cm</option>
                      <option value="21-30 cm">21-30 cm</option>
                      <option value="30+ cm">30+ cm</option>
                    </select>
                </ListGroupItem>
              </ListGroup>
              <Row style={{textAlign:"center"}}>
                <Col md={6} ><Button value="Submit" type="submit" bsStyle="success" >Generate</Button></Col>
                <Col md={6} ><Button value="Cancel" type="reset"  bsStyle="default" >Reset</Button></Col>
              </Row>
            
          </Panel>
        </form>

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
