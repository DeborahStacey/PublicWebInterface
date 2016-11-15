import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well} from 'react-bootstrap';

var OpenDataset = React.createClass({
  render: function() {
    return (
      <div className="faq-page" key="faq"> 
      <div className="page-header">
        <h1>WellCat Open Dataset</h1>
      </div>
      <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> This is a WellCat open data portal. 
      We share these open datasets with public for general interested, or research. It is inteneded to provide information to help 
      improve health and wellness of cat which aligns with our company mission. All the sensitive infromation is muted in those datasets.</Well>
        <Panel bsStyle="primary" header={<span>Publish New Dataset</span>}>
          <form>
              <Input type="text" label="Data Set Title" placeholder="Title" className="underline" />
              <Input type="text" label="Publisher" placeholder="Publisher" className="underline" />
              <div className="form-group">
                <label htmlFor="comment">Description</label>
                <textarea className="form-control" rows="5" id="description" placeholder="Description" required></textarea>
              </div>

              <Input type="text" label="License" placeholder="License" className="underline" />
              <Input type="text" label="Keywords" placeholder="Enter keywords to help search the dataset. Seperate by coma." className="underline" />
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

export default OpenDataset;
