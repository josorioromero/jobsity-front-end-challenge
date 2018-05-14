// @vendors
import { fromJS } from 'immutable';

// @actions
import {
    CREATE_NEW_ATTRIBUTE,
    DELETE_ATTRIBUTE,
    LOAD_DEFAULT_ATTRIBUTES
} from '../../actions';

// @constants
import {
    CATEGORIES,
    DATA_TYPES,
    FORMATS,
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
            const attributeId = Math.random();
            const category = CATEGORIES.COMMANDS;
            const testAction = ({
                type: CREATE_NEW_ATTRIBUTE,
                payload: {
                    category,
                    id: attributeId
                }
            });
            const expectedNewAttribute = Object.assign(
                {},
                SEED_ATTRIBUTE,
                {
                    id: attributeId,
                    category
                }
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

    context('when action value is DELETE_ATTRIBUTE', () => {
        it('should filter the state, deleting the attribute that matches the given id', () => {
            const attributeId = 3;
            const testAction = ({
                type: DELETE_ATTRIBUTE,
                payload: attributeId
            });
            const expectedState = fromJS({
                attributesList: [
                    {
                        id: 1,
                        name: 'Mock_device_1',
                        description: 'Mock_description_1',
                        dataType: DATA_TYPES.STRING,
                        format: FORMATS.NONE,
                        category: CATEGORIES.DEVICE_INFO,
                        enumerations: [
                            'foo',
                            'bar'
                        ],
                        min: null,
                        max: null,
                        unitOfMeasurement: null,
                        precision: null,
                        accuracy: null,
                        defaultValue: '',
                        device: ''
                    },
                    {
                        id: 2,
                        name: 'Mock_device_2',
                        description: 'Mock_description_2',
                        dataType: DATA_TYPES.STRING,
                        format: FORMATS.NONE,
                        category: CATEGORIES.COMMANDS,
                        enumerations: [
                            'foo',
                            'bar'
                        ],
                        min: null,
                        max: null,
                        unitOfMeasurement: null,
                        precision: null,
                        accuracy: null,
                        defaultValue: '',
                        device: ''
                    }
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
