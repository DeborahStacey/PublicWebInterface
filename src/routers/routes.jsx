import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect } from "react-router";

import BaseLayout from "../components/layouts/Base";
import DashboardLayout from "../components/layouts/Dashboard";

import DashboardOverviewPage from "../components/pages/dashboard/Overview";
import LoginPage from "../components/pages/Login";
import PublishDataSet from "../components/pages/dashboard/PublishDataSet";
import OpenDataset from "../components/pages/dashboard/OpenDataset";
var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
          <Route name="base" path="/" handler={BaseLayout}>
            <Route name="dashboard" path="/dashboard" handler={DashboardLayout}>
              <Route name="dashboard.overview" path="/overview" handler={DashboardOverviewPage} />
              <DefaultRoute name="dashboard.default" handler={DashboardOverviewPage} />
            </Route>
            <Route name="login" path="/login" handler={LoginPage} />
            <Route name="publishdataset" path="/PublishDataSet" handler={PublishDataSet} />

            <Route name="opendataset" path="/OpenDataset/:id" handler={OpenDataset}>
              
            </Route>
            <DefaultRoute name="default" handler={DashboardLayout} />
            <Redirect from="/" to="dashboard.overview" />
          </Route>
      );
    }
  },
  render: function() {
  
  }
  
});

export default Routes;