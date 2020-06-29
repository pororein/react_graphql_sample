import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import configureStore, { history } from "./state/store";
import LoginPage from "./views/containers/loginPage";
import Menubar from "./views/components/menubar";
import { Provider as ReduxProvider } from "react-redux";

const reduxStore = configureStore();

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <ConnectedRouter history={history} noInitialPop>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/console" component={Menubar} />
      </Switch>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root')
);