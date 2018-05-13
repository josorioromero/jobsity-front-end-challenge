// @vendors
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

// @actions
import {
    CHANGE_ACTIVE_TAB,
    LOAD_DEFAULT_ATTRIBUTES,
    CREATE_NEW_ATTRIBUTE,
    changeActiveTab,
    loadDefaultAttributes,
    createNewAttribute
} from './index';

// @constants
import {
    MOCK_ATTRIBUTES,
    TABS_ENUM
} from '../constants';

// @mock-setup
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions test suite', () => {
    context('when changeActiveTab is called for COMMANDS tab', () => {
        const COMMANDS_TAB_ID = 3;
        let store;

        beforeAll(() => {
            store = mockStore({
                tabs: fromJS({
                    activeTab: TABS_ENUM[0]
                })
            });

            store.dispatch(changeActiveTab(COMMANDS_TAB_ID));
        });

        it('should dispatch CHANGE_ACTIVE_TAB action', () => {
            const expectedAction = {
                type: CHANGE_ACTIVE_TAB,
                payload: TABS_ENUM[COMMANDS_TAB_ID]
            };
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toHaveLength(1);
            expect(dispatchedActions).toContainEqual(expectedAction);
        });
    });

    context('when loadDefaultAttributes is called', () => {
        let store;

        beforeAll(() => {
            store = mockStore({
                attributes: fromJS({
                    attributesList: MOCK_ATTRIBUTES
                })
            });

            store.dispatch(loadDefaultAttributes());
        });

        it('should dispatch LOAD_DEFAULT_ATTRIBUTES action', () => {
            const expectedAction = {
                type: LOAD_DEFAULT_ATTRIBUTES
            };
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toHaveLength(1);
            expect(dispatchedActions).toContainEqual(expectedAction);
        });
    });

    context('when createNewAttribute is called', () => {
        let store;

        beforeAll(() => {
            store = mockStore({
                attributes: fromJS({
                    attributesList: MOCK_ATTRIBUTES,
                }),
                tabs: fromJS({
                    activeTab: TABS_ENUM[0]
                })
            });

            store.dispatch(createNewAttribute());
        });

        it('should dispatch CREATE_NEW_ATTRIBUTE action', () => {
            const expectedAction = {
                type: CREATE_NEW_ATTRIBUTE,
                payload: TABS_ENUM[0]
            };
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toHaveLength(1);
            expect(dispatchedActions).toContainEqual(expectedAction);
        });
    });
});