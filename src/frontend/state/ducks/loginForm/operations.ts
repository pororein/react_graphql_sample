import actions from "./actions";
import menubarActions from "../menubar/actions";
import type { UserAction } from "../menubar/types";
import selectors from "./selectors";
import type { User } from "../../../types/index";
import type { Action, LoginInfo } from "./types";
import { push } from "connected-react-router";
import { put, call, take, fork, select } from "redux-saga/effects";
import graphqlClient from "../../../common/graphql/client";
import authQuery from "../../../common/graphql/queries/auth";

const updateEMail = (eMailAddress: string): Action => {
    return actions.updateEMail(eMailAddress);
}

const updatePassword = (password: string): Action => {
    return actions.updatePassword(password);
}

const login = (): Action => {
    return actions.login();
};

const cleaning = (): Action => {
    let cleaningLoginInfo: LoginInfo = {
        eMailAddress: "",
        password: "",
    };

    return actions.cleaning(cleaningLoginInfo);
}

const loggingIn = (): Action => {
    return actions.loggingIn();
};

const failed = (): Action => {
    return actions.failed();
};

const success = (): Action => {
    return actions.success();
};

const updateUser = (user: User): UserAction => {
    return menubarActions.updateUser(user);
}

export async function authFetch(loginInfo: LoginInfo): Promise<User> {

    const result = await graphqlClient.request(authQuery, loginInfo);

    if (!result.userOne) {
        throw new Error(`user not found`);
    }

    let userInfo: User = result.userOne;
    
    return userInfo;
};

export function* handleLogin() {
    while (true) {
        const action = yield take("LOGIN"); 
        yield put(loggingIn());

        try {
            const loginInfo: LoginInfo = yield select(selectors.getLoginInfo);
            const result: User = yield call(authFetch, loginInfo);
            yield put(updateUser(result));
            yield put(success());
            yield put(cleaning());
            yield put(push('/console'));
        } catch (err) {
            yield put(failed());
        }
    }
}

function* rootSaga() {
    yield fork(handleLogin);
}

export default {
    updateEMail,
    updatePassword,
    login,
    cleaning,
    loggingIn,
    failed,
    success,
    rootSaga,
};