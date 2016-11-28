import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well} from 'react-bootstrap';
import PublishDatasetModal from './PublishDatasetModal.jsx';

var OpenDataset = React.createClass({
  getInitialState() {
    return { modalShow: false };
  },
  render: function() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="faq-page" key="faq"> 
      <div className="page-header">
        <h1>Publish Dataset</h1>
      </div>
      <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Welcome to publish Dataset page. 
      Fill out each fields, add data resources below, and press submit to save.</Well>
      
        <Panel bsStyle="primary" header={<span>Publish New Dataset</span>}>
          <form>
              <Input type="text" label="Dataset Title" placeholder="Title" className="underline" />
              <Input type="text" label="Publisher" placeholder="Publisher" className="underline" />
              <Input type="text" label="Subject" placeholder="Subject" className="underline" />
              <div className="form-group">
                <label htmlFor="comment">Description</label>
                <textarea className="form-control" rows="5" id="description" placeholder="Description" required></textarea>
              </div>

              <Input type="text" label="License" placeholder="License" className="underline" />
              <Input type="text" label="Keywords" placeholder="Enter keywords to help search the dataset. Seperate by comma." className="underline" />
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
                          <td><span className="badge">XLS</span></td>
                          <td>English</td>
                          <td>catbreed.xls</td>
                          <td><Button value="Edit" bsStyle="primary" onClick={()=>this.setState({ modalShow: true })} >Edit</Button></td>
                          <td><Button value="Delete" bsStyle="danger" >Delete</Button></td>
                      </tr>
                      <tr style={{textAlign:"center"}}>
                          <td colSpan="6" style={{textAlign:"center"}}>
                            <Button value="add" bsStyle="warning" onClick={()=>this.setState({ modalShow: true })} >Add New Resource</Button>
                            
                            </td>
                      </tr>
                      
                  </tbody>
              </Table>
              <Row style={{textAlign:"center"}}>
                <Col md={6} ><Button value="Submit" bsStyle="success" >Submit</Button></Col>
                <Col md={6} ><Button value="Cancel" bsStyle="default" >Cancel</Button></Col>
              </Row>
              <PublishDatasetModal show={this.state.modalShow} onHide={modalClose} />
          </form>
        </Panel>
      </div>
    );
  }

});

export default OpenDataset;
