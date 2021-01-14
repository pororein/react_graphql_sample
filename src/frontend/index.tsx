import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./views/components/loginForm";
import Console from "./views/components/consoleContents";
import ROUTER_PATH from "./views/routerPath";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <ConnectedRouter history={history} noInitialPop>
    <Switch>
      <Route exact path={ROUTER_PATH.ROOT_PATH} component={LoginForm} />
      <Route path={ROUTER_PATH.CONSOLE_PATH} component={Console} />
    </Switch>
  </ConnectedRouter>,
  document.getElementById("root")
);
