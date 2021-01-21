import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Portfoliopage from "./Portfoliopage";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/portfolio" component={Portfoliopage} />
        <Route exact path="/contact" component={Homepage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default Router;
