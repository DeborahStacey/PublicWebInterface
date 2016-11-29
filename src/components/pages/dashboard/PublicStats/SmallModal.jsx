import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,Modal,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';

var SmallModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">this.props.ModalHeading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>this.props.ModalTitle</h4>
          <p>this.props.ModalBody</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export default SmallModal;