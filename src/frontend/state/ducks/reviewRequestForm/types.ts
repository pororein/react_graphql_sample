import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";
import type { ReviewInfo, ReviewMember, Scope, User, CheckList } from "../../../types";

type Action = { type: 'UPDATE_REVIEW_TITLE', title: string } |
                { type: 'UPDATE_REVIEW_DOC_PATH', path: string } |
                { type: 'UPDATE_REVIEW_TAGS', tags: string[] } |
                { type: 'UPDATE_REVIEW_TAG', index: number, tag: string } |
                { type: 'UPDATE_REVIEWEE_LIST', members: User[] } |
                { type: 'UPDATE_REVIEWER_LIST', members: User[] } |
                { type: 'UPDATE_PARTICIPANT_LIST', members: User[] } |
                { type: 'UPDATE_CHECK_LISTS', checkLists: CheckList[] } |
                { type: 'UPDATE_SCOPE', scope: number } |
                { type: 'CREATE_REVIEW_REQUEST' } | 
                { type: 'GET_SELECT_LIST' } |
                { type: 'GET_CHECK_LISTS', checkLists: CheckList[] } |
                { type: 'GET_USERS', users: User[] } |
                { type: 'CREATE_REVIEW_SUCCESSFUL', status: 'SUCCESS' } |
                { type: 'CREATE_REVIEW_FAILED', status: 'FAILED' } |
                { type: 'CREATE_REVIEW_STATUS_INIT', status: '' } |
                { type: 'CREATE_REVIEW_INFO_INIT' };

type ReviewRequestFormState = {
    reviewInfo?: ReviewInfo
    checkLists?: CheckList[]
    userList?: User[]
    status: '' | 'SUCCESS' | 'FAILED'
}

type Store = ReduxStore<ReviewInfo, Action>;

type Dispatch = ReduxDispatch<Action>
export {
    Action,
    ReviewRequestFormState,
    Store,
    Dispatch,
};
