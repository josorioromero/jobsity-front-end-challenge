import { TABS_ENUM } from '../constants';

export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
export const changeActiveTab = activeTabId =>
    dispatch =>
        dispatch({
            type: CHANGE_ACTIVE_TAB,
            payload: TABS_ENUM[activeTabId]
        });

export const LOAD_DEFAULT_ATTRIBUTES = 'LOAD_DEFAULT_ATTRIBUTES';
export const loadDefaultAttributes = () =>
    dispatch =>
        dispatch({
            type: LOAD_DEFAULT_ATTRIBUTES
        });

export const CREATE_NEW_ATTRIBUTE = 'CREATE_NEW_ATTRIBUTE';
export const createNewAttribute = () =>
    (dispatch, getState) => {
        const category = getState().tabs.get('activeTab');

        dispatch({
            type: CREATE_NEW_ATTRIBUTE,
            payload: category
        });
    };
