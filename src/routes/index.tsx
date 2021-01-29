import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../containers/Dashboard";

export interface RoutesProps {}
const Routes: React.FC<RoutesProps> = (props) => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
