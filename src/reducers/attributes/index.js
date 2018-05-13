// @vendors
import { fromJS } from 'immutable';

// @actions
import {
    CREATE_NEW_ATTRIBUTE,
    LOAD_DEFAULT_ATTRIBUTES
} from '../../actions';

// @constants
import {
    MOCK_ATTRIBUTES,
    SEED_ATTRIBUTE
} from '../../constants';

const initialState = fromJS({
    attributesList: MOCK_ATTRIBUTES
});

export const attributesReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch(type) {
        case CREATE_NEW_ATTRIBUTE:
            const currentAttributesList = state.get('attributesList').toJS();
            const newAttribute = Object.assign(
                {},
                SEED_ATTRIBUTE,
                { category: payload }
            );
            const updatedAttributesList = [...currentAttributesList, newAttribute]

            return state.merge({
                attributesList: updatedAttributesList
            });
        case LOAD_DEFAULT_ATTRIBUTES:
        default:
            return state;
    }
};
