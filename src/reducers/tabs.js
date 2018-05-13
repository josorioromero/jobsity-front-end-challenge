import { fromJS } from 'immutable';
import { CHANGE_ACTIVE_TAB } from '../actions';
import { TABS_ENUM } from '../constants';

const initialState = fromJS({
    activeTab: TABS_ENUM[0]
});

export const tabsReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case CHANGE_ACTIVE_TAB:
            return state.merge({ activeTab: payload });
        default:
            return state;
    }
};
