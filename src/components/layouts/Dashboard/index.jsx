import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
    $.ajax({
      type: 'GET',
      url: 'https://cat.ddns.net/Backend/api.php/user/authenticate',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        if (response.success == true) {
          document.cookie='username=Logout;path=/;';
        }
        else{
          document.cookie='username=Login;path=/;';
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

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
      loginFlag: false,
      loginString: ''
    };

  },

  contextTypes: {
    router: React.PropTypes.func
  },

  handleLogout:function() {
    var that = this;
    $.ajax({
      type: 'POST',
      url: 'https://cat.ddns.net/Backend/api.php/user/logout',
      xhrFields: {
        withCredentials : true
      },
      success: function(response) {
        if (response.success == true) {
          console.log("Logged Out");
          document.cookie='username=Login;path=/;';
          that.props.history.pushState(null, '/dashboard/overview');
        }
        else{
          console.log("Invalid Loggout");
        };
      },
      error: function(response) {
        console.log("Server Error");
      }
    });
  },

  render: function() {
    // var name = this.context.router.getCurrentPath();
    //console.log(this.state);
    const { pathname } = this.props.location;

    if(getCookie(1) == "Login"){
      return (
        <div className="dashboard-page ui-view"> 
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-sm-3 col-md-2 sidebar"> 
                <div className="text-center"> 
                  <h2 className="brand">WellCat<br/><small>Meow</small></h2> 
                  <img src={require("../../../common/images/flat-avatar1.png")} className="user-avatar" />
                  <br />
                  <Link to="/login" className="btn btn-white btn-outline btn-rounded btn-sm">{getCookie(1)}</Link> 
                </div> 

                <ul className="nav nav-sidebar"> 
                  <li>
                    <Link to="/dashboard/overview">Overview</Link>
                  </li> 
                  <li>
                    <Link to="/dashboard/AboutUS">About Us</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/FAQ">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/PublicStats">Public Cat Statistics</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/SearchVets">Find Local Veterinary Clinic</Link>
                  </li>
                </ul> 
              </div>

               <ReactCSSTransitionGroup component="div"
                                 transitionName="ng"
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={300}
                >
                  {React.cloneElement(<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view">{this.props.children}</div> || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>

                
            </div> 
          </div> 
        </div>
      );
    }
    else{
      return (
        <div className="dashboard-page ui-view"> 
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-sm-3 col-md-2 sidebar"> 
                <div className="text-center"> 
                  <h2 className="brand">WellCat<br/><small>Meow</small></h2> 
                  <img src={require("../../../common/images/flat-avatar1.png")} className="user-avatar" />
                  <br />
                  <Link to="/dashboard/overview" onClick={this.handleLogout} className="btn btn-white btn-outline btn-rounded btn-sm">{getCookie(1)}</Link> 
                </div> 

                <ul className="nav nav-sidebar"> 
                  <li>
                    <Link to="/dashboard/overview">Overview</Link>
                  </li> 
                  <li>
                    <Link to="/dashboard/AboutUS">About Us</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/PublishDataset">Publish Dataset</Link>
                  </li> 
                  <li>
                    <Link to="/dashboard/OpenDataset">Open Dataset</Link>
                  </li> 
                  <li>
                    <Link to="/dashboard/PublicStats">Population Statistics</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/CatProfiles">Cat Profiles</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/FAQ">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/MyProfile">My Profile</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/SearchVets">Find Local Veternary Clinic</Link>
                  </li>
                </ul> 
              </div>

               <ReactCSSTransitionGroup component="div"
                                 transitionName="ng"
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={300}
                >
                  {React.cloneElement(<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view">{this.props.children}</div> || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>

                
            </div> 
          </div> 
        </div>
      );
    }
  },


  statics: {
    fetchData: function(params) {
      }
  }
  
});

function getCookie(x) {
  var cookieVarList = document.cookie.split(";");
    var currentVar;
    var splitCurrentVar;
    var i;
    var flag;

    for(i = 0; i < cookieVarList.length; i++){
        currentVar = cookieVarList[i];
        splitCurrentVar = currentVar.split("=");
        /*splitCurrentVar: Index 0 holds the name, index 1 holds the value*/
        if(splitCurrentVar[0] == " username"){
            flag = splitCurrentVar[1];
        }
        if(splitCurrentVar[0] == "username"){
            flag = splitCurrentVar[1];
        }
    }
    if (x == 1) {
      if (flag == null) {
        return "Login";
      };
      return flag;
    };
}

export default HomePage;
