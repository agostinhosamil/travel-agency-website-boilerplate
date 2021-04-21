import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes";

export const ApplicationRouter = () => {
  const routePaths = Object.keys(routes);

  return (
    <BrowserRouter>
      <Switch>
        {routePaths.map((routePath, index) => (
          <Route
            key={index}
            path={routePath}
            component={routes[routePath]}
            exact
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
