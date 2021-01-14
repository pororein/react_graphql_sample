import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ReviewRequestForm from "./reviewRequestForm";
import ProjectListView from "./projectListView";
import ROUTER_PATH from "../routerPath";

/**
 *
 * 各コンテンツをRouterで切り替えるコンポーネント
 * @export コンポーネント本体
 * @return {JSX.Element}
 */
export default function consoleContents() {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path={ROUTER_PATH.REVIEW_REQUEST_PATH}
          component={ReviewRequestForm}
        />
        <Route
          exact
          path={ROUTER_PATH.PROJECT_LIST_PATH}
          component={ProjectListView}
        />
      </Switch>
    </React.Fragment>
  );
}
