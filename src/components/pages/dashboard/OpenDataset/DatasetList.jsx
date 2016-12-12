import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { History } from 'history';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination} from 'react-bootstrap';

var DatasetList = React.createClass({

  //handle click on pagnation button event
  handleSelect:function(e){
    //console.log("pagination button this.props.query",this.props.query,"clicked page",e);
    this.props.updateSearchState(this.props.query,e);
  },
  //display list of datasets
  generateDisplayPanel: function(){
    var panelContent="";
    if(this.props.datasetList!=""){
      panelContent=(
        <Panel className="clickablePanel" bsStyle="primary">
          <label className="control-label"><span>Dataset List</span></label>
          {this.props.datasetList.datasetList.map(
            function(obj,k){
              return(
                <Link key={k} to={"dashboard/OpenDataSet?RecordID="+obj.recordID} target="_blank" >
                  <Panel bsStyle="default" header={<span>{obj.title}</span>}>
                      {obj.description.length>650?obj.description.substring(0,650)+"...":obj.description}
                      <br /><br />Publisher: {obj.publisher} 
                      <br />Format: {obj.keywords.split(',').map(
                                      function(value,key){
                                        return(<span key={key} className="badge">{value}</span>);
                                      }
                                    )}
                      <br />Published Date: {obj.publishDate}
                  </Panel>
                </Link>
              );
              
            }
          )}
          <Pagination 
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={this.props.datasetList.maxPage}
            maxButtons={6}
            activePage={this.props.datasetList.currentPage}
            onSelect={this.handleSelect} />
        </Panel>
      );

    }
    else{
      panelContent=(
        <Panel className="clickablePanel" bsStyle="primary">
          <div>No dataset available.</div>
        </Panel>
      );
    }
    return(
      <div>
        {panelContent}
      </div>
    );
  },
  mixins: [History],
  //handle search form submit
  handleSearch: function(e){
    e.preventDefault();
    console.log("handle search");
    //redirect with search parameter
    this.props.updateSearchState(e.target.search.value,1);
    //this.props.redirectHistory.pushState(null, '/dashboard/OpenDataSet?q='+e.target.search.value);
  },
  render: function() {
    //console.log("DatasetList ",this.props.datasetList);
    return (
      <div className="faq-page" key="faq"> 
      <div className="page-header">
        <h1>WellCat Open Dataset</h1>
      </div>
      <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> This is a WellCat open data portal. 
      We share these datasets with public for general interested, or research. It is intended to provide information to help 
      improve health and wellness of cat which aligns with our company mission. All the sensitive information is muted in those datasets. 
      We follow the strict privacy and data collection policy.</Well>
      <form onSubmit={this.handleSearch}>
        <label className="control-label"><span>Search Dataset</span></label>
        <div className="input-group">
          
            <input type="text" name="search" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit" ><span className="glyphicon glyphicon-search" aria-hidden="true"/></button>
            </span>
        </div>
      </form>
      <br />

      {this.generateDisplayPanel()}
      

      </div>
    );
  }

});

export default DatasetList;
