import * as React from "react";
import Dashboard from "../containers/Dashboard";
import { Route, Switch } from "react-router-dom";

export interface RoutesProps {}
const Routes: React.FC<RoutesProps> = (props) => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
