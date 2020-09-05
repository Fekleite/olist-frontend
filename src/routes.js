import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Chat from "./pages/Chat";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Chat} exact />
    </BrowserRouter>
  );
}

export default Routes;
