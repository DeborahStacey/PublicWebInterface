import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import $ from "jquery";
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
        plotData: "",
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
    console.log("ploting data ----",plotData);
    if(plotData==""||plotData==undefined){
      
        //no error
        //set state
        this.setState({
          plotData: plotData,
          selectedOptions: dataRequest.dataRequest.options,
          error:""
        });
      
    }
    else{
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
          selectedOptions: dataRequest.dataRequest.options,
          error:""
        });
      }
    }
    
    
 
  },
  //handle reset 
  handleReset: function(e){
    e.preventDefault();
    console.log("handleReset");

    var keys = Object.keys( this.state.optionsFields.optionList );
    for(var i=0;i<keys.length;i++){
      if(this.state.optionsFields.optionRestriction.defaultValue[keys[i]]){
        e.target[keys[i]].value=this.state.optionsFields.optionRestriction.defaultValue[keys[i]];
      }
      
    }
    //reset plot data
    this.setState({
        plotData: "",
        selectedOptions: "",
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

    return(
      Object.keys(fields).map(
        function(key,i){
          console.log("printvvv", key);
          return( <ListGroupItem key={i} name={key}>
                      <span>{restriction.requiredValue.indexOf(key)>=0?<span className="requiredField">*</span>:""}{key}: </span>
                        <select id={key} name={key}  >
                            {fields[key].map(
                              function(value,k){
                                return(<option value={value} key={k} selected={restriction.defaultValue[key]==value?true:false}>{value}</option>);
                              }
                            )}
                        </select>         
                  </ListGroupItem>);
        }
      )  
    );
    
  },
  setDefaultOptionValue: function(){

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
                {this.setDefaultOptionValue()}  
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
  //generate table for pie chart, donut chart
  createTablePieDonutChart: function(plotDataVal){
    return(
      <Table striped bordered condensed hover style={{margin:"auto",textAlign:"left"}} className="dataTable">
        <tbody>
          {plotDataVal.data.map(
            function(val,k){
              return(<tr key={k}><td>{val.label}</td><td>{val.value}</td></tr>);
            }
          )}
        </tbody>
      </Table>
    );
      
  },
  //generate table for line chart, bar chart
  createTableBarLineChart: function(plotDataVal){
    console.log("plotDataVal.labels",plotDataVal.labels);
    var headerInstance = (
      <thead>
        <tr key={0.1}>
          <th>#</th>
          {plotDataVal.data.labels.map(
            function(val,k){
              return(<th key={k}>{val}</th>);
            }
          )}
        </tr>
      </thead>
    );
    return(
      <Table striped bordered condensed hover style={{margin:"auto",textAlign:"left"}} className="dataTable">
        {headerInstance}
        <tbody>
          {plotDataVal.data.datasets.map(
            function(dataSetVal,k){
              return(
                <tr key={k}><td>{dataSetVal.label}</td>
                {
                  dataSetVal.data.map(
                    function(dataVal,j){
                      return(<td key={j}>{dataVal}</td>);
                    }
                  )
                }
                </tr>
              );
            }
          )}
          
        </tbody>
      </Table>
    );
      
  },
  handleDownloadTable:function(e){
    //extract data based on 
    var rows; //table row element
    var csvRows=[];
    //get the data table by the class name
    var tables = document.getElementsByClassName("dataTable");
    if(tables.length>0){
      rows = tables[0].rows;
      //add topic to array
      var topic = [];
      topic.push(this.state.selectedTopic);
      csvRows.push(topic.join(','));
      //check if rows have data
      if(rows.length>0){
        var last = rows[rows.length - 1];
        var cell = last.cells[0];
        var value = cell.innerHTML;
        for(var i=0;i<rows.length;i++){
          var rowArray=[];
          for(var j=0;j<rows[i].cells.length;j++){
            rowArray.push(rows[i].cells[j].innerHTML);
          }
          csvRows.push(rowArray.join(','));
        }
        //"options": {"region": "Canada","age": "1-2"}
        //append Criteria
        var criteria = [JSON.stringify(this.state.selectedOptions)];
        criteria[0]="Criteria: "+criteria[0].replace(",", " & ");
        console.log("whole state",criteria);
        csvRows.push(criteria.join(','));
      }
    }
    
    var csvString = csvRows.join("%0A");  //join rows by new line
    var link         = document.createElement('a');
    link.href        = 'data:attachment/csv,' + csvString;
    link.target      = '_blank';
    link.download    = 'table.csv';

    document.body.appendChild(link);
    link.click();
    console.log("TableData   ////",csvString);
    
  },
  handleDownloadChart:function(e){
    console.log("handleDownloadChart");
    
    // save image without file type
    var canvas = document.getElementById("graphCanvas");
    document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // save image as png
    var link = document.createElement('a');
    link.download = "chart.png";
    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
    link.click();
  },
  //create tool bar for graph panel
  getGraphPanelToolBar:function(){
    
    return(
      <div style={{margin:"auto",textAlign:"right"}}><button type="button" onClick={this.handleDownloadChart} >Download Chart</button></div>
    );
 
  },
  //create tool bar for table 
  getTableToolBar:function(){
    
    return(
      <div style={{margin:"auto",textAlign:"right"}}><button type="button" onClick={this.handleDownloadTable} >Download CSV</button></div>
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
                     animateScale : false,
                     title: {
                        display: true,
                        text: plotDataVal.title
                    }
                  };
    
    var plotGraph;
    console.log("plotDataVal.data   ",plotDataVal.data);
    if(plotDataVal.chartType=="PieChart"){
      plotGraph=(
        <div>
          {this.getGraphPanelToolBar()}
          <div style={{margin:"auto",textAlign:"center"}}>
                <h3>{plotDataVal.title}</h3><br/>
                <PieChart id="graphCanvas"  data={plotDataVal.data} options={options1}  width="600" height="400"/><br/><br/>
                {this.getTableToolBar()}<br/>
                {this.createTablePieDonutChart(plotDataVal)}
                 
          </div>
        </div>);
      console.log("getGraphPanel chart type",plotDataVal.chartType);
    }
    else if(plotDataVal.chartType=="BarChart"){
      plotGraph=(
        <div>
          {this.getGraphPanelToolBar()}
          <div style={{margin:"auto",textAlign:"center"}}>
                <h3>{plotDataVal.title}</h3><br/>
                <BarChart id="graphCanvas" data={plotDataVal.data} options={options1}  width="700" height="400"/><br/><br/>
                {this.getTableToolBar()}<br/>
                {this.createTableBarLineChart(plotDataVal)}
          </div>
        </div>);
      console.log("getGraphPanel chart type",plotDataVal.chartType);
    }
    else if(plotDataVal.chartType=="DoughnutChart"){
      plotGraph=(
        <div>
          {this.getGraphPanelToolBar()}
          <div style={{margin:"auto",textAlign:"center"}}>
                <h3>{plotDataVal.title}</h3><br/>
                <DoughnutChart id="graphCanvas" data={plotDataVal.data} options={options1}  width="600" height="400"/><br/><br/>
                {this.getTableToolBar()}<br/>
                {this.createTablePieDonutChart(plotDataVal)}
          </div>
        </div>);
      console.log("getGraphPanel chart type",plotDataVal.chartType);
    }
    else if(plotDataVal.chartType=="LineChart"){
      plotGraph=(
        <div>
          {this.getGraphPanelToolBar()}
          <div style={{margin:"auto",textAlign:"center"}}>
                <h3>{plotDataVal.title}</h3><br/>
                <LineChart id="graphCanvas" data={plotDataVal.data} options={options1}  width="700" height="400"/><br/><br/>
                {this.getTableToolBar()}<br/>
                {this.createTableBarLineChart(plotDataVal)}
          </div>
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
          {plotDataVal.data?plotGraph:<div className="well">No data available to be plotted.</div>}
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
          <h1>Cat Population Statistic</h1>
        </div>
        <Well ><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> This page provides features for user 
        to view different statistic about cat. You can choose a topic that interests you and specify the options to view 
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
        
        {this.state.plotData!=""&&this.state.plotData!=undefined?this.getGraphPanel(this.state.plotData):""}
        {this.state.plotData==""||this.state.plotData==undefined?<div className="well">No data available to be plotted.</div>:""}
      </div>
    );
  }

});

export default PublicStats;
