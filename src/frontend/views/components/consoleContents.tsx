import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ReviewRequestPage from '../containers/reviewRequestPage';
import ProjectListView from './projectListView';

export default function consoleContents() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/console/reviewRequest" component={ReviewRequestPage} />
                <Route exact path="/console/showProjectList" component={ProjectListView} />
            </Switch>
        </React.Fragment>
    );
}