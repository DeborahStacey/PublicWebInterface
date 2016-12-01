import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Button, Modal, FormGroup, FormControl} from 'react-bootstrap';
import $ from 'jquery';
import { History } from 'history';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');
var CatProfiles = React.createClass({
  getInitialState: function(){
    
    return {
      personal: [],
      shared: [],
      breeds: [],
      name: '',
      weight: '',
      height: '',
      length: '',
      breedNames: [],
      selectValueBreed: '-- Select Breed --',
      selectedOptionDeclawed: '0',
      selectedOptionOutdoor: '0',
      selectedOptionFixed: '0',
      selectedOptionGender: '1',
      startDate: moment(),
      showModal: false
    };

  },
  
  mixins: [History],


  componentWillMount: function() {
    var that = this;
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/pet/pets',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          console.log("Got Cats");
          that.setPersonal(response.personal);
          that.setShared(response.shared);
        }
        else{
          console.log("Cant Get Cats");
        };
      },
      error: function(response) {
        console.log(response);
        console.log("Server Error");
      }
    });   
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/animal/1/breeds',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          that.setBreeds(response.breeds);
        }
        else{
          console.log("Request Failed");
        };
      },
      error: function(response) {
        console.log("Server Error");
      }
    });
  },

  componentDidMount: function() {
    
  },

  componentWillUnmount: function(){
    $(window).unbind('resize',this.adjustResize);
  },

  createCat: function(){
    var newDate = this.state.startDate.format("YYYY-MM-DD");
    var breedChoice = 0;
    for (var i = this.state.breeds.length - 1; i >= 0; i--) {
      if(this.state.selectValueBreed == this.state.breeds[i].name){
        breedChoice = this.state.breeds[i].id;
      }
    };
    var declawed = false;
    var outdoor = false;
    var fixed = false;
    if (this.state.selectedOptionDeclawed == '1') {
      declawed = true;
    };
    if (this.state.selectedOptionOutdoor == '1') {
      outdoor = true;
    };
    if (this.state.selectedOptionFixed == '1') {
      fixed = true;
    };
    var myData = {
      'name': this.state.name, 
      'animalTypeID': 1, 
      'breed': breedChoice, 
      'gender': this.state.selectedOptionGender, 
      'dateOfBirth': newDate, 
      'weight': this.state.weight, 
      'height': this.state.height, 
      'length': this.state.length, 
      'declawed': declawed, 
      'outdoor': outdoor, 
      'fixed': fixed
    };

    var that = this;
    $.ajax({
      "method": "POST",
      "dataType": "json",
      "data": myData,
      url: 'https://cat.ddns.net/Backend/api.php/pet/create',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        if (response.success == true) {
          console.log("Created Cat");
          that.forceUpdate();
        }
        else{
          console.log("Cant Create Cat");
        };
      },
      error: function(response) {
        console.log(response);
        console.log("Server Error");
      }
    });
  },

  close: function() {
    this.setState({ showModal: false });
  },
  open: function() {
    this.setState({ showModal: true });
  },



  render: function() {
    var that = this;
    const defaultOptionBreed = this.state.selectValueBreed;
    return (
      <div className="" key=""> 
        <Link to="/dashboard/CatProfiles" onClick={this.open} className="pull-right btn btn-primary btn-outline btn-rounded">Add Cat</Link> 
        
        <h2>Cat Profiles</h2> 
        <Jumbotron className="col-lg-12">              
          <div className="col-lg-12 table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Breed</th>
                  <th>Owner</th>
                  <th>Last Edited</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.personal.map(function(ub) {
                      return (
                        <tr key={ub.petid}>
                          <td>{ub.name}</td>
                          <td>{ub.gender==1 ? 'Male' : ub.gender==2 ? 'Female' : 'Unknown'}</td>
                          <td>{that.findBreed(ub.breed)}</td>
                          <td>{ub.firstname +" "+ub.lastname}</td>
                          <td>{ub.lastupdated}</td>
                          <td><Button className="btn-rounded" onClick={() =>that.viewCat(ub.petid)} bsStyle="success"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Button>{"\u00a0\u00a0"}
                          <Button className="btn-rounded" onClick={() =>that.editCat(ub.petid)} bsStyle="warning"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span></Button></td>
                        </tr>
                      )
                  })
                }
                {
                  this.state.shared.map(function(ub) {
                      return (
                        <tr key={ub.petid}>
                          <td>{ub.name}</td>
                          <td>{ub.gender==1 ? 'Male' : ub.gender==2 ? 'Female' : 'Unknown'}</td>
                          <td>{that.findBreed(ub.breed)}</td>
                          <td>{ub.firstname +" "+ub.lastname}</td>
                          <td>{ub.lastupdated}</td>
                          <td><Button onClick={() =>that.viewCat(ub.petid)} bsStyle="success"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Button>{"\u00a0\u00a0"}
                          {ub.access == 'write' ? <Button onClick={() =>that.editCat(ub.petid)} bsStyle="warning"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span></Button> : ''}
                          </td>
                        </tr>
                      )
                  })
                }
              </tbody>
            </table>
          </div>
        </Jumbotron>
        <div className="row">
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Create Cat</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                  <label>Name</label>
                  <FormControl
                    type="text"
                    placeholder="Enter Name"
                    onChange={this.setName}
                  />
                  <br />
                  <label>Breed</label>
                  <Dropdown options={this.state.breedNames} onChange={this._onSelectBreed} value={defaultOptionBreed} placeholder="Select an option" />
                  <br />
                  <label>Gender</label>
                  <br />
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="1" checked={this.state.selectedOptionGender === '1'} onChange={this.handleOptionChangeG} />
                      Male
                    </label>
                  </div>
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="2" checked={this.state.selectedOptionGender === '2'} onChange={this.handleOptionChangeG} />
                      Female
                    </label>
                  </div>
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="3" checked={this.state.selectedOptionGender === '3'} onChange={this.handleOptionChangeG} />
                      Unknown
                    </label>
                  </div>
                  <br/>
                  <br/>
                  <label>Date of Birth</label>
                  <br/>
                  <DatePicker selected={this.state.startDate} onChange={this.handleDate} />;
                  <br />
                  <br />
                  <label>Weight</label>
                  <FormControl
                    type="text"
                    placeholder="Enter Weight"
                    onChange={this.setWeight}
                  />
                  <br />
                  <label>Height</label>
                  <FormControl
                    type="text"
                    placeholder="Enter Height"
                    onChange={this.setHeight}
                  />
                  <br />
                  <label>Length</label>
                  <FormControl
                    type="text"
                    placeholder="Enter Length"
                    onChange={this.setLength}
                  />
                  <br />
                  <label>Declawed</label>
                  <br />
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="1" checked={this.state.selectedOptionDeclawed === '1'} onChange={this.handleOptionChangeD} />
                      Yes
                    </label>
                  </div>
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="0" checked={this.state.selectedOptionDeclawed === '0'} onChange={this.handleOptionChangeD} />
                      No
                    </label>
                  </div>
                  <br />
                  <br />
                  <label>Outdoor</label>
                  <br />
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="1" checked={this.state.selectedOptionOutdoor === '1'} onChange={this.handleOptionChangeO} />
                      Yes
                    </label>
                  </div>
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="0" checked={this.state.selectedOptionOutdoor === '0'} onChange={this.handleOptionChangeO} />
                      No
                    </label>
                  </div>
                  <br />
                  <br />
                  <label>Fixed</label>
                  <br />
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="1" checked={this.state.selectedOptionFixed === '1'} onChange={this.handleOptionChangeF} />
                      Yes
                    </label>
                  </div>
                  <div className="radio-inline">
                    <label>
                      <input type="radio" value="0" checked={this.state.selectedOptionFixed === '0'} onChange={this.handleOptionChangeF} />
                      No
                    </label>
                  </div>
                  <br />

              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.createCat}>Create</Button>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  },

  _onSelectBreed (option) {
    this.setState({selectValueBreed: option.label})
  },

  viewCat: function(id){
    document.cookie='viewCat='+id+';path=/;';
    this.props.history.pushState(null, '/dashboard/CatView');
  },

  editCat: function(id){
    document.cookie='editCat='+id+';path=/;';
  },

  
  findBreed: function(breedID){
    for (var i = this.state.breeds.length - 1; i >= 0; i--) {
      if(this.state.breeds[i].id == breedID){
        return(this.state.breeds[i].name);
      }
    };
    return "Unknown";
  },
  setName: function(e) {
    this.setState({
      name: e.target.value,
      loginError: ''
    });
  },
  handleOptionChangeG: function (changeEvent) {
    this.setState({
      selectedOptionGender: changeEvent.target.value
    });
  },
  handleDate: function(date) {
    this.setState({
      startDate: date
    });
  },
  setWeight: function(e) {
    this.setState({
      weight: e.target.value,
      loginError: ''
    });
  },
  setHeight: function(e) {
    this.setState({
      height: e.target.value,
      loginError: ''
    });
  },
  setLength: function(e) {
    this.setState({
      length: e.target.value,
      loginError: ''
    });
  },
  handleOptionChangeD: function (changeEvent) {
    this.setState({
      selectedOptionDeclawed: changeEvent.target.value
    });
  },
  handleOptionChangeO: function (changeEvent) {
    this.setState({
      selectedOptionOutdoor: changeEvent.target.value
    });
  },
  handleOptionChangeF: function (changeEvent) {
    this.setState({
      selectedOptionFixed: changeEvent.target.value
    });
  },

  setBreeds: function(e){
    var list = [];
    for (var i = e.length - 1; i >= 0; i--) {
      list[i] = e[i].name;
    };
    this.setState({
      breeds: e,
      breedNames : list,
    });
  },

  setPersonal: function(e) {
    this.setState({
      personal: e,
      loginError: ''
    });
  },
  setShared: function(e) {
    this.setState({
      shared: e,
      loginError: ''
    });
  }

});

export default CatProfiles;
