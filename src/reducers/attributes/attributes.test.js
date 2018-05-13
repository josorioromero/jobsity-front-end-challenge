// @vendors
import { fromJS } from 'immutable';

// @actions
import {
    CREATE_NEW_ATTRIBUTE,
    LOAD_DEFAULT_ATTRIBUTES
} from '../../actions';

// @constants
import {
    CATEGORIES,
    MOCK_ATTRIBUTES,
    SEED_ATTRIBUTE
} from '../../constants';

// @reducer
import { attributesReducer } from './index';

describe('attributesReducer', () => {
    context('when no action is given', () => {
        it('should return the default state', () => {
            const expectedState = fromJS({
                attributesList: MOCK_ATTRIBUTES
            });
            const actualState = attributesReducer(undefined, {});

            expect(actualState).toEqual(expectedState);
        });
    });

    context('when action value is CREATE_NEW_ATTRIBUTE', () => {
        it('should update the state with a new attribute for the given category', () => {
            const testAction = ({
                type: CREATE_NEW_ATTRIBUTE,
                payload: CATEGORIES.COMMANDS
            });
            const expectedNewAttribute = Object.assign(
                {},
                SEED_ATTRIBUTE,
                { category: testAction.payload }
            );
            const expectedState = fromJS({
                attributesList: [
                    ...MOCK_ATTRIBUTES,
                    expectedNewAttribute
                ]
            });
            const actualState = attributesReducer(undefined, testAction);

            expect(actualState).toEqual(expectedState);
        });
    });

    context('when action value is LOAD_DEFAULT_ATTRIBUTES', () => {
       it('should update the state with the two mock attributes', () => {
            const testAction = ({
                type: LOAD_DEFAULT_ATTRIBUTES
            });
            const expectedState = fromJS({
                attributesList: [
                    ...MOCK_ATTRIBUTES
                ]
            });
            const actualState = attributesReducer(undefined, testAction);

            expect(actualState).toEqual(expectedState);
       });
    });
});
