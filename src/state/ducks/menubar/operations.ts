import actions from "./actions";
import type { Action } from "./types";
import { push } from "connected-react-router";
import { put, call, take, fork, select } from "redux-saga/effects";

const showUserList = (): Action => {
    return actions.showUserList();
};

const createReviewRequest = (): Action => {
    return actions.createReviewRequest();
};

const showReviewList = (): Action => {
    return actions.showReviewList();
};

const showProjectList = (): Action => {
    return actions.showProjectList();
};

const createCheckList = (): Action => {
    return actions.createCheckList();
};

const showCheckList = (): Action => {
    return actions.showCheckList();
};

const logout = (): Action => {
    return actions.logout();
};

function* handleShowUser() {
    while (true) {
        const action = yield take("SHOW_USER_LIST"); 
        yield put(push('/console/showUserList'));
    }
};

function* handleCreateReview() {
    while (true) {
        const action = yield take("CREATE_REVIEW"); 
        yield put(push('/console/reviewRequest'));
    }
};

function* handleShowReview() {
    while (true) {
        const action = yield take("SHOW_REVIEW_LIST"); 
        yield put(push('/console/showReviewList'));
    }
}

function* handleShowProject() {
    while (true) {
        const action = yield take("SHOW_PROJECT_LIST"); 
        yield put(push('/console/showProjectList'));
    }
}

function* handleCreateCheckList() {
    while (true) {
        const action = yield take("CREATE_CHECK_LIST"); 
        yield put(push('/console/createCheckList'));
    }
}

function* handleShowCheckList() {
    while (true) {
        const action = yield take("SHOW_CHECK_LIST"); 
        yield put(push('/console/showCheckList'));
    }
}

function* handleLogout() {
    while (true) {
        const action = yield take("LOGOUT"); 
        yield put(push('/'));
    }
}

function* rootSaga() {
    yield fork(handleShowUser);
    yield fork(handleCreateReview);
    yield fork(handleShowReview);
    yield fork(handleShowProject);
    yield fork(handleCreateCheckList);
    yield fork(handleShowCheckList);
    yield fork(handleLogout);
}

export default {
    showUserList,
    createReviewRequest,
    handleCreateReview,
    showReviewList,
    showProjectList,
    createCheckList,
    showCheckList,
    logout,
    rootSaga,
}