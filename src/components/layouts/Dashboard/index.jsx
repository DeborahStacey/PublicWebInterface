import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { History } from 'history';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";


var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
    

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

  mixins: [History],

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

  checkAuthentication: function(){
    var that = this;
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
          that.props.history.pushState(null, '/dashboard/overview');
        };
      },
      error: function(response) {
        console.log("Server Error");
        document.cookie='username=Login;path=/;';
        that.props.history.pushState(null, '/dashboard/overview');
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
                  <button type="button" onClick={this.registerRedirect} className="btn btn-white btn-outline btn-sm btn-rounded">Register</button>

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
                    <Link to="/dashboard/PublicStats">Public Statistics</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/OpenDataset">Open Dataset</Link>
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
      this.checkAuthentication();
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

  registerRedirect: function() {
   this.props.history.pushState(null, '/Register');
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
