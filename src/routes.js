import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Signup from "./auth/signup";
import Signin from "./auth/signin";
import Activate from "./auth/activate";
import Private from "./core/private";
import Admin from "./core/admin";
import PrivateRoute from "./auth/privateRoute";
import AdminRoute from "./auth/adminRoute";
import Forgot from "./auth/forgot";
import Reset from "./auth/reset";
require("dotenv").config();

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/auth/activate/:token" component={Activate} />
        <PrivateRoute path="/private" component={Private} />
        <AdminRoute path="/admin" component={Admin} />
        <Route path="/auth/password/forgot" exact component={Forgot} />
        <Route path="/auth/password/reset/:token" exact component={Reset} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
