import { combineReducers } from "redux";
import type { Action, ReviewRequestFormState } from "./types";
import type { User, CheckList, ReviewInfo } from "../../../types";

const initialState: ReviewRequestFormState = {
    reviewInfo: {
        tags: [],
        revieweeList: [],
        reviewerList: [],
        checkLists: [],
        scope: 0,
    },
    checkLists: [],
    userList: []
};

function changeUserList(orgState: ReviewRequestFormState, updateUserList: User[]): ReviewRequestFormState {
    return Object.assign({}, orgState, { userList: updateUserList });
}

function changeCheckLists(orgState: ReviewRequestFormState, updateCheckLists: CheckList[]): ReviewRequestFormState {
    return Object.assign({}, orgState, { checkLists: updateCheckLists });
}

function changeReviewInfo(orgState: ReviewRequestFormState, updateReviewInfo: ReviewInfo): ReviewRequestFormState {
    let mergedReviewInfo: ReviewInfo = Object.assign({}, orgState.reviewInfo, updateReviewInfo);
    return Object.assign({}, orgState, { reviewInfo: mergedReviewInfo });
}


const state = (state: ReviewRequestFormState = initialState, action: Action): ReviewRequestFormState => {
    switch (action.type) {
        case 'UPDATE_REVIEW_TITLE':
            return changeReviewInfo(state, { title: action.title });
        case 'UPDATE_REVIEW_DOC_PATH':
            return changeReviewInfo(state, { documentPath: action.path });
        case 'UPDATE_REVIEW_TAGS':
            return changeReviewInfo(state, { tags: action.tags });
        case 'UPDATE_REVIEWEE_LIST':
            return changeReviewInfo(state, { revieweeList: action.members });
        case 'UPDATE_REVIEWER_LIST':
            return changeReviewInfo(state, { reviewerList: action.members });
        case 'UPDATE_PARTICIPANT_LIST':
            return changeReviewInfo(state, { participantList: action.members });
        case 'UPDATE_CHECK_LISTS':
            return changeReviewInfo(state, { checkLists: action.checkLists });
        case 'UPDATE_SCOPE':
            return changeReviewInfo(state, { scope: action.scope });
        case 'UPDATE_REVIEW_TITLE':
            return changeReviewInfo(state, { title: action.title });
        case 'GET_CHECK_LISTS':
            return changeCheckLists(state, action.checkLists);
        case 'GET_USERS':
            return changeUserList(state, action.users);
        default:
            return state;
    }
};

export default state;