import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,Modal} from 'react-bootstrap';

var PublishDatasetModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Add New Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Input type="text" label="Resource Name" placeholder="Resource Name" className="underline" />
          <Input type="text" label="Format" placeholder="Format" className="underline" />
          <Input type="text" label="Language" placeholder="Language" className="underline" />
          <Input value="Download" type="file" bsStyle="success" ></Input>
        </Modal.Body>
        <Modal.Footer>
          <Button value="Submit" bsStyle="primary" >Submit</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default PublishDatasetModal;