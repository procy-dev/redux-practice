import { createStore, combineReducers } from 'redux';
import homePage from './Components/HomePage/reducers';
import userPage from './Components/UserPage/reducers';


const reducers = combineReducers({ homePage, userPage });

export default createStore(reducers);