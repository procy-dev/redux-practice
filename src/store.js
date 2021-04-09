import { createStore, combineReducers } from 'redux';
import homePage from './Components/HomePage/reducers';


const reducers = combineReducers({ homePage });

export default createStore(reducers);