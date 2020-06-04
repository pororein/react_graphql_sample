import type { LoginFormState, Status, LoginInfo } from "./types";
import { rootState } from '../index'; 

const getLoginInfo = (state: rootState): LoginInfo => {
    return state.loginFormState.loginInfo;
}

const getLoginFormStatus = (state: rootState): Status => {
    return state.loginFormState.status;
}

export default {
    getLoginInfo,
    getLoginFormStatus,
}