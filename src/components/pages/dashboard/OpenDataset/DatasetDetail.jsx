import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination,Label,ListGroup,ListGroupItem} from 'react-bootstrap';

var DatasetDetail = React.createClass({
  
  render: function() {
    return (
      <div className="faq-page" key="faq"> 
      <div className="page-header">
        <h1>Cat Breeds Stats 2016</h1>
      </div>
      <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Lorem Ipsum is simply dummy 
      text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Well>
      
      <ListGroup className="WellCatinfoList">
        <ListGroupItem><label>Subject</label> <Label>Cat Breeds</Label></ListGroupItem>
        <ListGroupItem><label>License</label> <Label>Open Data WellCat</Label></ListGroupItem>
        <ListGroupItem><label>Keywords</label> <Label>Cat Breeds</Label> <Label>Cat Age</Label></ListGroupItem>
        <ListGroupItem><label>Record ID</label> <Label>000001</Label></ListGroupItem>
        <ListGroupItem><label>Publish Date</label> <Label>2016-09-24</Label></ListGroupItem>
        <ListGroupItem><label>Modified Date</label> <Label>2016-09-24</Label></ListGroupItem>
      </ListGroup>

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
                  <tbody>
                      <tr>
                          <td>Authorities and Expenditures by vote and statutory authorities (2010-11 to 2014-15)</td>
                          <td><span className="badge">XLS</span></td>
                          <td>English</td>
                          <td><Button value="Download" bsStyle="success" >Download</Button></td>
                          
                      </tr>
                      <tr>
                          <td>Authorities and Expenditures by vote and statutory authorities (2010-11 to 2014-15)</td>
                          <td><span className="badge">XLS</span></td>
                          <td>English</td>
                          <td><Button value="Download" bsStyle="success" >Download</Button></td>
                          
                      </tr>
                      <tr>
                          <td>Authorities and Expenditures by vote and statutory authorities (2010-11 to 2014-15)</td>
                          <td><span className="badge">XLS</span></td>
                          <td>English</td>
                          <td><Button value="Download" bsStyle="success" >Download</Button></td>
                          
                      </tr>
                  </tbody>
              </Table>
      </Panel>

      </div>
    );
  }

});

export default DatasetDetail;
