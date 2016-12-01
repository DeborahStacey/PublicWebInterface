import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination} from 'react-bootstrap';

var DatasetList = React.createClass({
  
  render: function() {
    return (
      <div className="faq-page" key="faq"> 
      <div className="page-header">
        <h1>WellCat Open Dataset</h1>
      </div>
      <Well><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> This is a WellCat open data portal. 
      We share these datasets with public for general interested, or research. It is intended to provide information to help 
      improve health and wellness of cat which aligns with our company mission. All the sensitive information is muted in those datasets. 
      We follow the strict privacy and data collection policy.</Well>
      
      <label className="control-label"><span>Search Dataset</span></label>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search for..." />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button"><span className="glyphicon glyphicon-search" aria-hidden="true"/></button>
        </span>
      </div>
      <br />


      <Panel className="clickablePanel" bsStyle="primary">
        <label className="control-label"><span>Dataset List</span></label>
          <Link to="dashboard/OpenDataSet?RecordID=1" target="_blank" >
            <Panel bsStyle="default" header={<span>Cat Breed: 2016 Update</span>}>
                Canada’s Energy Future 2016: Update - Energy Supply and Demand Projections 
                to 2040 contains a projection of future energy supply and demand trends in Canada 
                and historical data to 2005. Given the numerous uncertainties and factors that may 
                affect forward trends, the data includes three possible...
                
                <br /><br />Publisher: WellCat
                <br />Format: <span className="badge">XLS</span>
            </Panel>
          </Link>
          <Link to="dashboard/OpenDataSet?RecordID=1" target="_blank" >
            <Panel bsStyle="default" header={<span>Canada’s Cat Stats: 2016 Update</span>}>
                Canada’s Energy Future 2016: Update - Energy Supply and Demand Projections 
                to 2040 contains a projection of future energy supply and demand trends in Canada 
                and historical data to 2005. Given the numerous uncertainties and factors that may 
                affect forward trends, the data includes three possible...

                <br /><br />Publisher: WellCat
                <br />Format: <span className="badge">XLS</span>
            </Panel>
          </Link>
          <Link to="dashboard/OpenDataSet?RecordID=1" target="_blank" >
            <Panel bsStyle="default" header={<span>Cat Food Stats: 2016 Update</span>}>
                Canada’s Energy Future 2016: Update - Energy Supply and Demand Projections 
                to 2040 contains a projection of future energy supply and demand trends in Canada 
                and historical data to 2005. Given the numerous uncertainties and factors that may 
                affect forward trends, the data includes three possible...

                <br /><br />Publisher: WellCat
                <br />Format: <span className="badge">CSV</span>
            </Panel>
          </Link>
        

          <Pagination 
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={20}
          maxButtons={5}
          activePage={3}
          onSelect={this.handleSelect} />

        </Panel>

      </div>
    );
  }

});

export default DatasetList;
