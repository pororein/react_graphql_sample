import type { rootState } from '../index'; 

const getContent = (state: rootState): string => {
    return state.menubarState.content;
};

const getRole = (state: rootState): string => {
    return state.menubarState.role;
};

export default {
    getContent,
    getRole,
};