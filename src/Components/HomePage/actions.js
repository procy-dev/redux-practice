import { ActionTypes } from './constants';

export const setUsers = (users) => ({
    type: ActionTypes.SET_USERS, // ALWAYS capitalized
    payload: users,
})