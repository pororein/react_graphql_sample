import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";
import type { Role } from "../../../types";

type Action = { type: 'SHOW_USER_LIST', content: 'SHOW_USER_LIST' } |
                { type: 'CREATE_REVIEW', content: 'CREATE_REVIEW' } |
                { type: 'SHOW_REVIEW_LIST', content: 'SHOW_REVIEW_LIST' } |
                { type: 'SHOW_PROJECT_LIST', content: 'SHOW_PROJECT_LIST' } |
                { type: 'CREATE_CHECK_LIST', content: 'CREATE_CHECK_LIST' } |
                { type: 'SHOW_CHECK_LIST', content: 'SHOW_CHECK_LIST' } |
                { type: 'LOGOUT', content: 'LOGOUT' };

type Content = "SHOW_USER_LIST" |
                "CREATE_REVIEW" |
                "SHOW_REVIEW_LIST" |
                "SHOW_PROJECT_LIST" |
                "CREATE_CHECK_LIST" |
                "SHOW_CHECK_LIST" |
                "LOGOUT" |
                "CONSOLE";

type MenubarState = {
    content: Content,
    role: Role,
};

type Store = ReduxStore<MenubarState, Action>;

type Dispatch = ReduxDispatch<Action>;

export {
    Action,
    Content,
    MenubarState,
    Store,
    Dispatch,
};
