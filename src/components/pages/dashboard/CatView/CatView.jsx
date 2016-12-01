import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Button, Modal} from 'react-bootstrap';
import $ from "jquery";
import ReactDOM from 'react-dom';

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
      showModal: false
    };
  },

  componentWillMount:function() {
    var that = this;
    $.ajax({
      "method": "GET",
      url: 'https://cat.ddns.net/Backend/api.php/pet/view/36',
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
            that.setDeclawed(response.pet.outdoor);
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
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },
  

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title ">{this.state.name}</h3>
                <p className=" text-info">Last Edited: November 30, 2016, 03:16 pm </p>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src={require("../../../../common/images/catHighFive.jpeg")} className="img-circle img-responsive" /> </div>
                  <div className=" col-md-9 col-lg-9 "> 
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>Breed:</td>
                          <td>{this.state.breed}</td>
                        </tr>
                        <tr>
                          <td>Date of Birth</td>
                          <td>{this.state.bday}</td>
                        </tr>
                        <tr>
                        </tr><tr>
                          <td>Gender:</td>
                          <td>{this.state.gender}</td>
                        </tr>
                         <tr>
                          <td>Weight:</td>
                          <td>{this.state.weight}</td>
                        </tr>
                         <tr>
                          <td>Height:</td>
                          <td>{this.state.height}</td>
                        </tr>
                         <tr>
                          <td>Length:</td>
                          <td>{this.state.length}</td>
                        </tr>
                         <tr>
                          <td>Declawed:</td>
                          <td>{this.state.declawed}</td>
                        </tr>
                         <tr>
                          <td>Outdoor:</td>
                          <td>{this.state.outdoor}</td>
                        </tr>
                        <tr>
                          <td>Fixed:</td>
                          <td>{this.state.fixed}</td>
                        </tr>
                      </tbody>
                    </table>
                    <Button bsStyle="primary" bsSize="large" onClick={this.open}>Share Ownership of Cat</Button>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" className="btn btn-sm btn-primary"><i className="glyphicon glyphicon-envelope" /></a>
                <span className="pull-right">
                  <a href="edit.html" data-original-title="Edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-edit" /></a>
                  <a data-original-title="Remove this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-danger"><i className="glyphicon glyphicon-remove" /></a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Sharing a Cat</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Enter the email of the user you want to share your cat with: </h4>
              <p>Email of user:<textarea class="form-control col-xs-12"></textarea></p>
              </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleShare}>Share</Button>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  },


  handleShare: function(e) {
    var email = getCookie();
    var petID = 36;
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
        console.log("Server Error");
      }
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
    if (e == "true") {
      this.setState({ declawed: true, loginError: ''});
    }
    else{
      this.setState({ declawed: false, loginError: ''});
    };
  },

  setOutdoor: function(e) {
    if (e == "true") {
      this.setState({ outdoor: true, loginError: ''});
    }
    else{
      this.setState({ outdoor: false, loginError: ''});
    };

  },

  setFixed: function(e) {
    if (e == "true") {
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
    var email;

    for(i = 0; i < cookieVarList.length; i++){
        currentVar = cookieVarList[i];
        splitCurrentVar = currentVar.split("=");
        /*splitCurrentVar: Index 0 holds the name, index 1 holds the value*/
        if(splitCurrentVar[0] == " email"){
            email = splitCurrentVar[1];
        }
        if(splitCurrentVar[0] == "email"){
            email = splitCurrentVar[1];
        }
    }
    return email;
  }

export default CatProfile;