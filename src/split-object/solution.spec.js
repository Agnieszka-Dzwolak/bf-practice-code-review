import { splitObject } from './solution.js';

describe('Splits an object into multiple objects with one key/value pair each', () => {
    it({ a: 1, b: 2, c: 3 }, () => {
        expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
            { a: 1 },
            { b: 2 },
            { c: 3 },
        ]);
    });
    it({ name: 'robs', age: 25, tall: true, userName: 'sbor' }, () => {
        expect(
            splitObject({
                name: 'robs',
                age: 25,
                tall: true,
                userName: 'sbor',
            }),
        ).toEqual([
            { name: 'robs' },
            { age: 25 },
            { tall: true },
            { userName: 'sbor' },
        ]);
    });
    it({}, () => {
        expect(splitObject({})).toEqual([]);
    });
});
