import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination,ListGroup,ListGroupItem,ButtonGroup
,DropdownButton,MenuItem} from 'react-bootstrap';

var searchVetsPage = React.createClass({

  getInitialState: function(){
    return {
      keywords: ''
    };
  },

  render: function() {
    return (
      <div className="searchvets-page" key="searchvets"> 
        <Link to="/dashboard/faq" className="pull-right btn btn-primary btn-outline btn-rounded">FAQ</Link>
        <h2>Home</h2> 
        <Jumbotron> 
          <h1>WellCat Vet Data Search!</h1> 
          <br />
          <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Welcome to the search veterinary agencies page. 
            Fill out keywords and click the search button to find the vet information you are looking for quickly.</Well>
      
          <Panel bsStyle="primary" header={<span>Search Veterinary Agencies</span>}>
            <form>
              <div className="form-group"> 
                <input type="text" label="Search Keywords" placeholder="Keywords" onChange={this.setKeywords} /> {'        \n            '} {'                    '} 
                <button type="submit" className="btn btn-primary btn-outline btn-md btn-rounded" onClick={this.handleSearch}>Search</button> 
              </div> 
            </form>
          </Panel>
          <br /><br /> 
        </Jumbotron> 
      </div>
    );
  },

  setKeywords: function(e) {

    this.setState({
      keywords: e.target.value,
      searchError: ''
    });

  },

  handleSearch: function(e) {
    
    // if success display info in new panel
    // if fail display well with error message

    //e.preventDefault();
    //this.props.history.pushState(null, '/dashboard/Searchstatistics');
      
      // this.transitionTo('dashboard');

    return false;
  }


});

export default searchVetsPage;