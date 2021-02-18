import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import layout
import Layout from "./components/Layout";

//import pages
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
