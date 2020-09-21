import * as types from "./types";

import type { Action, LoginInfo, Status } from "./types";

const STATUS_LOGGINGIN: Status = "LOGGINGIN";
const STATUS_FAILED: Status = "FAILED";
const STATUS_SUCCESS: Status = "SUCCESS";

export const updateEMail = (eMailAddress: string): Action => {
    return {
        type: "UPDATEEMAIL",
        eMailAddress: eMailAddress,
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
    updateEMail,
    updatePassword,
    login,
    cleaning,
    loggingIn,
    failed,
    success,
};