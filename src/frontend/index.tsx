import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import configureStore, { history } from "./state/store";
import LoginPage from "./views/containers/loginPage";
import ConsolePage from "./views/containers/consolePage";
import { Provider as ReduxProvider } from "react-redux";

const reduxStore = configureStore();

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <ConnectedRouter history={history} noInitialPop>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/console" component={ConsolePage} />
      </Switch>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root')
);