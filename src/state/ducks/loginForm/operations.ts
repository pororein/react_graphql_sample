import actions from "./actions";
import selectors from "./selectors";
import type { Action, LoginInfo, Id, Password } from "./types";
import { push } from "connected-react-router";
import { put, call, take, fork, select } from "redux-saga/effects";

const updateId = (id: Id): Action => {
    return actions.updateId(id);
}

const updatePassword = (password: Password): Action => {
    return actions.updatePassword(password);
}

const login = (): Action => {
    return actions.login();
};

const cleaning = (): Action => {
    let cleaningLoginInfo: LoginInfo = {
        id: "",
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

// 本来は通信処理だが、画面遷移確認の為非同期sleepしてから適当な文字列を返す
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout( resolve, ms));
}

async function dummyFetch(loginInfo: LoginInfo): Promise<string> {
    await sleep(3000);

    if (loginInfo.id != "test" || loginInfo.password != "test") {
        return "failed";
    }

    return "compleate";
}

function* handleLogin() {
    while (true) {
        const action = yield take("LOGIN"); 
        yield put(loggingIn());
        // TODO: dummyFetchは実装時にfetch処理と取り換える
        const loginInfo = yield select(selectors.getLoginInfo);
        const result = yield call(dummyFetch, loginInfo); 
        if (result == "compleate") {
            yield put(success());
            yield put(cleaning());
            yield put(push('/console'));
        } else {
            yield put(failed());
        }
    }
}

function* rootSaga() {
    yield fork(handleLogin);
}

export default {
    updateId,
    updatePassword,
    login,
    cleaning,
    loggingIn,
    failed,
    success,
    rootSaga,
};