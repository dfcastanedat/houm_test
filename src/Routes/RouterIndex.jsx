import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";

export default function RouterIndex() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard}></Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
