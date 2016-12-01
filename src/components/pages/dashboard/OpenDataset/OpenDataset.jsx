import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination} from 'react-bootstrap';
import DatasetList from './DatasetList.jsx';
import DatasetDetail from './DatasetDetail.jsx';
var OpenDataset = React.createClass({
  
  render: function() {
    console.log(this.props.location.query.q);
    if(this.props.location.query.RecordID){
      return(<DatasetDetail />);
    }
    return (
      <DatasetList />
    );
  }

});

export default OpenDataset;
