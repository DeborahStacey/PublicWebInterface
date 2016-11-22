import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination,ListGroup,ListGroupItem,ButtonGroup
,DropdownButton,MenuItem} from 'react-bootstrap';
import searchOptions from './StatsEngine.js';
var PieChart = require("react-chartjs").Pie;

var PublicStats = React.createClass({
  getInitialState: function(){
    return {
      region: '',
      catBreed: '',
      age:'',
      weight:'',
      gender:'',
      height:''
    };
  },

  handleOptions: function(e){
    // axios.post('https://cat.ddns.net/Backend/api.php/user/authenticated', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    console.log("handleOptions");
    this.state.catBreed
    alert("Handle Submit"+e.target.region.value);

    searchOptions(e.target.region.value);
    //e.preventDefault();

  },
  handleSubmit: function(e){
    // axios.post('https://cat.ddns.net/Backend/api.php/user/authenticated', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    alert("Handle Submit"+e.target.region.value);

    searchOptions(e.target.region.value);

  },
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

    console.log(this.state.catBreed);
    console.log(this.state.region);
    console.log(this.state.age);
    console.log(this.state.weight);
    console.log(this.state.gender);
    console.log(this.state.height);
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
              <button className="btn btn-primary" Submit={this.handleOptions} type="button">GO</button>
            </span>
          </div>
        </Panel>
      
        <Panel className="clickablePanel" bsStyle="primary">
          <label className="control-label"><span>Step 2. Specify Options</span></label>
          <form role="form" onSubmit={this.handleOptions}>
            <ListGroup>
              <ListGroupItem>
                  <span>Region: </span>
                  <select id="region" name="region" onChange={this.setRegion}>
                  <option value=""></option>
                    <option value="Canada">Canada</option>
                    <option value="United States">United States</option>
                  </select>
              </ListGroupItem>
              <ListGroupItem>
                <span>Cat Breed: </span>
                  <select id="catBreed" name="catBreed" onChange={this.setCatBreed}>
                  <option value=""></option>
                    <option value="British Shorthair">British Shorthair</option>
                    <option value="Siamese Cat">Siamese Cat</option>
                    <option value="Persian Cat">Persian Cat</option>
                    <option value="Maine Coon">Maine Coon</option>
                  </select>
              </ListGroupItem>
              <ListGroupItem>
                <span>Age (Human Years): </span>
                  <select id="age" name="age" onChange={this.setAge}>
                    <option value=""></option>
                    <option value="Less than 1 years">Less than 1 years</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-6 years">3-6 years</option>
                    <option value="6+ years">6+ years</option>
                  </select>
              </ListGroupItem>
              <ListGroupItem>
                <span>Weight (Pounds): </span>
                  <select id="weight" name="weight" onChange={this.setWeight}>
                    <option value=""></option>
                    <option value="Less than 2 lb">Less than 2 lb</option>
                    <option value="3-4 lb">3-4 lb</option>
                    <option value="5-10 lb">5-10 lb</option>
                    <option value="10+ lb">10+ lb</option>
                  </select>
              </ListGroupItem>
              <ListGroupItem>
                <span>Gender: </span>
                  <select id="gender" name="gender" onChange={this.setGender}>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
              </ListGroupItem>
              <ListGroupItem>
                <span>Height (cm): </span>
                  <select id="height" name="height" onChange={this.setHeight}>
                    <option value=""></option>
                    <option value="1-10 cm">1-10 cm</option>
                    <option value="11-20 cm">11-20 cm</option>
                    <option value="21-30 cm">21-30 cm</option>
                    <option value="30+ cm">30+ cm</option>
                  </select>
              </ListGroupItem>
            </ListGroup>
            <Row style={{textAlign:"center"}}>
              <Col md={6} ><Button type="submit" bsStyle="success" >Generate</Button></Col>
              <Col md={6} ><Button value="Cancel" bsStyle="default" >Reset</Button></Col>
            </Row>
          </form>
        </Panel>

        <Panel className="clickablePanel" bsStyle="primary">
          <label className="control-label"><span>Result</span></label>
          <br/>
          <div style={{margin:"auto",textAlign:"center"}}>
            <PieChart data={data1} options={options1}  width="600" height="400"/>
          </div>
        </Panel>
      </div>
    );
  },

  setAge: function(e) {
    this.setState({
      age: e.target.value,
      ageError: ''
    });

  },
  setWeight: function(e) {
    this.setState({
      weight: e.target.value,
      weightError: ''
    });

  },
  setGender: function(e) {
    this.setState({
      gender: e.target.value,
      genderError: ''
    });

  },
  setHeight: function(e) {
    this.setState({
      height: e.target.value,
      heightError: ''
    });

  },
  setRegion: function(e) {
    this.setState({
      region: e.target.value,
      regionError: ''
    });

  },
  setCatBreed: function(e) {
    this.setState({
        catBreed: e.target.value,
        catBreedError: ''
      });
    }

  }
  

);

export default PublicStats;
