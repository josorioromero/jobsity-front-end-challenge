// @vendors
import { fromJS } from 'immutable';

// @actions
import {
    CHANGE_ACTIVE_TAB
} from '../../actions';

// @constants
import {
    CATEGORIES,
    TABS_ENUM
} from '../../constants';

// @reducer
import { tabsReducer } from './index';

describe('tabsReducer', () => {
    context('when no action is given', () => {
        it('should return the default state', () => {
            const expectedState = fromJS({
                activeTab: TABS_ENUM[0]
            });
            const actualState = tabsReducer(undefined, {});

            expect(actualState).toEqual(expectedState);
        });
    });

    context('when action value is CHANGE_ACTIVE_TAB', () => {
        it('should update the state with a the selected tab', () => {
            const testAction = ({
                type: CHANGE_ACTIVE_TAB,
                payload: CATEGORIES.COMMANDS
            });
            const expectedState = fromJS({
                activeTab: testAction.payload
            });
            const actualState = tabsReducer(undefined, testAction);

            expect(actualState).toEqual(expectedState);
        });
    });
});
