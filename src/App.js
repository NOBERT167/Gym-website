import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/signin" component={SignIn} exact />
        </Switch>
      </>
    </Router>
  );
}

export default App;
