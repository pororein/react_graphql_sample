import { ContetsAction, UserAction } from "./types";
import { User } from "../../../types";

export const showUserList = (): ContetsAction => {
    return { type: "SHOW_USER_LIST", content: "SHOW_USER_LIST" };
};

export const createReviewRequest = (): ContetsAction => {
    return { type: "CREATE_REVIEW", content: "CREATE_REVIEW" };
};

export const showReviewList = (): ContetsAction => {
    return { type: "SHOW_REVIEW_LIST", content: "SHOW_REVIEW_LIST" };
};

export const showProjectList = (): ContetsAction => {
    return { type: "SHOW_PROJECT_LIST", content: "SHOW_PROJECT_LIST" };
};

export const createCheckList = (): ContetsAction => {
    return { type: "CREATE_CHECK_LIST", content: "CREATE_CHECK_LIST" };
};

export const showCheckList = (): ContetsAction => {
    return { type: "SHOW_CHECK_LIST", content: "SHOW_CHECK_LIST" };
};

export const logout = (): ContetsAction => {
    return { type: "LOGOUT", content: "LOGOUT" };
};

export const updateUser = (user: User): UserAction => {
    return { type: "UPDATE_USER", user: user };
};

export default {
    showUserList,
    createReviewRequest,
    showReviewList,
    showProjectList,
    createCheckList,
    showCheckList,
    logout,
    updateUser,
}