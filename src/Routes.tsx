import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import layout
import Layout from "./components/Layout";

//import pages
import Home from "./pages/Home/Home";

//import component pages
import Table from "./pages/Components/Table";
import Button from "./pages/Components/Button";
import Header from "./pages/Components/Header";
import TextField from "./pages/Components/TextField";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/components/table" component={Table} />
          <Route exact path="/components/button" component={Button} />
          <Route exact path="/components/header" component={Header} />
          <Route exact path="/components/textfield" component={TextField} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
