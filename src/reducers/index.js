import { combineReducers } from 'redux';
import { tabsReducer } from './tabs';

export const rootReducer = combineReducers({
    tabs: tabsReducer
});
