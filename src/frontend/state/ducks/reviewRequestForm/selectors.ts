import type { rootState } from '../index'; 
import type { ReviewRequestFormState } from './types';
import type { User, CheckList, ReviewInfo } from '../../../types';

const getUserList = (state: rootState): User[] => {
    return state.reviewRequestFormState.userList!;
};

const getCheckLists = (state: rootState): CheckList[] => {
    return state.reviewRequestFormState.checkLists!;
};

const getReviewInfo = (state: rootState): ReviewInfo => {
    return state.reviewRequestFormState.reviewInfo!;
};

const getState = (state: rootState): ReviewRequestFormState => {
    return state.reviewRequestFormState;
};

export default {
    getUserList,
    getCheckLists,
    getReviewInfo,
    getState,
};