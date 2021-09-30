import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AddNomineePage } from "../AddNomineePage";
import NomineesPage from "../NomineesPage";
export default function RouterContainer() {
  return (
    <Router>
      <Switch>
        <Route path="/nominees/:page">
          <NomineesPage />
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
