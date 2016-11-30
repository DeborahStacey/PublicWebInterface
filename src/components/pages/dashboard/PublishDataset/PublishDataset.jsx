import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well} from 'react-bootstrap';
import PublishDatasetModal from './PublishDatasetModal.jsx';

var OpenDataset = React.createClass({
  getInitialState() {
    return { 
      modalShow: false,
      resourceList:[]
    };
  },
  handleSubmitPublish: function(e){
    console.log("handleSubmitPublish");
    //error checking
    

  },
  //get resource from
  getResource:function(resourceData){
    console.log("getResource=======",resourceData);
    var newResourceList=[];
    if(this.state.resourceList.length==0){
      newResourceList.push(resourceData);
    }
    else{
      newResourceList = this.state.resourceList.slice();
      newResourceList.push(resourceData);
    }
    this.setState({
        resourceList: newResourceList
      });
    console.log("new state=======",this.state.resourceList);
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
              

              <Input type="text" name="license" label="License" placeholder="License" className="underline" />
              <Input type="text" name="keywords" label="Keywords" placeholder="Enter keywords to help search the dataset. Seperate by comma." className="underline" />
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
                <Col md={6} ><Button value="Submit" type="submit" bsStyle="success" >Create</Button></Col>
                <Col md={6} ><Button value="Cancel" bsStyle="default" >Cancel</Button></Col>
              </Row>
              
          </form>
          <PublishDatasetModal show={this.state.modalShow} onHide={modalClose} submitResource={this.getResource} />
        </Panel>
      </div>
    );
  }

});

export default OpenDataset;
