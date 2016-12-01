import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,Modal} from 'react-bootstrap';

var PublishDatasetModal = React.createClass({
  //state: searchTopic, plotData
  getInitialState: function(){
    return{
      status:"",
      error:""
    }
  },
  handleAdResource: function(e){
    e.preventDefault();
    console.log("........Modal handleAdResource");
    //error checking 
    console.log("........Modal");
    var errors=[];
    var errorlog="";
    if(e.target.resourceName.value==""){
      errors.push("Resource Name");
    }
    if(e.target.format.value==""){
      errors.push("File Format");
    }
    if(e.target.language.value==""){
      errors.push("Language");
    }
    if(e.target.uploadFile.value==""){
      errors.push("Upload File");
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
        "errorType":"Add Resource",
        "errorLocation":"Add Resource",
        "errotCode":"008",
        "errorMessage":"The following field(s) are required: "+errorlog
      }
      this.setState({
          error: error
        });
    }
    else{
      console.log("........no error");
      var tempFile = document.getElementById("uploadFile");
      alert("You selected " + tempFile.value);
      var filename = tempFile.value.replace(/^.*[\\\/]/, '')
      console.log("ssss",filename);
      var dataPost={
        resourceName:e.target.resourceName.value,
        format:e.target.format.value,
        language:e.target.language.value,
        uploadFile:e.target.uploadFile.value,
        fileName: filename
      }
      {this.props.submitResource(dataPost)};
      this.setState({
        status:"sent",
        error: ""
      });
      console.log("handleAdResource, dataPost",dataPost,JSON.stringify(dataPost));

      
    }
  },
  handleClose: function(){
    this.props.clearEditID();
    console.log("this.props.clearEditID();");
    this.setState({
        status:"",
        error:""
      });

    this.props.onHide();
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
  createBody: function(){
    //console.log("createBody//////",this.state.status);
    if(this.state.status=="sent"){
      return(
        <div>
            <Modal.Body>
              <p>Resource is added to resource list.</p>
            </Modal.Body>
            <Modal.Footer>
              
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
           
        </div>
      );
    }
    else{
      return(
        <div>
          <form onSubmit={this.handleAdResource}>
                <Modal.Body>
                  <div className="form-group">
                    <label>Resource Name</label><span className="requiredField">*</span>
                    <input type="text" 
                           name="resourceName" 
                           className="form-control" 
                           placeholder="Resource Name" 
                           defaultValue={this.props.resource?this.props.resource.resourceName:""}
                           required />
                  </div>
                  <div className="form-group">
                    <label>Format</label><span className="requiredField">*</span>
                    <input type="text" 
                            name="format" 
                            className="form-control" 
                            placeholder="Format"
                            defaultValue={this.props.resource?this.props.resource.format:""} 
                            required/>
                  </div>
                  <div className="form-group">
                    <label>Language</label><span className="requiredField">*</span>
                    <input type="text" 
                            name="language" 
                            className="form-control" 
                            placeholder="Language"
                            defaultValue={this.props.resource?this.props.resource.language:""}
                            required/>
                  </div>
                  <div className="form-group">
                    <label>Upload File (accept .xls, .xlsx, .json, .pdf, .csv)</label><span className="requiredField">*</span><br/>
                    {this.props.resource?"Uploaded file: "+this.props.resource.fileName+" (Click upload again to replace old file)":""}
                    <br/>
                    <input type="file" 
                            accept=".xls,.xlsx,.json,.pdf,.csv" 
                            id="uploadFile"
                            name="uploadFile" 
                            className="form-control" 
                            placeholder="Upload File" 
                            required/>
                  </div>
                  {this.state.error.errorLocation=="Add Resource"?this.getErrorDisplay():""}
              </Modal.Body>
              <Modal.Footer>
                <Button value="Add" type="submit" bsStyle="primary" >Add</Button>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </form>
        </div>
      );
    }
  },
  render() {
    console.log("resource is pass:",this.props.resource);
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-sm">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Add New Resource</Modal.Title>
          </Modal.Header>
          {this.createBody()}
        </Modal>
      </div>
    );
  }
});

export default PublishDatasetModal;