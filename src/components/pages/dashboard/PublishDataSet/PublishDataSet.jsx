import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table} from 'react-bootstrap';

var PublishDataSet = React.createClass({
  render: function() {
    return (
      <div className="faq-page" key="faq"> 
        <Panel bsStyle="primary" header={<span>Publish New Dataset</span>}>
          <form>
              <Input type="text" label="Data Set Title" placeholder="Title" className="underline" />
              <Input type="text" label="Publisher" placeholder="Publisher" className="underline" />
              <div className="form-group">
                <label htmlFor="comment">Description</label>
                <textarea className="form-control" rows="5" id="description" placeholder="Description" required></textarea>
              </div>

              <Input type="text" label="License" placeholder="License" className="underline" />
              <label htmlFor="Resources">Resources</label>
              <Table bordered>
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
                      <tr>
                          <td>Authorities and Expenditures by vote and statutory authorities (2010-11 to 2014-15)</td>
                          <td>XLS</td>
                          <td>English</td>
                          <td><Button value="Download" bsStyle="success" >Upload</Button></td>
                          <td><Button value="Edit" bsStyle="primary" >Edit</Button></td>
                          <td><Button value="Delete" bsStyle="danger" >Delete</Button></td>
                      </tr>
                      <tr style={{textAlign:"center"}}>
                          <td colSpan="6" style={{textAlign:"center"}}>
                            <Button value="add" bsStyle="warning" >Add New Resource</Button>
                            
                            </td>
                      </tr>
                      
                  </tbody>
              </Table>
              <Row style={{textAlign:"center"}}>
                <Col md={6} ><Button value="Submit" bsStyle="success" >Submit</Button></Col>
                <Col md={6} ><Button value="Cancel" bsStyle="default" >Cancel</Button></Col>
              </Row>
              
          </form>
        </Panel>
      </div>
    );
  }

});

export default PublishDataSet;
