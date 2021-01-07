import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ReviewRequestPage from '../containers/reviewRequestPage';
import ProjectListView from './projectListView';
import ROUTER_PATH from '../routerPath';

export default function consoleContents() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={ROUTER_PATH.REVIEW_REQUEST_PATH} component={ReviewRequestPage} />
                <Route exact path={ROUTER_PATH.PROJECT_LIST_PATH} component={ProjectListView} />
            </Switch>
        </React.Fragment>
    );
}