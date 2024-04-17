import { flattenArray } from './solution.js';

describe('flatten the array', () => {
    it('[1, [2, [3, [4]], 5]]', () => {
        expect(flattenArray([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });
    it("['a', ['b', [['c'], ['d']], 'e']]", () => {
        expect(flattenArray(['a', ['b', [['c'], ['d']], 'e']])).toEqual([
            'a',
            'b',
            'c',
            'd',
            'e',
        ]);
    });
});
