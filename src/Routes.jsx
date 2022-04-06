import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import utils
import { ScrollToTop } from "./utils/ScrollToTop";

//import layout
import Layout from "./components/Structure/Layout";

//import pages
import Home from "./pages/Home/Home";
import Principles from "./pages/Overview/Priciples";

//import foundation pages
import Setup from "./pages/Foundation/Setup";
import Colors from "./pages/Foundation/Colors";
import Grid from "./pages/Foundation/Grid";
import LayoutPage from "./pages/Foundation/Layout";
import Typography from "./pages/Foundation/Typography";
import Iconography from "./pages/Foundation/Iconography";
import Navigation from "./pages/Foundation/Navigation";
import Accessibility from "./pages/Foundation/Accessibility";
import Semantic from "./pages/Foundation/Semantic";

//import component pages
import Avatar from "./pages/Components/Avatar";
import Breadcrumb from "./pages/Components/Breadcrumb";
import Button from "./pages/Components/Button";
import Card from "./pages/Components/Card";
import Selection from "./pages/Components/Selection";
import Radio from "./pages/Components/RadioButton";
import Header from "./pages/Components/Header";
import Link from "./pages/Components/Link";
import Pagination from "./pages/Components/Pagination";
import Select from "./pages/Components/Dropdown";
import Slider from "./pages/Components/Slider";
import Table from "./pages/Components/Table";
import TextField from "./pages/Components/TextField";
import Tags from "./pages/Components/Tag";

//import pattern pages
import Forms from "./pages/Patterns/Forms";
import Authentication from "./pages/Patterns/Authentication";
import Filter from "./pages/Patterns/Filter";

//import data pages
import Redux from "./pages/Data/Redux";
import HTTP from "./pages/Data/HTTP";

//import token pages
// import Colors from "./pages/Tokens/Colors";
import TypeScale from "./pages/Tokens/TypeScale/TypeScale";

import Sketchbook from "./pages/Sketchbook";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/sketchbook" component={Sketchbook} />
          <Route exact path="/overview/Principles" component={Principles} />
          <Route exact path="/foundation/setup" component={Setup} />
          <Route exact path="/foundation/semantic" component={Semantic} />
          <Route
            exact
            path="/foundation/accessibility"
            component={Accessibility}
          />
          <Route exact path="/foundation/colors" component={Colors} />
          <Route exact path="/foundation/grid" component={Grid} />
          <Route exact path="/foundation/layout" component={LayoutPage} />
          <Route exact path="/foundation/typography" component={Typography} />
          <Route exact path="/foundation/iconography" component={Iconography} />
          <Route exact path="/foundation/navigation" component={Navigation} />
          <Route exact path="/components/avatar" component={Avatar} />
          <Route exact path="/components/breadcrumb" component={Breadcrumb} />
          <Route exact path="/components/button" component={Button} />
          <Route exact path="/components/card" component={Card} />
          <Route exact path="/components/checkbox" component={Selection} />
          <Route exact path="/components/slider" component={Slider} />
          <Route exact path="/components/radio" component={Radio} />
          <Route exact path="/components/header" component={Header} />
          <Route exact path="/components/link" component={Link} />
          <Route exact path="/components/pagination" component={Pagination} />
          <Route exact path="/components/dropdown" component={Select} />
          <Route exact path="/components/table" component={Table} />
          <Route exact path="/components/textfield" component={TextField} />
          <Route exact path="/components/tags" component={Tags} />
          <Route exact path="/patterns/forms" component={Forms} />
          <Route
            exact
            path="/patterns/authentication"
            component={Authentication}
          />
          <Route exact path="/patterns/filter" component={Filter} />
          <Route exact path="/data/redux" component={Redux} />
          <Route exact path="/data/http" component={HTTP} />
          <Route exact path="/token/typescale" component={TypeScale} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
