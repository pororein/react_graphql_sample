import actions from "./actions";
import type { Action } from "./types";
import { push } from "connected-react-router";
import { put, call, take, fork, select, all } from "redux-saga/effects";
import { User, CheckList, ReviewInfo, ReviewMember, Scope } from "../../../types";
import selectors from "./selectors";
import getAllUserQuery from "../../../../common/graphql/queries/getAllUser";
import getAllCheckListQuery from "../../../../common/graphql/queries/getAllCheckList";
import createReviewInfoQuery, { CreateReviewInfoQueryType } from "../../../../common/graphql/queries/createReviewInfo";
import graphqlClient from "../../../../common/graphql/client";
import { ReviewMemberType } from '../../../types/ReviewMemberType';
import { menubarOperations, menubarSelectors } from '../menubar';

const updateReviewTitle = (title: string): Action => {
    return actions.updateReviewTitle(title);
}

const updateReviewDocumentPath = (path: string): Action => {
    return actions.updateReviewDocumentPath(path);
};

const updateReviewTags = (tags: string[]): Action => {
    return actions.updateReviewTags(tags);
};

const updateReviewTag = (index: number, tag: string): Action => {
    return actions.updateReviewTag(index, tag);
};

const updateRevieweeList = (members: ReviewMember[]): Action => {
    return actions.updateRevieweeList(members);
};

const updateReviewee = (index: number, id: string): Action => {
    return actions.updateReviewee(index, id);
};

const updateReviewerList = (members: ReviewMember[]): Action => {
    return actions.updateReviewerList(members);
};

const updateReviewer = (index: number, id: string): Action => {
    return actions.updateReviewer(index, id);
};

const updateParticipantList = (members: ReviewMember[]): Action => {
    return actions.updateParticipantList(members);
};

const updateParticipant = (index: number, id: string): Action => {
    return actions.updateParticipant(index, id);
};

const updateReviewCheckListIds = (checkLists: string[]): Action => {
    return actions.updateReviewCheckListIds(checkLists);
};

const updateReviewCheckList = (index: number, checkListId: string): Action => {
    return actions.updateReviewCheckList(index, checkListId);
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

function* handleUpdateRevieweeList() {
    while (true) {
        const action = yield take("UPDATE_REVIEWEE");
        
        const reviewInfo: ReviewInfo = yield select(selectors.getReviewInfo);
        let revieweeList = reviewInfo.revieweeList;

        if (!revieweeList) {
            // 何もしない
        } else {

            let reviewee: ReviewMember = {
                _id: action.id,
                memberType: ReviewMemberType.REVIEWEE
            }

            if (action.id == "none") {
                revieweeList.splice(action.index, 1);
            } else if (action.index == revieweeList.length) {
                revieweeList.push(reviewee);
            } else if (action.index < revieweeList.length) {
                revieweeList[action.index] = reviewee;
            }

            yield put(updateRevieweeList(revieweeList));
        }
    }
}

function* handleUpdateReviewerList() {
    while (true) {
        const action = yield take("UPDATE_REVIEWER");
        
        const reviewInfo: ReviewInfo = yield select(selectors.getReviewInfo);
        let reviewerList = reviewInfo.reviewerList;

        if (!reviewerList) {
            // 何もしない
        } else {

            let reviewer: ReviewMember = {
                _id: action.id,
                memberType: ReviewMemberType.REVIEWER
            }

            if (action.id == "none") {
                reviewerList.splice(action.index, 1);
            } else if (action.index == reviewerList.length) {
                reviewerList.push(reviewer);
            } else if (action.index < reviewerList.length) {
                reviewerList[action.index] = reviewer;
            }

            yield put(updateReviewerList(reviewerList));

        }
    }
}

function* handleUpdateParticipantList() {
    while (true) {
        const action = yield take("UPDATE_PARTICIPANT");
        
        const reviewInfo: ReviewInfo = yield select(selectors.getReviewInfo);
        let participantList = reviewInfo.participantList;

        if (!participantList) {
            // 何もしない
        } else {

            let participant: ReviewMember = {
                _id: action.id,
                memberType: ReviewMemberType.PARTICIPANT
            }

            if (action.id == "none") {
                participantList.splice(action.index, 1);
            } else if (action.index == participantList.length) {
                participantList.push(participant);
            } else if (action.index < participantList.length) {
                participantList[action.index] = participant;
            }

            yield put(updateParticipantList(participantList));

        }
    }
}

function* handleUpdateReviewCheckList() {
    while (true) {
        const action = yield take("UPDATE_CHECK_LIST");
        
        const reviewInfo: ReviewInfo = yield select(selectors.getReviewInfo);
        let checkListIds = reviewInfo.checkListIds;

        if (!checkListIds) {
            // 何もしない
        } else {

            if (action.checkList == "none") {
                checkListIds.splice(action.index, 1);
            } else if (action.index == checkListIds.length) {
                checkListIds.push(action.checkList);
            } else if (action.index < checkListIds.length) {
                checkListIds[action.index] = action.checkList;
            }

            yield put(updateReviewCheckListIds(checkListIds));

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
            yield call(putReviewInfoFetch, reviewInfo);
            yield put(menubarOperations.showReviewList());
        } catch (e) {
            
        }
    }
}

function* rootSaga() {
    yield fork(handleUpdateTags);
    yield fork(handleUpdateRevieweeList);
    yield fork(handleUpdateReviewerList);
    yield fork(handleUpdateParticipantList);
    yield fork(handleUpdateReviewCheckList);
    yield fork(handleGetSelectList);
    yield fork(handleCreateReviewRequest);
}

export default {
    updateReviewTitle,
    updateReviewDocumentPath,
    updateReviewTags,
    updateReviewTag,
    updateRevieweeList,
    updateReviewee,
    updateReviewerList,
    updateReviewer,
    updateParticipantList,
    updateParticipant,
    updateReviewCheckListIds,
    updateReviewCheckList,
    updateReviewScope,
    createReview,
    getCheckList,
    getUsers,
    getRequest,
    rootSaga,
}