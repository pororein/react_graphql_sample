import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ReviewRequestForm from './reviewRequestForm';

export default function consoleContents() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/console/reviewRequest" component={ReviewRequestForm} />
            </Switch>
        </React.Fragment>
    );
}