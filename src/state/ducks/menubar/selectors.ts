import type { rootState } from '../index'; 
import type { User } from '../../../types';

const getContent = (state: rootState): string => {
    return state.menubarState.content;
};

const getUser = (state: rootState): User => {
    return state.menubarState.user!;
};

export default {
    getContent,
    getUser,
};