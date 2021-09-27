import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TestArea from "../TestArea";
import { AddNomineePage } from "../AddNomineePage";
import Nominees from "../Nominees";
export default function RouterContainer() {
  return (
    <Router>
      <Switch>
        <Route path="/nominees/:page">
          <Nominees />
        </Route>
        <Route exact path="/add-nominees">
          <AddNomineePage />
        </Route>
        <Route exact path="/">
          <Redirect to="/nominees/1" />
        </Route>
      </Switch>
    </Router>
  );
}
