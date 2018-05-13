import { getElement } from '../utils';

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