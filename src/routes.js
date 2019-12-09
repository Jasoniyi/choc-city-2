import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Resources/App.css";
import Layout from "./Hoc/Layout";

import Home from "./Components/Home";
import Artists from "./Components/Artists";
import Album from "./Components/Albums";
import Tweets from "./Components/Tweets";
import Admin from "./Components/Admin";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Artists} path="/artists" />
        <Route exact component={Album} path="/album/:id" />
        <Route exact component={Tweets} path="/tweets/:id" />
        <Route exact component={Admin} path="/admin" />
      </Switch>
    </Layout>
  );
};

export default Routes;
