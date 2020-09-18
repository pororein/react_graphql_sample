import { combineReducers } from "redux";
import type { ContetsAction, UserAction, Content, MenubarState } from "./types";
import type { User } from "../../../types";

const initialState: MenubarState = {
    content: "CONSOLE"
};

function changeContents(orgContent: MenubarState, updateContent: Content): MenubarState {
    return Object.assign({}, orgContent, { content: updateContent });
}

function changeUser(orgContent: MenubarState, updateUserInfo: User): MenubarState {
    return Object.assign({}, orgContent, { user: updateUserInfo });
}

const content = (state: MenubarState = initialState, action: ContetsAction | UserAction): MenubarState => {
    switch (action.type) {
        case "SHOW_USER_LIST":
        case "CREATE_REVIEW":
        case "SHOW_REVIEW_LIST":
        case "SHOW_PROJECT_LIST":
        case "CREATE_CHECK_LIST":
        case "SHOW_CHECK_LIST":
        case "LOGOUT":
            return changeContents(state, action.content);
        case "UPDATE_USER":
            return changeUser(state, action.user);
        default:
            return state;
    }
};

const menubarReducer = combineReducers({
    content: content,
});

export default menubarReducer;