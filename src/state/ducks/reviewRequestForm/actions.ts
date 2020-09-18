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

export const updateReviewee = (index: number, id: string): Action => {
    return { type: "UPDATE_REVIEWEE", index: index, id: id };
};

export const updateReviewerList = (members: ReviewMember[]): Action => {
    return { type: "UPDATE_REVIEWER_LIST", members: members };
};

export const updateReviewer = (index: number, id: string): Action => {
    return { type: "UPDATE_REVIEWER", index: index, id: id };
};

export const updateParticipantList = (members: ReviewMember[]): Action => {
    return { type: "UPDATE_PARTICIPANT_LIST", members: members };
};

export const updateParticipant = (index: number, id: string): Action => {
    return { type: "UPDATE_PARTICIPANT", index: index, id: id };
};

export const updateReviewCheckListIds = (checkLists: string[]): Action => {
    return { type: "UPDATE_CHECK_LISTS", checkLists: checkLists };
};

export const updateReviewCheckList = (index: number, checkList: string): Action => {
    return { type: "UPDATE_CHECK_LIST", index: index, checkList: checkList };
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
}