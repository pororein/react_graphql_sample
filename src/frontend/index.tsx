import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import configureStore, { history } from "./state/store";
import LoginForm from "./views/components/loginForm";
import ConsolePage from "./views/containers/consolePage";
import { Provider as ReduxProvider } from "react-redux";
import ROUTER_PATH from "./views/routerPath"; 

const reduxStore = configureStore();

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <ConnectedRouter history={history} noInitialPop>
      <Switch>
        <Route exact path={ROUTER_PATH.ROOT_PATH} component={LoginForm} />
        <Route path={ROUTER_PATH.CONSOLE_PATH} component={ConsolePage} />
      </Switch>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root')
);