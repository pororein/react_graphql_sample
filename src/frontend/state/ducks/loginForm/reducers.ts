import { combineReducers } from "redux";
import type { LoginInfo, Action, LoginFormState, Status } from "./types";
import { connectRouter } from 'connected-react-router';

const initLoginInfo: LoginInfo = {
    eMailAddress: '',
    password: '',
};

const initState: Status = "INIT";

function updateEMail(loginInfo: LoginInfo, eMailAddress: string): LoginInfo {
    return Object.assign({}, loginInfo, { eMailAddress: eMailAddress });
};

function updatePassword(loginInfo: LoginInfo, password: string): LoginInfo {
    return Object.assign({}, loginInfo, { password: password });
};

function updateLoginInfo(original: LoginInfo, update: LoginInfo): LoginInfo {
    return Object.assign({}, original, { eMailAddress: update.eMailAddress, password: update.password });
};

const loginInfo = (state: LoginInfo = initLoginInfo, action: Action): LoginInfo => {
    switch (action.type) {
        case "LOGIN":
            return state;
        case "UPDATEEMAIL":
            return updateEMail(state, action.eMailAddress);
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