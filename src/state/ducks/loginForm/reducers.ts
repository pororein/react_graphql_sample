import { combineReducers } from "redux";
import type { LoginInfo, Id, Password, Action, LoginFormState, Status } from "./types";
import { connectRouter } from 'connected-react-router';

const initLoginInfo: LoginInfo = {
    id: '',
    password: '',
};

const initState: Status = "INIT";

function updateId(loginInfo: LoginInfo, id: Id): LoginInfo {
    return Object.assign({}, loginInfo, { id: id });
};

function updatePassword(loginInfo: LoginInfo, password: Password): LoginInfo {
    return Object.assign({}, loginInfo, { password: password });
};

function updateLoginInfo(original: LoginInfo, update: LoginInfo): LoginInfo {
    return Object.assign({}, original, { id: update.id, password: update.password });
};

const loginInfo = (state: LoginInfo = initLoginInfo, action: Action): LoginInfo => {
    switch (action.type) {
        case "LOGIN":
            return state;
        case "UPDATEID":
            return updateId(state, action.id);
        case "UPDATEPASSWORD":
            return updatePassword(state, action.password);
        case "CLEANING":
            return updateLoginInfo(state, action.loginInfo);
        default:
            return state;
    }
};

const status = (state: Status = initState, action: Action): Status => {
    switch (action.type) {
        case "LOGGINGIN":
        case "FAILED":
        case "SUCCESS":
            return action.status;
        default:
            return state;
    }
}

const loginFormReducer = combineReducers({
    loginInfo: loginInfo,
    status: status,
});

export default loginFormReducer;