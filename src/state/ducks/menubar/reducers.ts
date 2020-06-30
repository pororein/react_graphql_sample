import { combineReducers } from "redux";
import type { Action, Content, MenubarState } from "./types";

const initialState: MenubarState = {
    content: "CONSOLE",
    role: "USER",
};

function changeContents(orgContent: MenubarState, updateContent: Content): MenubarState {
    return Object.assign({}, orgContent, { content: updateContent });
}

const content = (state: MenubarState = initialState, action: Action): MenubarState => {
    switch (action.type) {
        case "SHOW_USER_LIST":
        case "CREATE_REVIEW":
        case "SHOW_REVIEW_LIST":
        case "SHOW_PROJECT_LIST":
        case "CREATE_CHECK_LIST":
        case "SHOW_CHECK_LIST":
        case "LOGOUT":
            return changeContents(state, action.content);
        default:
            return state;
    }
};

const menubarReducer = combineReducers({
    content: content,
});

export default menubarReducer;