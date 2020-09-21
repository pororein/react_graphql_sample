import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";
import type { User, Role } from "../../../types";

type ContetsAction = { type: 'SHOW_USER_LIST', content: 'SHOW_USER_LIST' } |
                { type: 'CREATE_REVIEW', content: 'CREATE_REVIEW' } |
                { type: 'SHOW_REVIEW_LIST', content: 'SHOW_REVIEW_LIST' } |
                { type: 'SHOW_PROJECT_LIST', content: 'SHOW_PROJECT_LIST' } |
                { type: 'CREATE_CHECK_LIST', content: 'CREATE_CHECK_LIST' } |
                { type: 'SHOW_CHECK_LIST', content: 'SHOW_CHECK_LIST' } |
                { type: 'LOGOUT', content: 'LOGOUT' };
                
type UserAction = { type: 'UPDATE_USER', user: User };

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
    user?: User
};

type Store = ReduxStore<MenubarState, ContetsAction | UserAction>;

type Dispatch = ReduxDispatch<ContetsAction | UserAction>;

export {
    ContetsAction,
    UserAction,
    Content,
    MenubarState,
    Store,
    Dispatch,
};
