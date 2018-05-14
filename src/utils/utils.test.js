// @utils
import {
    filterAttributesList,
    getElement
} from '../utils';

// @constants
import { CATEGORIES, MOCK_ATTRIBUTES } from '../constants';

const MOCK_COLLECTION = [
    'FOO',
    'BAR',
    'VAZ'
];

describe('getElement', () => {
    context('when value exists in the collection', () => {
        it('should return the value', () => {
            const expected = 'FOO';
            const actual = getElement(MOCK_COLLECTION, expected);
            expect(actual).toEqual(expected);
        });
    });

    context('when value doesnt exists in the collection', () => {
        it('should return undefined', () => {
            const expected = undefined;
            const actual = getElement(MOCK_COLLECTION, '');
            expect(actual).toEqual(expected);
        });
    });
});

describe('filterAttributesList', () => {
    context('when attributes in collection match the given category', () => {
        it('should return a filtered array with the matching attributes', () => {
            const category = CATEGORIES.COMMANDS;
            const expected = [
                {
                    name: 'Mock_device_2',
                    description: 'Mock_description_2',
                    dataType: 'STRING',
                    format: 'NONE',
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
            ];
            const actual = filterAttributesList(MOCK_ATTRIBUTES, category);
            expect(actual).toEqual(expected);
        });
    });

    context('when attributes in collection dont match the given category', () => {
        it('should return an empty array', () => {
            const category = undefined;
            const expected = [];
            const actual = filterAttributesList(MOCK_ATTRIBUTES, category);
            expect(actual).toEqual(expected);
        });
    });
});
