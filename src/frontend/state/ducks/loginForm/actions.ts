import * as types from "./types";

import type { Action, LoginInfo, Status } from "./types";

const STATUS_LOGGINGIN: Status = "LOGGINGIN";
const STATUS_FAILED: Status = "FAILED";
const STATUS_SUCCESS: Status = "SUCCESS";

export const updateId = (id: string): Action => {
    return {
        type: "UPDATEID",
        id: id,
    }
};

export const updatePassword = (password: string): Action => {
    return {
        type: "UPDATEPASSWORD",
        password: password,
    }
}; 

export const login = (): Action => {
    return {
        type: "LOGIN",
    }
};

export const cleaning = (loginInfo: LoginInfo): Action => {
    return {
        type: "CLEANING",
        loginInfo: loginInfo,
    }
}

export const loggingIn = (): Action => {
    return {
        type: STATUS_LOGGINGIN,
        status: STATUS_LOGGINGIN,
    }
}

export const failed = (): Action => {
    return {
        type: STATUS_FAILED,
        status: STATUS_FAILED,
    }
}

export const success = (): Action => {
    return {
        type: STATUS_SUCCESS,
        status: STATUS_SUCCESS,
    }
}

export default {
    updateId,
    updatePassword,
    login,
    cleaning,
    loggingIn,
    failed,
    success,
};