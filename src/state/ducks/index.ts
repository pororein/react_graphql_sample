import loginFormState, { loginFormTypes } from "./loginForm";
import menubarState, { menubarTypes } from "./menubar";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export type rootState = {
    router: History<any>,
    loginFormState: loginFormTypes.LoginFormState,
    menubarState: menubarTypes.MenubarState,
};

const rootReducer = (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        loginFormState: loginFormState,
        menubarState: menubarState,
    });

export default rootReducer;