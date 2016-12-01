import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,Modal,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import $ from "jquery";
import SmallModal from './SmallModal.jsx';
var SuggestTopicModal = React.createClass({

  //state: searchTopic, plotData
  getInitialState: function(){
    return{
      status:"",
      error:""
    }
  },
  handleSendMail: function(e){
    e.preventDefault();
    console.log("........Modal");
    var errors=[];
    var errorlog="";
    if(e.target.senderName.value==""){
      errors.push("Name");
    }
    if(e.target.senderEmail.value==""){
      errors.push("Email");
    }
    if(e.target.subject.value==""){
      errors.push("Subject");
    }
    if(e.target.suggestionMessage.value==""){
      errors.push("Message");
    }
    if(errors.length>0){
      for(var i=0;i<errors.length;i++){
        var comma=", ";
        if(i==0){
          comma="";
          errorlog+=comma+errors[i];
        }

      }
      var error = {
        "errorType":"Suggestion",
        "errorLocation":"Suggestion",
        "errotCode":"007",
        "errorMessage":"The following field(s) are required: "+errorlog
      }
      this.setState({
          error: error
        });
    }
    else{
      var dataPost={
        fromEmail:e.target.senderEmail.value,
        name:e.target.senderName.value,
        subject:e.target.subject.value,
        message:e.target.suggestionMessage.value
      }
      var responseObj={};
      console.log("handleSendMail, dataPost",dataPost,JSON.stringify(dataPost));
      $.ajax({
          url: "http://localhost:8888/wellcat/suggestion.php",
          type: "POST",
          data: {suggestionData:JSON.stringify(dataPost)},
          success: function(response) {
            //alert(response);
            console.log(response);
            responseObj = JSON.parse(response);
            console.log("This is responseObj",responseObj);
            console.log(">>>>>>>>>>>>success",responseObj);
            if ('success' in responseObj){
              console.log(">>>>>>>>>>>>success",responseObj);
              this.setState({
                status:"sent",
                error: ""
              });
            }
            else if('error' in responseObj){
              this.setState({
                error: responseObj.error
              });
            }

         }.bind(this)
      });
      console.log(">>>>>>>>>>>>success",responseObj);
      if ('success' in responseObj){
        console.log(">>>>>>>>>>>>success",responseObj);
        this.setState({
          status:"sent",
          error: ""
        });
      }
      else if('error' in responseObj){
        this.setState({
          error: responseObj.error
        });
      }

    }
  },
  handleClose: function(){
    this.setState({
        status:"",
        error:""
      });
    this.props.onHide();
  },
  //dispaly error
  getErrorDisplay: function(){
    console.log("print error message",this.state.error);
    return(
      <div>
      <br />
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>{this.state.error.errorMessage}</div>
      </div>
    );
  },
  createBody: function(){
    //console.log("createBody//////",this.state.status);
    if(this.state.status=="sent"){
      return(
        <div>
          
            <Modal.Body>
              <p>Your suggestion is sent.</p>
            </Modal.Body>
            <Modal.Footer>
              
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
           
        </div>

      );
    }
    else{
      return(
        <div>
          <form onSubmit={this.handleSendMail}>
                <Modal.Body>
                  <div className="form-group">
                    <label>Name</label><span className="requiredField">*</span>
                    <input type="text" name="senderName" className="form-control" placeholder="Name" required/>
                  </div>

                  <div className="form-group">
                    <label>Email</label><span className="requiredField">*</span>
                    <input type="email" name="senderEmail" className="form-control" placeholder="Email" required/>
                  </div>

                  <div className="form-group">
                    <label>Subject</label><span className="requiredField">*</span>
                    <input type="text" name="subject" className="form-control" placeholder="Subject" required/>
                  </div>
                 
                  <div className="form-group">
                    <label htmlFor="comment">Message</label><span className="requiredField">*</span>
                    <textarea className="form-control" name="suggestionMessage" rows="5" id="Message" placeholder="Message" required></textarea>
                  </div>
                  <span className="requiredField">*</span> Indicates required field
                  {this.state.error.errorLocation=="Suggestion"?this.getErrorDisplay():""}
                </Modal.Body>
                <Modal.Footer>
                  <Button  type="submit" bsStyle="primary" >Send</Button>
                  <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </form>
        </div>
      );
    }
  },
  render() {
    console.log("render function status",this.state.status);
    return (
      <div>
        
        <Modal {...this.props} aria-labelledby="contained-modal-title-sm">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Send a Topic Suggestion</Modal.Title>
          </Modal.Header>
          {this.createBody()}
          
        </Modal>
      </div>
    );
  }
});

export default SuggestTopicModal;