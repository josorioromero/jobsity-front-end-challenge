import { combineReducers } from 'redux';
import { attributesReducer } from './attributes';
import { tabsReducer } from './tabs';

export const rootReducer = combineReducers({
    attributes: attributesReducer,
    tabs: tabsReducer
});
