import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination,ListGroup,ListGroupItem,ButtonGroup
,DropdownButton,MenuItem} from 'react-bootstrap';
import SuggestTopicModal from './SuggestTopicModal.jsx';
import {searchOptions,readJsonData,populateTopics,populateOptions,
populateData} from './PublicAnalysis/src/js/PublicAnalysisInterface.js';    //import function from PublicStatsEngine

var PieChart = require("react-chartjs").Pie;
var BarChart = require("react-chartjs").Bar;
var DoughnutChart = require("react-chartjs").Doughnut;
var LineChart = require("react-chartjs").Line;

var PublicStats = React.createClass({
  //state: searchTopic, plotData
  getInitialState: function(){
    return{
      selectedTopic:"",
      optionsFields:"",
      selectedOptions:"",
      plotData:"",
      error:"",
      modalShow: false
    }
  },
  //handle submit topic event
  handleTopicSubmit: function(e){
    var topicVar = e.target.topics.value;
    e.preventDefault();

    //post seleted topic to server and get response
    var optionListRequest = populateOptions(topicVar);

    //check if there is error
    if("errorType" in optionListRequest){
      this.setState({
        selectedTopic: "",
        plotData:"",
        optionsFields:"",
        selectedOptions:""
      });
      this.setState({
        error: optionListRequest
      });
      return;
    }
    else{
      //set state
      this.setState({
        selectedTopic: topicVar,
        optionsFields: optionListRequest,
        error:""
      });
      //clear graph panel
      //populate options
    }
    
  },
  
  //handle graph generation event
  handleOptionsSubmit: function(e){
    e.preventDefault();
    //collect all the value 
    
    var dataRequest={
      "dataRequest":{
        "topic": this.state.selectedTopic,
        "options": {}
      }
    };

    //error checking
    //check for required field
    var restriction = this.state.optionsFields.optionRestriction;
    if(restriction.requiredValue.length>0){
      //console.log("check for required field",restriction.requiredValue[0]);
      var errorOptionForm="";
      var count=0;
      for(var i=0;i<restriction.requiredValue.length;i++){
        var temp = restriction.requiredValue[i];
        console.log("temp value",temp);
        
        if(temp in e.target){
          if(e.target[temp].value.length==0){
            var comma=", ";
            if(count==0){
              comma="";
            }
            errorOptionForm+=comma+temp;
            count++;
          }
          
        }
      }
      if(errorOptionForm!=""){
        console.log(errorOptionForm,"are required field");
        var error = {
          "errorType":"Options",
          "errorLocation":"Options",
          "errotCode":"0010",
          "errorMessage":"The following field(s) are required: "+errorOptionForm
        }
        this.setState({
          error: error
        });
        console.log(error);
        return;
      }  
    }

    //build dataRequest object to request plotdata
    var keys = Object.keys( this.state.optionsFields.optionList );
    for(var i=0;i<keys.length;i++){
      dataRequest.dataRequest.options[keys[i]]=e.target[keys[i]].value;
     
    }

    //send request for graph ploting data
    var plotData = populateData(dataRequest);
    //error checking
    if("errorType" in plotData){
      //there is error, set error state
      this.setState({
        error: plotData
      });
    }
    else{
      //no error
      //set state
      this.setState({
        plotData: plotData,
        error:""
      });
    }
 
  },
  //handle reset 
  handleReset: function(e){
    e.preventDefault();
    console.log("handleReset");

    var keys = Object.keys( this.state.optionsFields.optionList );
    for(var i=0;i<keys.length;i++){
      e.target[keys[i]].value="";
    }
    //reset plot data
    this.setState({
        plotData: "",
        error:""
    });
  },

  //poplate list of topic for search
  populateTopics: function(){
    var topicList = populateTopics();
    var count = topicList.topic.length;
    return(
        <datalist id="topics">
          { 
            topicList.topic.map( 
              function(topicValue,i){
                return(<option value={topicValue} key={i}/>);
              }
            )
            
          }
        </datalist>
    );
  },
  
  //populate options for user to choose
  populateOptionFields: function(){
    var fields = this.state.optionsFields.optionList;
    var restriction = this.state.optionsFields.optionRestriction;
    console.log("populateOptionFields",restriction,"testing value",restriction.requiredValue,
      restriction.requiredValue.indexOf("age"),restriction.requiredValue.indexOf("gender"));
    return(
      Object.keys(fields).map(
        function(key,i){
          console.log("print", key);
          return( <ListGroupItem key={i} name={key}>
                      <span>{restriction.requiredValue.indexOf(key)>=0?<span className="requiredField">*</span>:""}{key}: </span>
                        <select id="region" name={key}>
                            {fields[key].map(
                              function(value,k){
                                return(<option value={value} key={k}>{value}</option>);
                              }
                            )}
                        </select>         
                  </ListGroupItem>);
        }
      )  
    );
    
  },
  //create option form
  getOptionForm: function(){
    return(
      <div>
        <form onSubmit={this.handleOptionsSubmit} onReset={this.handleReset} name="optionForm">
          <Panel className="clickablePanel" bsStyle="primary">
            
              <label className="control-label">
                <span>Step 2. Specify Options </span>
              </label>

              <ListGroup>
                {this.populateOptionFields()}  
              </ListGroup>
              <span className="requiredField">*</span> Indicates required field
              {this.state.error.errorLocation=="Options"?this.getErrorDisplay():""}
              <Row style={{textAlign:"center"}}>
                <Col md={6} ><Button value="Submit" type="submit" bsStyle="success" >Generate</Button></Col>
                <Col md={6} ><Button value="Cancel" type="reset"  bsStyle="default" >Reset</Button></Col>
              </Row>
              
          </Panel>
        </form>
      </div>
    );
  },
  //creat graph panel
  getGraphPanel: function(plotDataVal){
    var options1 = { segmentShowStroke : true,
                     segmentStrokeColor : "#fff",
                     segmentStrokeWidth : 2,
                     percentageInnerCutout : 0,
                     animationSteps : 100,
                     animationEasing : "easeOutBounce",
                     animateRotate : true,
                     animateScale : false };
    
    var plotGraph;
    if(plotDataVal.chartType=="PieChart"){
      plotGraph=(
        <div style={{margin:"auto",textAlign:"center"}}>
              <PieChart data={plotDataVal.data} options={options1}  width="600" height="400"/>
        </div>);
      console.log("getGraphPanel chart type",plotDataVal.chartType);
    }
    else if(plotDataVal.chartType=="BarChart"){
      plotGraph=(
        <div style={{margin:"auto",textAlign:"center"}}>
              <BarChart data={plotDataVal.data} options={options1}  width="600" height="400"/>
        </div>);
      console.log("getGraphPanel chart type",plotDataVal.chartType);
    }
    else if(plotDataVal.chartType=="DoughnutChart"){
      plotGraph=(
        <div style={{margin:"auto",textAlign:"center"}}>
              <DoughnutChart data={plotDataVal.data} options={options1}  width="600" height="400"/>
        </div>);
      console.log("getGraphPanel chart type",plotDataVal.chartType);
    }
    else if(plotDataVal.chartType=="LineChart"){
      plotGraph=(
        <div style={{margin:"auto",textAlign:"center"}}>
              <LineChart data={plotDataVal.data} options={options1}  width="600" height="400"/>
        </div>);
      console.log("getGraphPanel chart type",plotDataVal.chartType);
    }
 
    // var plotGraph=(
    //   <div style={{margin:"auto",textAlign:"center"}}>
    //         <StatsChart data={plotDataVal.data} options={options1}  width="600" height="400"/>
    //   </div>);
    // console.log("getGraphPanel",this.state.error.errorLocation=="Graph");
    console.log("getGraphPanel plot graph",plotGraph);
    return(
        <Panel className="clickablePanel" bsStyle="primary">
          <label className="control-label"><span>Result</span></label>
          <br />
          {plotDataVal.data.length?plotGraph:<div className="well">No data available to be plotted.</div>}
        </Panel>

    );
  },
  //dispaly error
  getErrorDisplay: function(){
    console.log("print error message",this.state.error);
    return(
      <div>
      <br />
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>{this.state.error.errorMessage}</div>
      </div>
    );
  },
  render: function() {
    let modalClose = () => this.setState({ modalShow: false });
    var data1 = [ { value: 300, color:"#F7464A", highlight: "#FF5A5E", label: "Red" },
              { value: 50, color: "#46BFBD", highlight: "#5AD3D1", label: "Green" }, 
              { value: 100, color: "#FDB45C", highlight: "#FFC870", label: "Yellow" } ];

    //troubleshooting print
    console.log("evaluation error",this.state.error!="",this.state.error);
    console.log("evaluation topic ",this.state.selectedTopic!="",this.state.selectedTopic);
    console.log("evaluation plotdata",this.state.plotData!="",this.state.plotData);
    return (
      <div className="faq-page" key="faq"> 
        <div className="page-header">
          <h1>Cat Population Stats</h1>
        </div>
        <Well ><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> This page provides features for user 
        to view different statistic about cat. You can choose the question that interest you and specify the options to view 
        graph and chart. 
        </Well>

        <form onSubmit={this.handleTopicSubmit}>
          <Panel className="clickablePanel" bsStyle="primary">
            <label className="control-label"><span>Step 1. Select A Statistic Topic</span></label>
            <div className="input-group">
              <input list="topics" name="topics" className="form-control" placeholder="Select a topic"/>
              {this.populateTopics()}
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit">GO</button>
              </span>
            </div>
            <span>
              <Button bsStyle="link" onClick={()=>this.setState({ modalShow: true })}>
                Not interested in those topics. Suggest a topic!
              </Button>
            </span>
            {this.state.error.errorLocation=="Topic"?this.getErrorDisplay():""}
          </Panel>
          
        </form>
        <SuggestTopicModal show={this.state.modalShow} onHide={modalClose} />
        {this.state.selectedTopic!=""?this.getOptionForm():""}
        
        {this.state.plotData!=""?this.getGraphPanel(this.state.plotData):""}

      </div>
    );
  }

});

export default PublicStats;
