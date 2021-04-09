import { createSelector } from 'reselect';

const homePageState = (state) => state.homePage;

export const makeSelectUsers = createSelector(homePageState, (homePage) => homePage.users) // 'make' is a naming convention for selectors