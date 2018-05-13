import { TABS_ENUM } from '../constants';

export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
export const changeActiveTab = activeTabId =>
    dispatch =>
        dispatch({
            type: CHANGE_ACTIVE_TAB,
            payload: TABS_ENUM[activeTabId]
        });
