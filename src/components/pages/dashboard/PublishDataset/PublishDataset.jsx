import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well} from 'react-bootstrap';
import { History } from 'history';
import PublishDatasetModal from './PublishDatasetModal.jsx';
import $ from "jquery";
var OpenDataset = React.createClass({
  getInitialState() {
    return { 
      modalShow: false,
      resourceList:[],
      resourceEditID:-1,
      error:""
    };
  },
  mixins: [History],
  handleSubmitPublish: function(e){
    e.preventDefault();
    console.log("handleSubmitPublish");
    //error checking
    var errors=[];
    var errorlog="";
    if(e.target.title.value==""){
      errors.push("Title");
    }
    if(e.target.publisher.value==""){
      errors.push("Publisher");
    }
    if(e.target.subject.value==""){
      errors.push("Subject");
    }
    if(e.target.description.value==""){
      errors.push("Description");
    }

    if(errors.length>0){
      console.log("errors");
      for(var i=0;i<errors.length;i++){
        var comma=", ";
        if(i==0){
          comma="";
          errorlog+=comma+errors[i];
        }

      }
      var error = {
        "errorType":"Publish Dataset",
        "errorLocation":"Publish Dataset",
        "errotCode":"008",
        "errorMessage":"The following field(s) are required: "+errorlog
      }
      this.setState({
          error: error
        });
    }
    else{
      //post form data and files to server
      //build post object 
      var dataPost={
        title:e.target.title.value,
        publisher:e.target.publisher.value,
        subject:e.target.subject.value,
        description:e.target.description.value,
        license:e.target.license.value,
        keywords:e.target.keywords.value,
        resourceList:this.state.resourceList
      }
      console.log(">>>>>>>>datapost to publish",dataPost);
   
      var data = new FormData();
      $.each(dataPost, function(key, value)
      {
          data.append(key, value);
      });
      //build nested object into flat key value
      //for reference http://stackoverflow.com/questions/28774746/sending-nested-formdata-on-ajax
      data.append("resourceLength", this.state.resourceList.length);  //add resource list length
      for(var key in dataPost){
        if(key!="resourceList"){
          data.append(key, dataPost[key]);
          console.log("data.append(key, dataPost[key]);",key,dataPost[key]);
        }
        else if(key=="resourceList"){
          var i=0;
          for(i=0;i<dataPost[key].length;i++){
            data.append("resource"+i+"Name", dataPost[key][i]["resourceName"]);
            data.append("resource"+i+"Format", dataPost[key][i]["format"]);
            data.append("resource"+i+"Language", dataPost[key][i]["language"]);
            data.append("resource"+i+"File", dataPost[key][i]["file"]);
            data.append("resource"+i+"FileName", dataPost[key][i]["fileName"]);
            console.log('"resource"+i+"Name", dataPost[key]["resourceName"]',dataPost[key][i]["resourceName"]);
          }
        }
      }
      console.log("This is data before send",data);
      $.ajax({
          url: 'http://localhost:8888/wellcat/publishdataset.php',
          type: 'POST',
          data: data,
          cache: false,
          processData: false, // Don't process the files
          contentType: false, // Set content type to false as jQuery will tell the server its a query string request
          success: function(dataResponse, textStatus, jqXHR)
          {
              if(typeof dataResponse.error === 'undefined')
              {
                  // Success so call function to process the form
                  //submitForm(event, data);
                  var jsonData = JSON.parse(dataResponse);
                  console.log("Success so call function to process the form---",dataResponse.recordID,dataResponse[0],dataResponse[1],";;;",JSON.parse(dataResponse));
                  
                  //inform user and redirect
                  alert("Success published a dataset! You will be redirect to the dataset.");
                  this.props.history.pushState(null, '/dashboard/OpenDataSet?RecordID='+jsonData.recordID);
              }
              else
              {
                  // Handle errors here
                  console.log('ERRORS: ' + dataResponse.error);
              }
          }.bind(this),
          error: function(jqXHR, textStatus, errorThrown)
          {
              // Handle errors here
              console.log('ERRORS: ' + textStatus);
              //do nothing
          }
      });

      // var data = new FormData();
      // $.each(dataPost, function(key, value)
      // {
      //     data.append(key, value);
      // });
      // $.ajax({
      //     url: 'http://localhost:8888/wellcat/publishdataset.php',
      //     type: 'POST',
      //     data: data,
      //     cache: false,
      //     dataType: 'json',
      //     processData: false, // Don't process the files
      //     contentType: false, // Set content type to false as jQuery will tell the server its a query string request
      //     success: function(data, textStatus, jqXHR)
      //     {
      //         if(typeof data.error === 'undefined')
      //         {
      //             // Success so call function to process the form
      //             //submitForm(event, data);
      //             console.log("Success so call function to process the form");
      //         }
      //         else
      //         {
      //             // Handle errors here
      //             console.log('ERRORS: ' + data.error);
      //         }
      //     },
      //     error: function(jqXHR, textStatus, errorThrown)
      //     {
      //         // Handle errors here
      //         console.log('ERRORS: ' + textStatus);
      //         // STOP LOADING SPINNER
      //     }
      // });
    }

  },
  //get resource from
  getResource:function(resourceData,id){
    
    var newResourceList=[];
    if(this.state.resourceList.length==0){
      newResourceList.push(resourceData);
    }
    else{
      console.log("getResource=======",resourceData,id);
      newResourceList = this.state.resourceList.slice();  //copy of state
      if(id>=0){
        newResourceList[id]=resourceData; //copy edited resource  
      }
      else{  //brand new resource
        //add new resource
        newResourceList.push(resourceData);
      }
      
    }
    this.setState({
        resourceList: newResourceList,
        resourceEditID:-1
      });
    console.log("new state=======",this.state.resourceList);

  },
  clearEditID: function(){
    console.log("set resourceEditID to -1");
    this.setState({
        resourceEditID:-1,
       
      });
    console.log("set resourceEditID to -1");
  },
  changeEditID:function(e){
    console.log("///////",e.target.value);
    this.setState({ 
      modalShow: true,
      resourceEditID:e.target.value
      
    });
  },
  deleteResource:function(e){
    var newResourceList=[];
    newResourceList = this.state.resourceList.slice();  //copy of state
    newResourceList.splice(e.target.value,1);
    this.setState({
        resourceList: newResourceList,
        resourceEditID:-1
      });
  },
  generateResourceListTable: function(){
    var resourceTableInstance="";
    
    var  resourceTableInstance=(
        <div>
          <label htmlFor="Resources">Resources</label>
          <Table  striped bordered condensed hover>
            <thead>
                <tr>
                    <th>Resource Name</th>
                    <th>Format</th>
                    <th>Language</th>
                    <th>File</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                  this.state.resourceList.map(
                    function(resource,k){
                      return(
                        <tr key={k}>
                          <td>{resource.resourceName}</td>
                          <td><span className="badge">{resource.format}</span></td>
                          <td>{resource.language}</td>
                          <td>{resource.fileName}</td>
                          <td><Button value={k} bsStyle="primary" onClick={this.changeEditID} >Edit</Button></td>
                          <td><Button value={k} bsStyle="danger" onClick={this.deleteResource} >Delete</Button></td>
                        </tr>
                      );
                    }
                  ,this)
                }

                <tr style={{textAlign:"center"}}>
                    <td colSpan="6" style={{textAlign:"center"}}>
                      <Button value="add" bsStyle="warning" onClick={()=>this.setState({ modalShow: true,resourceEditID:-1 })} >Add New Resource</Button>
                      
                      </td>
                </tr>
                
            </tbody>
          </Table>
        </div>
      );
    
    return resourceTableInstance;
  },
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
    console.log("this.state.resourceEditID",this.state.resourceEditID);
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="faq-page" key="faq"> 
      <div className="page-header">
        <h1>Publish Dataset</h1>
      </div>
      <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Welcome to Publish Dataset page. 
      This functionality is for Wellcat admin only. Fill out each fields, add data resources below, and press submit to publish dataset.</Well>
      
        <Panel bsStyle="primary" header={<span>Publish New Dataset</span>}>
          <form onSubmit={this.handleSubmitPublish}>
              <div className="form-group">
                <label>Title</label><span className="requiredField">*</span>
                <input type="text" name="title" className="form-control" placeholder="Title" required/>
              </div>
              <div className="form-group">
                <label>Publisher</label><span className="requiredField">*</span>
                <input type="text" name="publisher" className="form-control" placeholder="Publisher" required/>
              </div>
              <div className="form-group">
                <label>Subject</label><span className="requiredField">*</span>
                <input type="text" name="subject" className="form-control" placeholder="Subject" required/>
              </div>
              <div className="form-group">
                <label>Description</label><span className="requiredField">*</span>
                <textarea className="form-control" name="description" rows="5" id="description" placeholder="Description" required></textarea>
              </div>
              
              <div className="form-group">
                <label>License</label><span className="requiredField">*</span>
                <input type="text" name="license" className="form-control" placeholder="License" required/>
              </div>
              
              <div className="form-group">
                <label>Keywords</label>
                <input type="text" name="keywords" className="form-control" placeholder="Enter keywords to help search the dataset. Seperate by comma." />
              </div>

              
              {this.generateResourceListTable()}
              {this.state.error.errorLocation=="Publish Dataset"?this.getErrorDisplay():""}
              
              <Row style={{textAlign:"center"}}>
                <Col md={6} ><Button value="Submit" type="submit" bsStyle="success" >Create</Button></Col>
                <Col md={6} ><Button href="#dashboard/OpenDataset" value="Cancel" bsStyle="default" >Cancel</Button></Col>
              </Row>
              
          </form>

          <PublishDatasetModal show={this.state.modalShow} 
                              onHide={modalClose} 
                              submitResource={this.getResource} 
                              resource={this.state.resourceEditID>=0?this.state.resourceList[this.state.resourceEditID]:""} 
                              clearEditID={this.clearEditID} 
                              editID={this.state.resourceEditID}/>
        </Panel>
      </div>
    );
  }

});

export default OpenDataset;
