import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination,Label,ListGroup,ListGroupItem} from 'react-bootstrap';

var DatasetDetail = React.createClass({
  
  //generate list group to display subject, license, keyword, recordid, date
  generateDatasetInfoDisplay:function(){
    return(
      <ListGroup className="WellCatinfoList">
        <ListGroupItem><label>Subject</label> <Label>{this.props.dataset.subject}</Label></ListGroupItem>
        <ListGroupItem><label>Publisher</label> <Label>{this.props.dataset.publisher}</Label></ListGroupItem>
        <ListGroupItem><label>License</label> <Label>{this.props.dataset.license}</Label></ListGroupItem>
        <ListGroupItem><label>Keywords</label> 
          {this.props.dataset.keywords.split(',').map(
            function(value,key){
              return(<Label key={key}>{value}</Label>);
            }
          )}
        </ListGroupItem>
        <ListGroupItem><label>Record ID</label> <Label>{this.props.dataset.recordID}</Label></ListGroupItem>
        <ListGroupItem><label>Publish Date</label> <Label>{this.props.dataset.publishDate}</Label></ListGroupItem>
        <ListGroupItem><label>Modified Date</label> <Label>{this.props.dataset.modifiedDate}</Label></ListGroupItem>
      </ListGroup>
    );
  },
  //generate table to dispay resource list
  generateDatasetResourceDisplay:function(){
    var fileHostURL=this.props.dataset.fileFolderURL;  //get url to download folder
    var resourceTableBody;
    //populate the table body according to resourcelist
    if(this.props.dataset.resourceList.length>0){
      resourceTableBody=(
        <tbody>
          {this.props.dataset.resourceList.map(
            function(obj,k){
              return(
                <tr key={k}>
                  <td>{obj.resourceName}</td>
                  <td><span className="badge">{obj.format}</span></td>
                  <td>{obj.language}</td>
                  <td><Button  href={fileHostURL+obj.filePath} bsStyle="success" target="_blank" >Download</Button></td>
                </tr>
              );
            }
          )}
            
        </tbody>
      );
    }
    else{
      resourceTableBody=(
        <tbody>
            <tr>
                <td>No data resource available.</td>
            </tr>
        </tbody>
      );
    }
    
    return(
      <Panel className="clickablePanel" bsStyle="primary">            
        <label htmlFor="Resources">Resources</label>
              <Table bordered>
                  <thead>
                      <tr>
                          <th>Resource Name</th>
                          <th>Format</th>
                          <th>Language</th>
                          <th>Download</th>
                      </tr>
                  </thead>
                  {resourceTableBody}
              </Table>
      </Panel>
    );
    
  },
  render: function() {
    //console.log("get dataset props",this.props.dataset);
    if(this.props.dataset==""){
      return(
        <div className="faq-page" key="faq"> 
          <div className="page-header">
            <h1>Dataset not found.</h1>
          </div>         
        </div>
      );
    }
    else{
      return (
        <div className="faq-page" key="faq"> 
          <div className="page-header">
            <h1>{this.props.dataset.title}</h1>
          </div>
          <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> {this.props.dataset.description}</Well>
          {this.generateDatasetInfoDisplay()}
          {this.generateDatasetResourceDisplay()}
          
        </div>
      );
    }
    
  }

});

export default DatasetDetail;
