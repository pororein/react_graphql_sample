import actions from "./actions";
import type { Action } from "./types";
import { push } from "connected-react-router";
import { put, call, take, fork, select, all } from "redux-saga/effects";
import { User, CheckList, ReviewInfo, ReviewMember, Scope } from "../../../types";
import selectors from "./selectors";
import getAllUserQuery from "../../../common/graphql/queries/getAllUser";
import getAllCheckListQuery from "../../../common/graphql/queries/getAllCheckList";
import createReviewInfoQuery, { CreateReviewInfoQueryType } from "../../../common/graphql/queries/createReviewInfo";
import graphqlClient from "../../../common/graphql/client";
import { ReviewMemberType } from '../../../types/ReviewMemberType';
import { menubarOperations, menubarSelectors } from '../menubar';
import operations from "../loginForm/operations";

const updateReviewTitle = (title: string): Action => {
    return actions.updateReviewTitle(title);
}

const updateReviewDocumentPath = (path: string): Action => {
    return actions.updateReviewDocumentPath(path);
};

const updateReviewTags = (tags: string[]): Action => {
    return actions.updateReviewTags(tags);
};

const updateRevieweeList = (members: ReviewMember[]): Action => {
    return actions.updateRevieweeList(members);
};

const updateReviewerList = (members: ReviewMember[]): Action => {
    return actions.updateReviewerList(members);
};

const updateParticipantList = (members: ReviewMember[]): Action => {
    return actions.updateParticipantList(members);
};

const updateReviewCheckList = (checkLists: CheckList[]): Action => {
    return actions.updateReviewCheckList(checkLists);
};

const updateReviewScope = (scope: number): Action => {
    return actions.updateReviewScope(scope);
};

const createReview = (): Action => {
    return actions.createReview();
};

const getCheckList = (checkLists: CheckList[]): Action => {
    return actions.getCheckList(checkLists);
};

const getUsers = (users: User[]): Action => {
    return actions.getUsers(users);
};

const getRequest = (): Action => {
    return actions.getRequest();
};

const updateStateSuccessful = (): Action => {
    return actions.updateStateSuccessful();
};

const updateStateFailed = (): Action => {
    return actions.updateStateFailed();
};

const updateStateNone = (): Action => {
    return actions.updateStateNone();
};

const initReviewInfo = (): Action => {
    return actions.initReviewInfo();
};

function* handleUpdateTags() {
    while (true) {
        const action = yield take("UPDATE_REVIEW_TAG");
        
        const reviewInfo: ReviewInfo = yield select(selectors.getReviewInfo);
        let tags = reviewInfo.tags;

        if (!tags) {
            // 何もしない
        } else {
            if (action.tag == '') {
                tags.splice(action.index, 1);
            } else if (action.index == tags.length) {
                tags.push(action.tag);
            } else if (action.index < tags.length) {
                tags[action.index] = action.tag;
            }

            yield put(updateReviewTags(tags));
        }
    }
}

async function getAllUserFetch() {
    let result = await graphqlClient.request(getAllUserQuery);
    let users: User[] = result.userMany;

    return users;
}

async function getAllCheckListsFetch() {
    let result = await graphqlClient.request(getAllCheckListQuery);
    let checkLists: CheckList[] = result.checkListMany;

    return checkLists;
}

function* handleGetSelectList() {
    while (true) {
        const action = yield take("GET_SELECT_LIST");

        try {
            let userList: User[] = yield call(getAllUserFetch);
            let checkLists: CheckList[] = yield call(getAllCheckListsFetch);
            yield all([put(getUsers(userList)),
                put(getCheckList(checkLists))
            ]);
        } catch (e) {
            console.dir(e);
        }

    }
}

async function putReviewInfoFetch(reviewInfo: ReviewInfo) {
    let result = await graphqlClient.request(createReviewInfoQuery, reviewInfo);

    if (!result) {
        throw new Error(`failed create review request`);
    }

    return result;
}

function* handleCreateReviewRequest() {
    while (true) {
        const action = yield take("CREATE_REVIEW_REQUEST");

        try {
            const reviewInfo: ReviewInfo = yield select(selectors.getReviewInfo);
            const user: User = yield select(menubarSelectors.getUser);
            reviewInfo.creator = user._id;
            yield call(putReviewInfoFetch, reviewInfo);
            yield put(initReviewInfo());
            yield put(updateStateSuccessful());
        } catch (e) {
            console.dir(e);
            yield put(updateStateFailed());
        }
    }
}

function* rootSaga() {
    yield fork(handleUpdateTags);
    yield fork(handleCreateReviewRequest);
    yield fork(handleGetSelectList);
}

export default {
    updateReviewTitle,
    updateReviewDocumentPath,
    updateReviewTags,
    updateRevieweeList,
    updateReviewerList,
    updateParticipantList,
    updateReviewCheckList,
    updateReviewScope,
    createReview,
    getCheckList,
    getUsers,
    getRequest,
    updateStateSuccessful,
    updateStateFailed,
    updateStateNone,
    rootSaga,
}