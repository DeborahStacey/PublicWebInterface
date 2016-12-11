import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { History } from 'history';
import {Panel, Input, Button,ButtonInput,Row,Col,Table,Well,FormGroup,
  InputGroup,Glyphicon,ControlLabel,FormControl,Pagination} from 'react-bootstrap';
import $ from "jquery";
import DatasetList from './DatasetList.jsx';
import DatasetDetail from './DatasetDetail.jsx';
var OpenDataset = React.createClass({
  getInitialState: function(){
    return {
      dataset: "",
      datasetList:"",
      reload: false

    }
  },
  //get data and update when parameters passed as props changed
  componentWillReceiveProps:function(nextProps){
    console.log("componentWillReceiveProps",nextProps);
    if(nextProps.location.query.RecordID&&parseInt(nextProps.location.query.RecordID, 10)>0){
      //make ajax call to get record from database
      var dataPost={
        RecordID:nextProps.location.query.RecordID
      }
      var responseObj={};
      console.log("handleSendMail, dataPost",dataPost,JSON.stringify(dataPost));
      $.ajax({
          url: "http://localhost:8888/wellcat/retrievedataset.php",
          type: "POST",
          data: {postData:JSON.stringify(dataPost)},
          success: function(response) {
            //alert(response);
            responseObj = JSON.parse(response);
            console.log("response obj",responseObj);
            if(responseObj!=null){
              console.log("is not null");
              this.setState({
                dataset: responseObj
              });
            }
            else
            {
              this.setState({
                dataset: ""
              });
            }
            
          }.bind(this)
      });
    }
    else if(nextProps.location.query.q!=undefined){   //if it is search query, return dataset list according to criteria
      console.log("this.props.location.query.q",this.props.location.query.q);
      //check if page number param present
      var $pageNumber=1;

      if(nextProps.location.query.page!=undefined){
        $pageNumber= nextProps.location.query.page;
      }
      //make ajax call to get list of dataset that matched criteria from database
      var dataPost={
        criteria:nextProps.location.query.q,
        page:$pageNumber
      }
      var responseObj={};
      console.log("handleSendMail, dataPost",dataPost,JSON.stringify(dataPost));
      $.ajax({
          url: "http://localhost:8888/wellcat/retrievedatasetlist.php",
          type: "POST",
          data: {postData:JSON.stringify(dataPost)},
          success: function(response) {
            //alert(response);
            responseObj = JSON.parse(response);
            console.log("response obj",responseObj);
            if(responseObj!=null){
              console.log("is not null");
              this.setState({
                datasetList: responseObj
              });
            }
            else
            {
              this.setState({
                datasetList: ""
              });
            }
            
          }.bind(this)
      });
    }
    else{  //just get most recent dataset list
      //check if page number param present
      var $pageNumber=1;

      if(this.props.location.query.page!=undefined){
        $pageNumber= this.props.location.query.page;
      }
      //make ajax call to get list of dataset that matched criteria from database
      var dataPost={
        page:$pageNumber
      }
      var responseObj={};
      console.log("q=null........., dataPost",dataPost,JSON.stringify(dataPost));
      $.ajax({
          url: "http://localhost:8888/wellcat/retrievedatasetlist.php",
          type: "POST",
          data: {postData:JSON.stringify(dataPost)},
          success: function(response) {
            //alert(response);
            responseObj = JSON.parse(response);
            console.log("response obj",responseObj);
            if(responseObj!=null){
              console.log("is not null");
              this.setState({
                datasetList: responseObj
              });
            }
            else
            {
              this.setState({
                datasetList: ""
              });
            }
            
          }.bind(this)
      });
    }
  },
  //get data before mount component
  componentWillMount:function() {
    console.log("componentWillMount-----");
    if(this.props.location.query.RecordID&&parseInt(this.props.location.query.RecordID, 10)>0){
      //make ajax call to get record from database
      var dataPost={
        RecordID:this.props.location.query.RecordID
      }
      var responseObj={};
      console.log("componentWillMount ===1, dataPost",dataPost,JSON.stringify(dataPost));
      $.ajax({
          url: "http://localhost:8888/wellcat/retrievedataset.php",
          type: "POST",
          data: {postData:JSON.stringify(dataPost)},
          success: function(response) {
            //alert(response);
            responseObj = JSON.parse(response);
            console.log("response obj",responseObj);
            if(responseObj!=null){
              console.log("is not null");
              this.setState({
                dataset: responseObj
              });
            }
            else
            {
              this.setState({
                dataset: ""
              });
            }
            
          }.bind(this)
      });
    }
    else if(this.props.location.query.q!=undefined){   //if it is search query, return dataset list according to criteria
      console.log("this.props.location.query.q",this.props.location.query.q);
      //check if page number param present
      var $pageNumber=1;

      if(this.props.location.query.page!=undefined){
        $pageNumber= this.props.location.query.page;
      }
      //make ajax call to get list of dataset that matched criteria from database
      var dataPost={
        criteria:this.props.location.query.q,
        page:$pageNumber
      }
      var responseObj={};
      console.log("componentWillMount====2, dataPost",dataPost,JSON.stringify(dataPost));
      $.ajax({
          url: "http://localhost:8888/wellcat/retrievedatasetlist.php",
          type: "POST",
          data: {postData:JSON.stringify(dataPost)},
          success: function(response) {
            //alert(response);
            responseObj = JSON.parse(response);
            console.log("response obj",responseObj);
            if(responseObj!=null){
              console.log("is not null");
              this.setState({
                datasetList: responseObj
              });
            }
            else
            {
              this.setState({
                datasetList: ""
              });
            }
            
          }.bind(this)
      });
    }
    else{  //just get most recent dataset list
      //check if page number param present
      var $pageNumber=1;

      if(this.props.location.query.page!=undefined){
        $pageNumber= this.props.location.query.page;
      }
      //make ajax call to get list of dataset that matched criteria from database
      var dataPost={
        page:$pageNumber
      }
      var responseObj={};
      console.log("q=null.........=3, dataPost",dataPost,JSON.stringify(dataPost));
      $.ajax({
          url: "http://localhost:8888/wellcat/retrievedatasetlist.php",
          type: "POST",
          data: {postData:JSON.stringify(dataPost)},
          success: function(response) {
            //alert(response);
            responseObj = JSON.parse(response);
            console.log("response obj",responseObj);
            if(responseObj!=null){
              console.log("is not null");
              this.setState({
                datasetList: responseObj
              });
            }
            else
            {
              this.setState({
                datasetList: ""
              });
            }
            
          }.bind(this)
      });
    }

  },
  mixins: [History],
  //new parameter passback from child
  updateSearchState:function(q,pageNumber){
    //get query and page number and redirect refresh
    // var $reload = this.state.reload;
    // this.setState({
    //   reload: !$reload
    // });
    this.props.history.pushState(null, '/dashboard/OpenDataSet?q='+q+"&page="+pageNumber);
  },
  render: function() {
    console.log("requset id",this.props.location.query.RecordID,"this.props.location.query.q",this.props.location.query.q);
    if(this.props.location.query.RecordID&&parseInt(this.props.location.query.RecordID, 10)>0){
      console.log("render dataset>>>>",this.state.dataset);
      return(<DatasetDetail dataset={this.state.dataset} />);
      
    }
    return(
      <DatasetList datasetList={this.state.datasetList} redirectHistory={this.props.history} query={this.props.location.query.q} updateSearchState={this.updateSearchState}/>
    );
  }

});

export default OpenDataset;
