import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Chat from "./pages/Chat";
import Profile from "./pages/Profile";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Chat} exact />
      <Route path="/profile" component={Profile} exact />
    </BrowserRouter>
  );
}

export default Routes;
