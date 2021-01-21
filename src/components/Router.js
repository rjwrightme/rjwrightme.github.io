import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Hero from "./Hero";
import Header from "./Header";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/portfolio" component={Hero} />
        <Route exact path="/contact" component={Hero} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
