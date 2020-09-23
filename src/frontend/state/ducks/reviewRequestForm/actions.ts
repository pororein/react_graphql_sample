import { Action } from "./types";
import { User, CheckList, ReviewInfo, ReviewMember, Scope } from "../../../types";

export const updateReviewTitle = (title: string): Action => {
    return { type: "UPDATE_REVIEW_TITLE", title: title };
};

export const updateReviewDocumentPath = (path: string): Action => {
    return { type: "UPDATE_REVIEW_DOC_PATH", path: path };
};

export const updateReviewTags = (tags: string[]): Action => {
    return { type: "UPDATE_REVIEW_TAGS", tags: tags };
};

export const updateReviewTag = (index: number, tag: string): Action => {
    return { type: "UPDATE_REVIEW_TAG", index: index, tag: tag };
};

export const updateRevieweeList = (members: ReviewMember[]): Action => {
    return { type: "UPDATE_REVIEWEE_LIST", members: members };
};

export const updateReviewerList = (members: ReviewMember[]): Action => {
    return { type: "UPDATE_REVIEWER_LIST", members: members };
};

export const updateParticipantList = (members: ReviewMember[]): Action => {
    return { type: "UPDATE_PARTICIPANT_LIST", members: members };
};

export const updateReviewCheckList = (checkLists: CheckList[]): Action => {
    return { type: "UPDATE_CHECK_LISTS", checkLists: checkLists };
};

export const updateReviewScope = (scope: number): Action => {
    return { type: "UPDATE_SCOPE", scope: scope };
};

export const createReview = (): Action => {
    return { type: "CREATE_REVIEW_REQUEST" };
};

export const getCheckList = (checkLists: CheckList[]): Action => {
    return { type: "GET_CHECK_LISTS", checkLists: checkLists };
};

export const getUsers = (users: User[]): Action => {
    return { type: "GET_USERS", users: users };
};

export const getRequest = (): Action => {
    return { type: "GET_SELECT_LIST" };
};

export const updateStateSuccessful = (): Action => {
    return { type: "CREATE_REVIEW_SUCCESSFUL", status: "SUCCESS" };
};

export const updateStateFailed = (): Action => {
    return { type: "CREATE_REVIEW_FAILED", status: "FAILED" };
};

export default {
    updateReviewTitle,
    updateReviewDocumentPath,
    updateReviewTags,
    updateReviewTag,
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
}