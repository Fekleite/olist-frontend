import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Onboarding from "./pages/Oboarding";
import Steps from "./pages/Steps";
import NewProduct from "./pages/NewProduct";
import ProductRegister from "./pages/ProductRegister";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/home" component={Onboarding} exact />
      <Route path="/steps" component={Steps} exact />
      <Route path="/profile" component={Profile} exact />
      <Route path="/register" component={Chat} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/new-product" component={NewProduct} exact />
      <Route path="/quick-registration" component={ProductRegister} exact />
    </BrowserRouter>
  );
}

export default Routes;
