import { ActionTypes } from './constants';

export const setUsers = (user) => ({
    type: ActionTypes.SET_USER, // ALWAYS capitalized
    payload: user,
})