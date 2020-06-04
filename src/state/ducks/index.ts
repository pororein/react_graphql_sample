import loginFormState, { loginFormTypes } from "./loginForm";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export type rootState = {
    router: History<any>,
    loginFormState: loginFormTypes.LoginFormState,
};

const rootReducer = (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        loginFormState: loginFormState,
    });

export default rootReducer;