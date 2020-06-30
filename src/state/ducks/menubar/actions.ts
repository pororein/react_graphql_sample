import { Action } from "./types";

export const showUserList = (): Action => {
    return { type: "SHOW_USER_LIST", content: "SHOW_USER_LIST" };
};

export const createReviewRequest = (): Action => {
    return { type: "CREATE_REVIEW", content: "CREATE_REVIEW" };
};

export const showReviewList = (): Action => {
    return { type: "SHOW_REVIEW_LIST", content: "SHOW_REVIEW_LIST" };
};

export const showProjectList = (): Action => {
    return { type: "SHOW_PROJECT_LIST", content: "SHOW_PROJECT_LIST" };
};

export const createCheckList = (): Action => {
    return { type: "CREATE_CHECK_LIST", content: "CREATE_CHECK_LIST" };
};

export const showCheckList = (): Action => {
    return { type: "SHOW_CHECK_LIST", content: "SHOW_CHECK_LIST" };
};

export const logout = (): Action => {
    return { type: "LOGOUT", content: "LOGOUT" };
};

export default {
    showUserList,
    createReviewRequest,
    showReviewList,
    showProjectList,
    createCheckList,
    showCheckList,
    logout,
}