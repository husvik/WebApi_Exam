import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage } from "./HomePage";
import { MenuPage } from "./MenuPage";
import { LoginPage } from "./LoginPage";
import { EditDishPage } from "./EditDishPage";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/edit" component={EditDishPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
