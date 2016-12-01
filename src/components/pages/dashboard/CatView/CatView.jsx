import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Button, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import $ from "jquery";
import ReactDOM from 'react-dom';
import { History } from 'history';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
var CatProfile = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      weight: '',
      height: '',
      length: '',
      breed: '',
      gender: '',
      bday: '',
      declawed: false,
      fixed: false,
      outdoor: false,
      emailBuddy: '',
      breeds: [],
      showModal: false
    };
  },

  mixins: [History],

  componentWillMount:function() {
    var that = this;
    var catNum = getCookie();
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/pet/view/'+catNum,
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          that.setName(response.pet.name);  
          that.setWeight(response.pet.weight);
          that.setHeight(response.pet.height);
          that.setLength(response.pet.length);
          that.setBreed(response.pet.breed);
          that.setGender(response.pet.gender);
          that.setBday(response.pet.dateofbirth);
          if (response.pet.declawed != null) {
            that.setDeclawed(response.pet.declawed);
          };
          if (response.pet.fixed != null) {
            that.setFixed(response.pet.fixed);
          };
          
          if (response.pet.outdoor != null) {
            that.setOutdoor(response.pet.outdoor);
          };
          console.log("Got Cats");
        }
        else{
          console.log("Cant Get Cats");
        };
      },
      error: function(response) {
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
  close: function() {
    this.setState({ showModal: false });
  },
  open: function() {
    this.setState({ showModal: true });
  },
  back: function(){
    this.props.history.pushState(null, '/dashboard/CatProfiles');
  },
  
  render: function() {
    return (
          <div className="col-lg-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title ">{this.state.name}</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src={require("../../../../common/images/catHighFive.jpeg")} className="img-circle img-responsive" /> </div>
                  <div className=" col-md-9 col-lg-9 "> 
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td className="left">Breed</td>
                          <td>{this.findBreed(this.state.breed)}</td>
                        </tr>
                        <tr>
                          <td>Date of Birth</td>
                          <td>{this.state.bday}</td>
                        </tr>
                        <tr>
                        </tr><tr>
                          <td>Gender</td>
                          <td>{this.state.gender==1 ? 'Male' : this.state.gender==2 ? 'Female' : 'Unknown'}</td>
                        </tr>
                         <tr>
                          <td>Weight</td>
                          <td>{this.state.weight}</td>
                        </tr>
                         <tr>
                          <td>Height</td>
                          <td>{this.state.height}</td>
                        </tr>
                         <tr>
                          <td>Length</td>
                          <td>{this.state.length}</td>
                        </tr>
                         <tr>
                          <td>Declawed</td>
                          <td>{this.state.declawed == true ? 'Yes' : 'No'}</td>
                        </tr>
                         <tr>
                          <td>Outdoor</td>
                          <td>{this.state.outdoor == true ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr>
                          <td>Fixed</td>
                          <td>{this.state.fixed == true ? 'Yes' : 'No'}</td>
                        </tr>
                      </tbody>
                    </table>
                    <Button bsStyle="info" block onClick={this.open}>Share Ownership of Cat</Button>
                    <Modal show={this.state.showModal} onHide={this.close}>
                      <Modal.Header closeButton>
                        <Modal.Title>Sharing a Cat</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                            <div className="control-label">Enter the email of the user you want to share your cat with:</div>
                            <FormControl type="text" value={this.state.emailBuddy} placeholder="Enter text" onChange={this.handleChange}/>
                          </FormGroup>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.handleShare}>Share</Button>
                        <Button bsStyle="default" onClick={this.close}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                    <Button bsStyle="success"  block onClick={this.back}>Done</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  },

  getValidationState: function() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(this.state.emailBuddy) == false){
      return 'error'
    }
    else{
      return 'success'
    }
  },

  handleChange: function(e) {
    this.setState({ emailBuddy: e.target.value });
  },

  handleShare: function(e) {
    var email = this.state.emailBuddy;
    var petID = getCookie();
    var access = "write";
    var myData = {'email' : email, 'petID' : petID, 'access' : access}
    $.ajax({
      "method": "POST",
      "dataType": "json",
      "data": myData,
      url: 'https://cat.ddns.net/Backend/api.php/pet/accessibility',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        console.log(response);
        if (response.success == true) {
          console.log("Shared");
        }
        else{
          console.log("Cant Share");
        };
      },
      error: function(response) {
        console.log(response);
        console.log("Server Error");
      }
    });
  },

  findBreed: function(breedID){
    for (var i = this.state.breeds.length - 1; i >= 0; i--) {
      if(this.state.breeds[i].id == breedID){
        return(this.state.breeds[i].name);
      }
    };
    return "Unknown";
  },

  setBreeds: function(e){
    this.setState({
      breeds: e,
      loginError: ''
    });
  },

  setName: function(e) {
    this.setState({
      name: e,
      loginError: ''
    });
  },
  setBreed: function(e) {
    this.setState({
      breed: e,
      loginError: ''
    });
  },
  setBday: function(e) {
    this.setState({
      bday: e,
      loginError: ''
    });
  },
  setWeight: function(e) {
    this.setState({
      weight: e,
      loginError: ''
    });
  },
  setHeight: function(e) {
    this.setState({
      height: e,
      loginError: ''
    });
  },
  setLength: function(e) {
    this.setState({
      length: e,
      loginError: ''
    });
  },
  setGender: function(e) {
    this.setState({
      gender: e,
      loginError: ''
    });
  },
  setDeclawed: function(e) {
    if (e == true) {
      this.setState({ declawed: true, loginError: ''});
    }
    else{
      this.setState({ declawed: false, loginError: ''});
    };
  },
  setOutdoor: function(e) {
    if (e == true) {
      this.setState({ outdoor: true, loginError: ''});
    }
    else{
      this.setState({ outdoor: false, loginError: ''});
    };
  },
  setFixed: function(e) {
    if (e == true) {
      this.setState({ fixed: true, loginError: ''});
    }
    else{
      this.setState({ fixed: false, loginError: ''});
    };
  },
  
});

function getCookie() {
    var cookieVarList = document.cookie.split(";");
    var currentVar;
    var splitCurrentVar;
    var i;
    var cat;
    for(i = 0; i < cookieVarList.length; i++){
        currentVar = cookieVarList[i];
        splitCurrentVar = currentVar.split("=");
        /*splitCurrentVar: Index 0 holds the name, index 1 holds the value*/
        if(splitCurrentVar[0] == " viewCat"){
            cat = splitCurrentVar[1];
        }
        if(splitCurrentVar[0] == "viewCat"){
            cat = splitCurrentVar[1];
        }
    }
    return cat;
  }
export default CatProfile;